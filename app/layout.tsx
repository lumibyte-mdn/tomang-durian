import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tomang Durian | Distributor Durian Kupas Medan Nomor Satu",
  description: "Tomang Durian adalah merek durian premium yang berkomitmen untuk menghadirkan kualitas terbaik, cita rasa istimewa, dan kepuasan pelanggan. Perjalanan kami dimulai dari kecintaan mendalam terhadap durian serta visi untuk memperkenalkan durian terbaik kepada para pecinta durian di mana pun berada.",
  keywords: ["Durian", "Tomang Durian", "Durian Medan", "Durian Premium", "Jual Durian", "Durian Kupas", "Durian Freezer"],
  authors: [{ name: "Tomang Durian", url: "https://tomangdurian.com" }],
  creator: "Tomang Durian",
  metadataBase: new URL("https://tomangdurian.com"),
  verification: {
    google: "Gxm00We1dD_FZ-f_Wz0p45nSmaUhSg5jfl1wG16lp8Q" // Ganti ini dengan kode aslinya
  },
  openGraph: {
    title: "Tomang Durian | Distributor Durian Kupas Medan Nomor Satu",
    description: "Tomang Durian adalah merek durian premium yang berkomitmen untuk menghadirkan kualitas terbaik, cita rasa istimewa, dan kepuasan pelanggan. Perjalanan kami dimulai dari kecintaan mendalam terhadap durian serta visi untuk memperkenalkan durian terbaik kepada para pecinta durian di mana pun berada.",
    url: "https://tomangdurian.com",
    siteName: "Tomang Durian",
    images: [
      {
        url: "/svg/logo.svg",
        width: 1200,
        height: 630,
        alt: "Tomang Durian",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomang Durian",
    description: "Pusat durian premium terbaik di Jakarta.",
    images: ["/svg/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {

  return (
    <html>
      <body
        className={`${inter.variable} ${nunito.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
