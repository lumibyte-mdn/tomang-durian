import { useTranslations } from "next-intl";

import Link from "next/link";
import Image from "next/image";

import instagram from "@/public/svg/instagram.svg"
import mail from "@/public/svg/mail.svg"
import whatsapp from "@/public/svg/whatsapp.svg"
import shopee1 from "@/public/svg/shopee1.svg"

export default function Contact() {
    const r = useTranslations("NavBar");
    const t = useTranslations("Contact");

    return (
        <>
            <section>
                <div className="bg-[#F7F5EB] lg:py-20 py-10">
                    <div className="w-[90%] lg:max-w-7xl mx-auto">
                        <h1 className="font-bold font-[family-name:var(--inter)] text-3xl mb-2">{t("title1")}</h1>
                        <p className="text-[#133344] font-[family-name:var(--nunito)]">{r('home')} &gt; {r("contact")}</p>
                    </div>
                </div>
            </section>

            <section>
                <div className="lg:max-w-7xl w-[90%] mx-auto">
                    <div className="lg:flex py-20 items-center gap-20">
                        <div className="lg:w-2/3">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.987734584072!2d98.6402978!3d3.5902877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312fba6bf2ee55%3A0x8f239f174dd580f3!2sRumah%20Durian%20Tomang!5e0!3m2!1sid!2sid!4v1746124418474!5m2!1sid!2sid" loading="lazy" className="rounded-lg w-full h-[500px] mb-10 lg:mb-0"></iframe>
                        </div>
                        <div className="space-y-4 lg:space-y-8">
                            <div className="flex items-center">
                                <Link href={""}>
                                    <Image
                                        src={whatsapp}
                                        alt=""
                                        className="lg:w-12 w-10 me-4"
                                    />
                                </Link>
                                <div>
                                    <p className="font-[family-name:var(--nunito)] lg:text-2xl text-xl font-bold">+62 821-6694-1675</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <Link href={""}>
                                    <Image
                                        src={shopee1}
                                        alt=""
                                        className="lg:w-12 w-10 me-4"
                                    />
                                </Link>
                                <div>
                                    <p className="font-[family-name:var(--nunito)] lg:text-2xl text-xl font-bold">Leo Durian</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <Link href={""}>
                                    <Image
                                        src={instagram}
                                        alt=""
                                        className="lg:w-12 w-10 me-4"
                                    />
                                </Link>
                                <div>
                                    <p className="font-[family-name:var(--nunito)] lg:text-2xl text-xl font-bold">@tomangdurian.mdn</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <Link href={""}>
                                    <Image
                                        src={mail}
                                        alt=""
                                        className="lg:w-12 w-10 me-4"
                                    />
                                </Link>
                                <div>
                                    <p className="font-[family-name:var(--nunito)] lg:text-2xl text-xl font-bold">tomangdurian@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}