"use client"

import { useTranslations } from "next-intl";
import { FloatingWhatsApp } from "react-floating-whatsapp";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";

export default function Product() {
    const t = useTranslations("Product")
    const s = useTranslations("HomePage")
    const r = useTranslations("NavBar");

    const path = usePathname()

    const [products, setProducts] = useState([])
    const [displayedProducts, setDisplayedProducts] = useState([])

    useEffect(() => {
        fetchProduct()
    }, [])

    const fetchProduct = async () => {
        try {
            const response = await fetch("/api/products")

            const data = await response.json()

            setProducts(data.products)
            setDisplayedProducts(data.products)
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e: any) => {
        const result = products.filter((product: any) => product.productName.toLowerCase().includes(e.currentTarget.value.toLowerCase()))

        setDisplayedProducts(result)
    }

    return (
        <>
            <section>
                <div className="bg-[#F7F5EB] lg:py-20 py-10">
                    <div className="w-[90%] lg:max-w-7xl mx-auto">
                        <h1 className="font-bold font-[family-name:var(--inter)] lg:text-3xl text-2xl mb-2">{t("title1")}</h1>
                        <p className="text-[#133344] font-[family-name:var(--nunito)]">{r('home')} &gt; {r("product")}</p>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-[90%] lg:max-w-7xl mx-auto">
                    <div className="flex flex-col md:items-center lg:flex-row lg:items-center lg:justify-between md:text-center lg:text-left lg:mt-20 mt-12 mb-12">
                        <div className="lg:mb-0 mb-5">
                            <h1 className="font-[family-name:var(--inter)] font-bold text-xl mb-1">{t("titleproduct")}</h1>
                            <p className="font-[family-name:var(--nunito)] text-sm text-[#666E77]">{ path.split("/")[1] == "id" ? `${displayedProducts.length} hasil pencarian` : `${displayedProducts.length} ${displayedProducts.length > 1 ? "products" : "product" } displayed` }</p>
                        </div>

                        <div className="w-full lg:w-auto relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="transform translate-y-[35px] w-5 h-5 text-gray-500 ml-[12px]"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>

                            <input type="text" className="w-full lg:w-[500px] py-3 pl-10 pr-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder={t("searchinput")} onChange={(e) => handleChange(e)} />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-[90%] lg:max-w-7xl mx-auto">
                    <div className="md:grid md:grid-cols-2 lg:grid-cols-4 grid grid-cols-2 gap-4 lg:mb-20 mb-16">
                        {
                            displayedProducts.map((product: any, index) => (
                                <div key={index} className="bg-[#F5F5F5] flex flex-col items-center rounded-xl mb-10 lg:mb-0">
                                    <Image src={urlFor(product.productImage.asset._ref).url()} alt="" className="rounded-t-xl" width={800} height={800} />
                                    <h1 className="font-[family-name:var(--inter)] font-semibold lg:text-xl text-sm mt-3 mb-2 text-center text-[#223645] px-4">{product.productName}</h1>
                                    <p className="font-[family-name:var(--nunito)] text-center text-[#223645] lg:text-sm text-xs mb-5 line-clamp-2 px-4 font-light">
                                        { path.split("/")[1] == "id" ? product.productDescriptionIdn : product.productDescriptionEn }
                                    </p>
                                    <Link
                                        href={""}
                                        className="bg-[#80B500] mb-5 px-8 rounded-sm py-2 font-[family-name:var(--nunito)] text-white hover:bg-[#4A7900]"
                                    >
                                        {s('tombolorder')}
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <div>
                <FloatingWhatsApp
                    phoneNumber="6281234569336"
                    accountName={"Tomang Durian"}
                    avatar="/jpg/avatar.png"
                    allowEsc
                    className="floating-whatsapp"
                />
            </div>
        </>
    )
}