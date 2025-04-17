/* eslint-disable @next/next/no-img-element */
"use client"

import { images } from "@/lib/carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Content() {
    return (
        <>
            <section>
                <div className="w-full mx-auto">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={10}
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
                                    className="w-full h-[585px] object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
}
