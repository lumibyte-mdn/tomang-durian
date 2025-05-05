import { useTranslations } from "next-intl";

export default function Contact() {
    const r = useTranslations("NavBar");
    const t = useTranslations("Contact");

    return (
        <>
            <section>
                <div className="bg-[#F7F5EB] py-20">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="font-bold font-[family-name:var(--inter)] text-3xl mb-2">{t("title1")}</h1>
                        <p className="text-[#133344] font-[family-name:var(--nunito)]">{r('home')} &gt; {r("contact")}</p>
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 py-20">
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.987734584072!2d98.6402978!3d3.5902877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312fba6bf2ee55%3A0x8f239f174dd580f3!2sRumah%20Durian%20Tomang!5e0!3m2!1sid!2sid!4v1746124418474!5m2!1sid!2sid" width="600" height="450"  loading="lazy" className="rounded-sm"></iframe>
                        </div>
                        <div>
                            1
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}