 "use client"

import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Product() {
    return (
        <>
            <section>
                <div className="bg-[#F7F5EB] py-20">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="font-bold font-[family-name:var(--inter)] text-3xl mb-2">Our Product</h1>
                        <p className="text-[#133344] font-[family-name:var(--nunito)]">bantu yah ko</p>
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-7xl mx-auto py-20">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="font-[family-name:var(--inter)] font-bold text-xl mb-1">Our Durian Products</h1>
                            <p className="font-[family-name:var(--nunito)] text-sm text-[#666E77]">About 9,620 results</p>
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
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
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
                                    // onChange={() => handleFilter(selectedCategory)}
                                    placeholder="Type here to search ..."
                                    className="w-[500px] py-3 pl-10 pr-4 lg:text-base placeholder:text-sm lg:placeholder:text-base placeholder:font-[family-name:var(--inter)] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                                />
                            </div>
                        </div>
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