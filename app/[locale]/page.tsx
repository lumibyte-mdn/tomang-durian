/* eslint-disable @next/next/no-img-element */
"use client"

import { images } from "@/lib/carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useTranslations } from "next-intl";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { testimoni } from "@/lib/testimoni";

import Image from "next/image";
import Link from "next/link";

import img1 from "@/public/jpg/img1.webp"
import kebun from "@/public/svg/kebun.svg"
import qty from "@/public/svg/quality.svg"
import arrowright from "@/public/svg/arrowright.svg"
import shipping from "@/public/svg/shipping.svg"
import flexibility from "@/public/svg/flexibility.svg"
import img2 from "@/public/jpg/img2.webp"
import shopee from "@/public/svg/shopee.svg"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { urlFor } from "@/sanity/lib/image";

export default function Content() {
  const t = useTranslations("HomePage");
  const testimonials = testimoni

  const path = usePathname()

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts()
  }, [])

  /**
   * Fetches all of the products that is
   * in the database, but limit it to display
   * only 8 products
   *
   * @return none
   */
  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products")

      const data = await response.json()

      if (!response.ok) {
        throw new Error("Something went wrong. Please check your internet connection.")
      }

      setProducts(data.products.slice(0, 8))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <section>
        <div className="w-full mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[590px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 mt-32 mb-24 gap-16 items-center">
            <div className="flex justify-end">
              <Image
                alt=""
                src={img1}
              />
            </div>
            <div><h1 className="font-[family-name:var(--nunito)] font-bold text-lg mb-4 text-[#80B500]">{t('title2')}</h1>
              <h1 className="font-[family-name:var(--inter)] font-bold text-4xl mb-6 text-[#232323] leading-12 w-3/4">{t('title1')}</h1>
              <p className="font-[family-name:var(--nunito)] font-light text-[#546375] text-lg text-balance mb-10">{t('subtitle1')}</p>
              <div>
                <Link
                  href={"#"}
                  className="bg-[#80B500] text-white px-6 py-3 font-[family-name:var(--nunito)] gap-2 inline-flex items-center hover:bg-[#0A472E] rounded-sm"
                >
                  {t('button1')}
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
      </section>

      <section>
        <div className="bg-[#F9F4EE]">
          <div className="max-w-7xl mx-auto py-20">
            <h1 className="font-[family-name:var(--inter)] font-bold text-center text-4xl mb-6 text-[#232323]">{t('titlechoose')}</h1>
            <p className="font-[family-name:var(--inter)] font-light text-[#546375] text-center text-base text-balance">{t('subtitlechoose')}</p>

            <div className="grid grid-cols-2 mt-16 gap-8">
              <div className="bg-white shadow-md rounded-sm">
                <div className="flex px-10 py-16 gap-10 items-center">
                  <Image
                    alt=""
                    src={kebun}
                  />
                  <div>
                    <h1 className="font-[family-name:var(--inter)] font-bold text-xl text-[#232323] mb-2">{t('features1')}</h1>
                    <p className="font-[family-name:var(--nunito)] font-light text-[#5C727D] text-base">{t('subtitlefeatures1')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-sm">
                <div className="flex px-10 py-16 gap-10 items-center">
                  <Image
                    alt=""
                    src={qty}
                  />
                  <div>
                    <h1 className="font-[family-name:var(--inter)] font-bold text-xl text-[#232323] mb-2">{t('features2')}</h1>
                    <p className="font-[family-name:var(--nunito)] font-light text-[#5C727D] text-base">{t('subtitlefeatures2')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-sm">
                <div className="flex px-10 py-16 gap-10 items-center">
                  <Image
                    alt=""
                    src={shipping}
                  />
                  <div>
                    <h1 className="font-[family-name:var(--inter)] font-bold text-xl text-[#232323] mb-2">{t('features3')}</h1>
                    <p className="font-[family-name:var(--nunito)] font-light text-[#5C727D] text-base">{t('subtitlefeatures3')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-sm">
                <div className="flex px-10 py-16 gap-10 items-center">
                  <Image
                    alt=""
                    src={flexibility}
                  />
                  <div>
                    <h1 className="font-[family-name:var(--inter)] font-bold text-xl text-[#232323] mb-2">{t('features4')}</h1>
                    <p className="font-[family-name:var(--nunito)] font-light text-[#5C727D] text-base">{t('subtitlefeatures4')}</p>
                  </div>
                </div>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col justify-center items-center pt-24 pb-16">
              <h1 className="font-[family-name:var(--inter)] font-bold text-center text-4xl mb-6 text-[#232323]">{t('titleproduk')}</h1>
              <p className="font-[family-name:var(--inter)] font-light text-[#546375] text-center text-base text-balance w-3/5">{t('subtitleproduk')}</p>
            </div>

            <div className="lg:grid lg:grid-cols-4 gap-4 grid grid-cols-2">
              {
                products.slice(0, 8).map((product: any, index: number) => (
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
                      {t('tombolorder')}
                    </Link>
                  </div>
                ))
              }
            </div>
            <div className="text-center pb-24 mt-16">
              <Link
                href={"#"}
                className="bg-[#80B500] font-[family-name:var(--nunito)] text-white px-6 py-3 gap-2 inline-flex items-center hover:bg-[#4A7900] rounded-sm"
              >
                {t('button2')}
                <Image
                  src={arrowright}
                  alt=""
                  className="mt-1 ms-1.5 w-4 h-4"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[#F7F5EB]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 gap-20 pt-10 items-center">
              <div className="flex justify-end">
                <Image
                  src={img2}
                  alt=""
                  className="rounded-xl w-[1500]"
                />
              </div>
              <div className="mb-10">
                <div>
                  <div className="flex items-center mb-6">
                    <Image
                      src={shopee}
                      alt=""
                      className="me-4 w-16"
                    />
                    <h1 className="font-[family-name:var(--inter)] font-bold text-4xl text-[#232323]">{t('titleexport')}</h1>
                  </div>
                  <p className="font-[family-name:var(--nunito)] font-light text-[#546375] w-4/5 text-base">{t('subtitleexport')}</p>
                </div>
                <div className="mt-8">
                  <Link
                    href={"#"}
                    className="bg-[#80B500] text-white px-6 py-3 font-[family-name:var(--nunito)] gap-2 inline-flex items-center hover:bg-[#0A472E] rounded-sm"
                  >
                    {t('buttonexport')}
                    <Image
                      src={arrowright}
                      alt=""
                      className="ms-1.5 w-4 h-4"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="lg:max-w-7xl lg:mx-auto mt-16 lg:pb-20 pt-6 pb-10 mx-6">
          <div className="flex flex-col justify-center items-center mb-14">
            <h1 className="font-[family-name:var(--inter)] font-bold text-center text-4xl mb-6 text-[#232323]">{t('titletestimoni')}</h1>
            <p className="font-[family-name:var(--inter)] font-light text-[#546375] text-center text-base text-balance w-3/5">{t('subtitletestimoni')}</p>
          </div>

          <div className="mb-5">
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              breakpoints={{
                768: {
                  slidesPerView: 2, // Saat lebar layar >= 768px, tampilkan 2 slide
                },
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="lg:mb-20 mb-12 border-2 rounded-lg border-[#E5EAF4] lg:py-10 lg:px-12 py-8 px-8 lg:min-h-[300px] lg:max-h-[350px] max-h-[600px] min-h-[450px] lg:justify-between flex flex-col text-center lg:text-left">
                    <div className="lg:flex-row lg:items-center flex flex-col items-center">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        loading="lazy"
                        className="rounded-full border-gray-300 lg:me-6 lg:w-20 w-24"
                      />
                      <div>
                        <p className="text-2xl font-bold font-grotesk text-[#183B56] mb-1 mt-6 lg:mt-0">{testimonial.name}</p>
                        <p className="text-[#5A7184]">{testimonial.work}</p>
                      </div>
                    </div>
                    <div className="mt-6 flex-grow">
                      <p className="text-[#5A7184] lg:text-lg text-base">{path.split("/")[1] == "id" ? testimonial.textId : testimonial.textEn}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
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
  );
}
