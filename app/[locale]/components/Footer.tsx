import { useTranslations } from "next-intl";

import Link from "next/link";
import Image from "next/image";

import logo from "@/public/svg/logo.svg"
import instagram from "@/public/svg/instagram.svg"
import mail from "@/public/svg/mail.svg"
import whatsapp from "@/public/svg/whatsapp.svg"
import shopee1 from "@/public/svg/shopee1.svg"

export default function Footer() {
    const t = useTranslations("Footer");
    const s = useTranslations("NavBar");

    return (
        <>
            <div className="bg-[#171B2A]">
                <div className="max-w-7xl mx-auto py-20">
                    <div className="grid grid-cols-3 gap-28">
                        <div>
                            <div className="mb-6">
                                <Link href={""}>
                                    <Image
                                        src={logo}
                                        alt=""
                                        className="w-48"
                                    />
                                </Link>
                            </div>
                            <p className="text-white font-[family-name:var(--nunito)] text-sm">{t('subtitlefooter2')}</p>
                            <div className=" flex mt-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-10 me-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                <div>
                                    <p className="text-white font-[family-name:var(--nunito)] text-sm">Jl. Gatot Subroto No.186, Kec. Medan Sunggal, Kota Medan, Sumatera Utara 20118</p>
                                </div>
                            </div>
                            <div className="flex space-x-4 items-center mt-6">
                                <div className="">
                                    <Link href={""}>
                                        <Image
                                            src={instagram}
                                            alt=""
                                            className="w-7"
                                        />
                                    </Link>
                                </div>
                                <div className="flex space-x-3 items-center">
                                    <Link href={""}>
                                        <Image
                                            src={whatsapp}
                                            alt=""
                                            className="w-7"
                                        />
                                    </Link>
                                </div>
                                <div className="flex space-x-3 items-center">
                                    <Link href={""}>
                                        <Image
                                            src={mail}
                                            alt=""
                                            className="w-7"
                                        />
                                    </Link>
                                </div>
                                <div className="flex space-x-3 items-center">
                                    <Link href={""}>
                                        <Image
                                            src={shopee1}
                                            alt=""
                                            className="w-7"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-white font-bold font-[family-name:var(--inter)] text-lg mb-10">{t('titlefooter2')}</h1>
                            <div className="flex flex-col space-y-4">
                                <Link href={""} className="text-white text-sm font-[family-name:var(--nunito)]">{s('home')}</Link>
                                <Link href={""} className="text-white text-sm font-[family-name:var(--nunito)]">{s('product')}</Link>
                                <Link href={""} className="text-white text-sm font-[family-name:var(--nunito)]">{s('export')}</Link>
                                <Link href={""} className="text-white text-sm font-[family-name:var(--nunito)]">{s('about')}</Link>
                                <Link href={""} className="text-white text-sm font-[family-name:var(--nunito)]">{s('contact')}</Link>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-white font-bold font-[family-name:var(--inter)] text-lg mb-10">{t('titlefooter')}</h1>
                            <p className="text-white font-[family-name:var(--nunito)] text-sm">{t('subtitle1')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#313441] py-2 text-center">
                <div className="max-w-7xl mx-auto">
                    <p className="text-white text-sm font-[family-name:var(--nunito)]">©Tomangdurian 2025 All rights reserved.</p>
                </div>
            </div>
        </>
    )
}