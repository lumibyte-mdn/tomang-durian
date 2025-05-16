"use client"

import Image from 'next/image';

import logo from "@/public/svg/logo.svg"
import instagram from "@/public/svg/instagram.svg"
import mail from "@/public/svg/mail.svg"
import whatsapp from "@/public/svg/whatsapp.svg"

import Link from 'next/link';

import { useTranslations } from 'next-intl';
import LanguageButton from '@/components/languageButton';
import { useState } from 'react';

export default function NavBar() {
    const t = useTranslations("NavBar");

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <>
            {/* dekstop view */}
            <section>
                <div className="bg-[#0A472E] py-3 lg:block hidden">
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
                                    <Link href={"https://www.instagram.com/tomangdurian.mdn"}>
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

            {/* dekstop view */}
            <section className='hidden lg:block'>
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
                                    <Link href={"/about-us"} className="text-[#0A2C3D] font-[family-name:var(--nunito)] font-bold hover:text-[#80B500]">{t('about')}</Link>
                                    <Link href={"/contact"} className="text-[#0A2C3D] font-[family-name:var(--nunito)] font-bold hover:text-[#80B500]">{t('contact')}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* mobile view */}
            <div className="lg:hidden">
                <div className="mx-6 md:mx-10">
                    <div className="flex items-center justify-between py-6">
                        <Image src={logo} alt="" className="lg:w-24 w-40 md:w-28" />
                        <div className='flex items-center'>
                            <button
                                onClick={toggleMenu}
                                type="button"
                                className="inline-flex items-center justify-center p-2 text-[#80B500]"
                                aria-controls="mobile-menu"
                                aria-expanded={isOpen ? "true" : "false"}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>

                            <div>
                                <LanguageButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`${isOpen ? "absolute" : "hidden"} top-22 left-0 w-full bg-[#0A472E] z-10`} id="mobile-menu">
                <div className="space-y-1 px-6 py-4 lg:hidden">
                    <Link
                        href="/"
                        className="text-white hover:bg-[#80B500] hover:text-white block px-3 py-2 rounded-md text-base md:text-base font-[family-name:var(--nunito)]"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="/product"
                        className="text-white hover:bg-[#80B500] hover:text-white block px-3 py-2 rounded-md text-base md:text-base font-[family-name:var(--nunito)]"
                        onClick={() => setIsOpen(false)}
                    >
                        Product
                    </Link>
                    <Link
                        href="/about-us"
                        className="text-white hover:bg-[#80B500] hover:text-white block px-3 py-2 rounded-md text-base md:text-base font-[family-name:var(--nunito)]"
                        onClick={() => setIsOpen(false)}
                    >
                        About Us
                    </Link>
                    <Link
                        href="/contact"
                        className="text-white hover:bg-[#80B500] hover:text-white block px-3 py-2 rounded-md text-base md:text-base font-[family-name:var(--nunito)]"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </>
    );
};
