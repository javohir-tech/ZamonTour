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
import { CheckCircleFill, StopwatchFill, WalletFill } from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next'


export default function VisaHelpSection() {

    const { t } = useTranslation()
    return (
        <div className='container'>
            {/* section header */}
            <SectionHeader infoTitle={t('visa-help-title')} infoSubtile={t('visa-help-subtitle')} textPosition={'text-center mb-5'} />
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
                <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard images={saudi} city={t('saudi')}       clients={t('clients_2')} cardTitle={t('card-title__2')} cardIcon_1={<WalletFill className='me-2' />} cardItem_1={t('summa-2')} cardIcon_2={<StopwatchFill className='me-2' />} cardItem_2={t('fastTime')} cardIcon_3={<CheckCircleFill className='me-2' />} cardItem_3={t('help')} /></SwiperSlide>
                <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard images={omon} city={t('omon')}         clients={t('clients_2')} cardTitle={t('card-title__2')} cardIcon_1={<WalletFill className='me-2' />} cardItem_1={t('summa-2')} cardIcon_2={<StopwatchFill className='me-2' />} cardItem_2={t('fastTime')} cardIcon_3={<CheckCircleFill className='me-2' />} cardItem_3={t('help')} /></SwiperSlide>
                <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard images={china} city={t('china')}       clients={t('clients_2')} cardTitle={t('card-title__2')} cardIcon_1={<WalletFill className='me-2' />} cardItem_1={t('summa-2')} cardIcon_2={<StopwatchFill className='me-2' />} cardItem_2={t('fastTime')} cardIcon_3={<CheckCircleFill className='me-2' />} cardItem_3={t('help')} /></SwiperSlide>
                <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard images={hongkong} city={t('kongkong')} clients={t('clients_2')} cardTitle={t('card-title__2')} cardIcon_1={<WalletFill className='me-2' />} cardItem_1={t('summa-2')} cardIcon_2={<StopwatchFill className='me-2' />} cardItem_2={t('fastTime')} cardIcon_3={<CheckCircleFill className='me-2' />} cardItem_3={t('help')} /></SwiperSlide>
                <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard images={ovropa} city={t('ovropa')}     clients={t('clients_2')} cardTitle={t('card-title__2')} cardIcon_1={<WalletFill className='me-2' />} cardItem_1={t('summa-2')} cardIcon_2={<StopwatchFill className='me-2' />} cardItem_2={t('fastTime')} cardIcon_3={<CheckCircleFill className='me-2' />} cardItem_3={t('help')} /></SwiperSlide>
                <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard images={india} city={t('india')}       clients={t('clients_2')} cardTitle={t('card-title__2')} cardIcon_1={<WalletFill className='me-2' />} cardItem_1={t('summa-2')} cardIcon_2={<StopwatchFill className='me-2' />} cardItem_2={t('fastTime')} cardIcon_3={<CheckCircleFill className='me-2' />} cardItem_3={t('help')} /></SwiperSlide>
                <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard images={japan} city={t('japan')}       clients={t('clients_2')} cardTitle={t('card-title__2')} cardIcon_1={<WalletFill className='me-2' />} cardItem_1={t('summa-2')} cardIcon_2={<StopwatchFill className='me-2' />} cardItem_2={t('fastTime')} cardIcon_3={<CheckCircleFill className='me-2' />} cardItem_3={t('help')} /></SwiperSlide>
            </Swiper>
        </div>
    )
}
