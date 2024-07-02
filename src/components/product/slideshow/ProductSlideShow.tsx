"use client"

import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';


interface Props {
    images: string[];
    title: string;
    className: string;
}


export const ProductSlideShow = ({ images, title, className }: Props) => {
    return (
        <section className={className} >
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='w-full h-full '
            >
                <SwiperSlide className='min-w-full '>

                </SwiperSlide>
            </Swiper>
        </section>
    );
}
