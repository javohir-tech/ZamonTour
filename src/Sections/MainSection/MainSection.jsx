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
import { useTranslation } from 'react-i18next';

export default function MainSection() {
    const {t} = useTranslation()
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                id='home'
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><SlideItem banner={'slide-item__1'} city={t('istanbul')} population={'44.48 M'} territory={'275.400 KM2'} price={'$946.000'}/></SwiperSlide>
                <SwiperSlide><SlideItem banner={'slide-item__2'} city={t('antalya')}  population={'8.66M'} territory={'41.290 KM2'} price={'$1.100.200'}/></SwiperSlide>
                <SwiperSlide><SlideItem banner={'slide-item__3'} city={t('dubai')}  population={'67.41 M'} territory={' 551.500 KM2'} price={'$425.600'}/></SwiperSlide>
                <SwiperSlide><SlideItem banner={'slide-item__4'} city={t('sharm')}  population={'69.86 M'} territory={'513.120 KM2'} price={'$165.450'}/></SwiperSlide>
            </Swiper>
        </>
    )
}
