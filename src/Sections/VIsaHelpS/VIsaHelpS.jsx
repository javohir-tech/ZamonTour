import React from 'react'
// components
import SectionHeader from '../../Components/SectionHeader/SectionHeader'
import SuggestionsCard from '../../Components/Cards/Suggestions-card'

{/* images */ }
import saudi from '../../Photes/saudi.jpg'
import omon from '../../Photes/oman.jpg'
import china from '../../Photes/china.jpg'
import hongkong from '../../Photes/hongkong.jpg'
import ovropa from '../../Photes/ovropa.jpeg'
import india from '../../Photes/india.jpg'
import japan from '../../Photes/japan.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, } from 'swiper/modules';
// boootstrap icons
import { AirplaneFill, BuildingFill, CarFrontFill, Check2, Check2Square, CheckCircleFill, Stopwatch, StopwatchFill, Wallet2, WalletFill } from 'react-bootstrap-icons';


export default function VisaHelpSection() {
    return (
        <div className='container'>
            {/* section header */}
            <SectionHeader infoTitle={'Viza Olishga Yordam Beramiz'} infoSubtile={'Biz sizga oson, tez fursatda va albatta ishonchli viza olishga yordam beramiz.'} textPosition={'text-center mb-5'} />
            {/* slide with cards */}
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    996: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    366: {
                        slidesPerView: 1,
                    },
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard images={saudi} city={'Saudiya Arabistoni'} clients={'234 kishi ro\'yhatdan o\'tganlar'} cardTitle={'Bizning xizmatlar o\'z ichiga oladi'} cardIcon_1={<WalletFill className='me-2' />} cardItem_1={'Eng arzon narxlar'} cardIcon_2={<StopwatchFill className='me-2' />} cardItem_2={'Tezkor ishlash vaqti'} cardIcon_3={<CheckCircleFill className='me-2' />} cardItem_3={'Ishonchli yordam'} /></SwiperSlide>
                <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard images={omon} city={'Omon'} clients={'234 kishi ro\'yhatdan o\'tganlar'} cardTitle={'Bizning xizmatlar o\'z ichiga oladi'} cardIcon_1={<WalletFill className='me-2' />} cardItem_1={'Eng arzon narxlar'} cardIcon_2={<StopwatchFill className='me-2' />} cardItem_2={'Tezkor ishlash vaqti'} cardIcon_3={<CheckCircleFill className='me-2' />} cardItem_3={'Ishonchli yordam'} /></SwiperSlide>
                <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard images={china} city={'Xitoy'} clients={'234 kishi ro\'yhatdan o\'tganlar'} cardTitle={'Bizning xizmatlar o\'z ichiga oladi'} cardIcon_1={<WalletFill className='me-2' />} cardItem_1={'Eng arzon narxlar'} cardIcon_2={<StopwatchFill className='me-2' />} cardItem_2={'Tezkor ishlash vaqti'} cardIcon_3={<CheckCircleFill className='me-2' />} cardItem_3={'Ishonchli yordam'} /></SwiperSlide>
                <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard images={hongkong} city={'Xong Kong'} clients={'234 kishi ro\'yhatdan o\'tganlar'} cardTitle={'Bizning xizmatlar o\'z ichiga oladi'} cardIcon_1={<WalletFill className='me-2' />} cardItem_1={'Eng arzon narxlar'} cardIcon_2={<StopwatchFill className='me-2' />} cardItem_2={'Tezkor ishlash vaqti'} cardIcon_3={<CheckCircleFill className='me-2' />} cardItem_3={'Ishonchli yordam'} /></SwiperSlide>
                <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard images={ovropa} city={'Yevropa (Shengen)'} clients={'234 kishi ro\'yhatdan o\'tganlar'} cardTitle={'Bizning xizmatlar o\'z ichiga oladi'} cardIcon_1={<WalletFill className='me-2' />} cardItem_1={'Eng arzon narxlar'} cardIcon_2={<StopwatchFill className='me-2' />} cardItem_2={'Tezkor ishlash vaqti'} cardIcon_3={<CheckCircleFill className='me-2' />} cardItem_3={'Ishonchli yordam'} /></SwiperSlide>
                <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard images={india} city={'Hindiston'} clients={'234 kishi ro\'yhatdan o\'tganlar'} cardTitle={'Bizning xizmatlar o\'z ichiga oladi'} cardIcon_1={<WalletFill className='me-2' />} cardItem_1={'Eng arzon narxlar'} cardIcon_2={<StopwatchFill className='me-2' />} cardItem_2={'Tezkor ishlash vaqti'} cardIcon_3={<CheckCircleFill className='me-2' />} cardItem_3={'Ishonchli yordam'} /></SwiperSlide>
                <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard images={japan} city={'Yaponiya'} clients={'234 kishi ro\'yhatdan o\'tganlar'} cardTitle={'Bizning xizmatlar o\'z ichiga oladi'} cardIcon_1={<WalletFill className='me-2' />} cardItem_1={'Eng arzon narxlar'} cardIcon_2={<StopwatchFill className='me-2' />} cardItem_2={'Tezkor ishlash vaqti'} cardIcon_3={<CheckCircleFill className='me-2' />} cardItem_3={'Ishonchli yordam'} /></SwiperSlide>
            </Swiper>
        </div>
    )
}
