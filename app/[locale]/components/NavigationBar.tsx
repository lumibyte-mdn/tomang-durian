import Image from 'next/image';

import logo from "@/public/svg/logo.svg"
import instagram from "@/public/svg/instagram.svg"
import mail from "@/public/svg/mail.svg"
import whatsapp from "@/public/svg/whatsapp.svg"

import Link from 'next/link';

import { useTranslations } from 'next-intl';
import LanguageButton from '@/components/languageButton';

export default function NavBar() {
    const t = useTranslations("NavBar");

    return (
        <>
            <section>
                <div className="bg-[#0A472E] py-3">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex justify-between">
                            <div className="flex space-x-4">
                                <div>
                                    <p className="text-white font-[family-name:var(--nunito)] font-extralight">Welcome to Tomang Durian!</p>
                                </div>

                                <div>
                                    <p className="text-white font-[family-name:var(--nunito)] font-extralight">|</p>
                                </div>

                                <div>
                                    <p className="text-white font-[family-name:var(--nunito)] font-extralight">Call : +62 821 6694 1675</p>
                                </div>
                            </div>

                            <div className="flex space-x-4 items-center">
                                <div className="flex space-x-3 items-center">
                                    <Link href={""}>
                                        <Image
                                            src={instagram}
                                            alt=""
                                        />
                                    </Link>
                                </div>
                                <div className="flex space-x-3 items-center">
                                    <Link href={""}>
                                        <Image
                                            src={whatsapp}
                                            alt=""
                                        />
                                    </Link>
                                </div>
                                <div className="flex space-x-3 items-center">
                                    <Link href={""}>
                                        <Image
                                            src={mail}
                                            alt=""
                                        />
                                    </Link>
                                </div>

                                <div>
                                    <p className="text-white font-[family-name:var(--nunito)] text-xl font-extralight">|</p>
                                </div>

                                <div>
                                    <LanguageButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="bg-white py-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center justify-between">
                            <div>
                                <Link href={""}>
                                    <Image
                                        src={logo}
                                        alt=""
                                        className="w-60"
                                    />
                                </Link>
                            </div>

                            <div className="flex items-center">
                                <div className="space-x-10">
                                    <Link href={"/"} className="text-[#0A2C3D] font-[family-name:var(--nunito)] font-bold hover:text-[#80B500]">{t('home')}</Link>
                                    <Link href={"/product"} className="text-[#0A2C3D] font-[family-name:var(--nunito)] font-bold hover:text-[#80B500]">{t('product')}</Link>
                                    <Link href={""} className="text-[#0A2C3D] font-[family-name:var(--nunito)] font-bold hover:text-[#80B500]">{t('export')}</Link>
                                    <Link href={""} className="text-[#0A2C3D] font-[family-name:var(--nunito)] font-bold hover:text-[#80B500]">{t('about')}</Link>
                                    <Link href={""} className="text-[#0A2C3D] font-[family-name:var(--nunito)] font-bold hover:text-[#80B500]">{t('contact')}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
