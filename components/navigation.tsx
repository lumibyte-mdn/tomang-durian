"use client"

import Link from "next/link";
import Image from "next/image";

import logo from "@/public/svg/logo.svg"
import instagram from "@/public/svg/instagram.svg"
import mail from "@/public/svg/mail.svg"
import whatsapp from "@/public/svg/whatsapp.svg"

export default function Navigasi() {
    return (
        <>
            <section>
                <div className="bg-[#262626] py-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex justify-between">
                            <div className="flex space-x-10">
                                <div className="flex space-x-3 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>
                                    <p className="text-white font-[family-name:var(--roboto)] font-normal">+62 821 6694 1675</p>
                                </div>

                                <div className="flex space-x-3 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <p className="text-white font-[family-name:var(--roboto)] font-normal">09.00 - 20.00 WIB</p>
                                </div>

                                <div className="flex space-x-3 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                    <p className="text-white font-[family-name:var(--roboto)] font-normal">Jl. Gatot Subroto No.186, Medan</p>
                                </div>
                            </div>

                            <div className="flex space-x-4">
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="bg-[#4A7900] py-4">
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

                            <div className="flex">
                                <div className="space-x-10 me-10">
                                    <Link href={""} className="text-white font-[family-name:var(--raleway)] font-semibold hover:text-[#F9BC2E]">Beranda</Link>
                                    <Link href={""} className="text-white font-[family-name:var(--raleway)] font-semibold hover:text-[#F9BC2E]">Produk</Link>
                                    <Link href={""} className="text-white font-[family-name:var(--raleway)] font-semibold hover:text-[#F9BC2E]">Export Durian</Link>
                                    <Link href={""} className="text-white font-[family-name:var(--raleway)] font-semibold hover:text-[#F9BC2E]">Tentang Kami</Link>
                                    <Link href={""} className="text-white font-[family-name:var(--raleway)] font-semibold hover:text-[#F9BC2E]">Kontak</Link>
                                </div>
                                <div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
