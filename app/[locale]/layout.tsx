import set from "lodash/set";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages, setRequestLocale } from "next-intl/server";
import NavBar from "./components/NavigationBar";
import Footer from "./components/Footer";

function transformMessages(messages: Record<string, any>) {
  const transformed: Record<string, any> = {};
  Object.entries(messages).forEach(([key, value]) => {
    set(transformed, key, value);
  });
  return transformed;
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // Tetap gunakan Promise
}) {
  const resolvedParams = await params; // Tunggu params selesai
  // console.log("resolvedParams:", resolvedParams);

  const { locale } = resolvedParams;

  const messages = transformMessages(await getMessages());

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <NavBar />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}