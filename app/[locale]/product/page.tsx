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
        const result = products.filter((product: any) => product.productName.includes(e.currentTarget.value))

        setDisplayedProducts(result)
    }

    return (
        <>
            <section>
                <div className="bg-[#F7F5EB] py-20">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="font-bold font-[family-name:var(--inter)] text-3xl mb-2">{t("title1")}</h1>
                        <p className="text-[#133344] font-[family-name:var(--nunito)]">{r('home')} &gt; {r("product")}</p>
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mt-20 mb-12">
                        <div>
                            <h1 className="font-[family-name:var(--inter)] font-bold text-xl mb-1">{t("titleproduct")}</h1>
                            <p className="font-[family-name:var(--nunito)] text-sm text-[#666E77]">{ path.split("/")[1] == "id" ? `${displayedProducts.length} hasil pencarian` : `${displayedProducts.length} ${displayedProducts.length > 1 ? "products" : "product" } displayed` }</p>
                        </div>
                        <div className="py-3 px-3 !z-50 flex items-center">
                            <div className="relative">
                                {/* Icon Search */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="absolute left-3 top-6 transform -translate-y-1/2 w-5 h-5 text-gray-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                    />
                                </svg>

                                {/* Input Field */}
                                <input
                                    type="text"
                                    id="search"
                                    onChange={(e) => handleChange(e)}
                                    placeholder={t("searchinput")}
                                    className="w-[500px] py-3 pl-10 pr-4 lg:text-base placeholder:text-sm lg:placeholder:text-base placeholder:font-[family-name:var(--inter)] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-7xl mx-auto">
                    <div className="lg:grid lg:grid-cols-4 gap-4 grid grid-cols-2 mb-20">
                        {
                            displayedProducts.map((product: any, index) => (
                                <div key={index} className="bg-[#F5F5F5] flex flex-col items-center rounded-xl">
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