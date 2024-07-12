
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './MainSection.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SlideItem from '../../Components/SlideItem/SlideItem';

export default function MainSection() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><SlideItem banner={'slide-item__1'} city={'Istanbul'} population={'44.48 M'} territory={'275.400 KM2'} price={'$946.000'}/></SwiperSlide>
                <SwiperSlide><SlideItem banner={'slide-item__2'} city={'Antalya'}  population={'8.66M'} territory={'41.290 KM2'} price={'$1.100.200'}/></SwiperSlide>
                <SwiperSlide><SlideItem banner={'slide-item__3'} city={'Dubai'}  population={'67.41 M'} territory={' 551.500 KM2'} price={'$425.600'}/></SwiperSlide>
                <SwiperSlide><SlideItem banner={'slide-item__4'} city={'Sharm El-Sheikh'}  population={'69.86 M'} territory={'513.120 KM2'} price={'$165.450'}/></SwiperSlide>
            </Swiper>
        </>
    )
}
