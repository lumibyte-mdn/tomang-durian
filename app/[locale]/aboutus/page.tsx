import { useTranslations } from "next-intl";

import Image from "next/image";
import Link from "next/link";

import img1 from "@/public/jpg/img1.webp"
import arrowright from "@/public/svg/arrowright.svg"
import qrcode from "@/public/jpg/qrcode.webp"

export default function Aboutus() {
    const r = useTranslations("NavBar");
    const t = useTranslations("Aboutus");
    const s = useTranslations("HomePage");

    return (
        <>
            <section>
                <div className="bg-[#F7F5EB] py-20">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="font-bold font-[family-name:var(--inter)] text-3xl mb-2">{t("title1")}</h1>
                        <p className="text-[#133344] font-[family-name:var(--nunito)]">{r('home')} &gt; {r("about")}</p>
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 mt-32 mb-24 gap-16 items-center">
                        <div><h1 className="font-[family-name:var(--nunito)] font-bold text-lg mb-4 text-[#80B500]">{s('title2')}</h1>
                            <h1 className="font-[family-name:var(--inter)] font-bold text-4xl mb-6 text-[#232323] leading-12 w-3/4">{s('title1')}</h1>
                            <p className="font-[family-name:var(--nunito)] font-light text-[#546375] text-lg text-balance mb-10">{t('subtitle1')}</p>
                        </div>
                        <div className="flex justify-end">
                            <Image
                                alt=""
                                src={img1}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="bg-[#F7F5EB]">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-2 py-20 gap-20 items-center">
                            <div className="flex justify-end">
                                <Image
                                    src={qrcode}
                                    alt=""
                                    className="rounded-xl h-96 w-96"
                                />
                            </div>
                            <div>
                                <h1 className="font-[family-name:var(--inter)] font-bold text-4xl mb-6 text-[#232323]">{s('titleexport')}</h1>
                                <p className="font-[family-name:var(--nunito)] font-light text-[#546375] w-4/5 text-base">{s('subtitleexport')}</p>
                                <div className="mt-8">
                                    <Link
                                        href={"#"}
                                        className="bg-[#80B500] text-white px-6 py-3 font-[family-name:var(--nunito)] gap-2 inline-flex items-center hover:bg-[#0A472E] rounded-sm"
                                    >
                                        {s('button1')}
                                        <Image
                                            src={arrowright}
                                            alt=""
                                            className="mt-1 ms-1.5 w-4 h-4 mb-1"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-7xl mx-auto">

                </div>
            </section>
        </>
    )
}