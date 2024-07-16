import React from 'react'
// components
import SuggestionsCard from '../../Components/Cards/Suggestions-card'
import SectionHeader from '../../Components/SectionHeader/SectionHeader';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Suggestions.css';

// card images 
import first from '../../Photes/offers-01.jpg'
import istanbul from '../../Photes/istanbul.jpg'
import dubai from '../../Photes/dubai2.jpg'
import antalya from '../../Photes/Antalya2.jpg'
import kanada from '../../Photes/kanada.jpg'
import yevropa from '../../Photes/yevropa.jpg'
import angliya from '../../Photes/eng.jpg'
import usa from '../../Photes/aqsh.jpg'

// import required modules
import { Autoplay, Navigation, } from 'swiper/modules';
// boootstrap icons
import { AirplaneFill, BuildingFill, CarFrontFill } from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';


export default function Suggestions() {
  const {t} = useTranslation()
  return (
    <div className="container py-5" id='tours'>
      <div className='suggestions-section py-5'>
        {/* section header */}
        <SectionHeader infoTitle={t('suggestions-section__title')} infoSubtile={t('suggestions-section__subtitle')} textPosition={'text-center mb-5'}/>
        {/* swiper card */}
        <div className='suggestions-section__cards'>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
              366: {
                slidesPerView: 1,
              },
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard cardIcon_3={<BuildingFill className='me-2'/>} cardIcon_2={<AirplaneFill className='me-2'/>} cardIcon_1={<CarFrontFill className='me-2'/>} clientsTitle={t('clienst')} cardTitle={t('card-title')} cardItem_1={t('hotel-info')} cardItem_2={t('aviabiletlar')} cardItem_3={t('location')} images={antalya} city={t('antalya')} summa={'$999'} clients={"500"}/></SwiperSlide>
            <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard cardIcon_3={<BuildingFill className='me-2'/>} cardIcon_2={<AirplaneFill className='me-2'/>} cardIcon_1={<CarFrontFill className='me-2'/>} clientsTitle={t('clienst')} cardTitle={t('card-title')} cardItem_1={t('hotel-info')} cardItem_2={t('aviabiletlar')} cardItem_3={t('location')} images={first} city={t('sharm')} summa={'$800'} clients={'200'}/></SwiperSlide>
            <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard cardIcon_3={<BuildingFill className='me-2'/>} cardIcon_2={<AirplaneFill className='me-2'/>} cardIcon_1={<CarFrontFill className='me-2'/>} clientsTitle={t('clienst')} cardTitle={t('card-title')} cardItem_1={t('hotel-info')} cardItem_2={t('aviabiletlar')} cardItem_3={t('location')} images={usa} city={t('usa')} clients={"434"}/></SwiperSlide>
            <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard cardIcon_3={<BuildingFill className='me-2'/>} cardIcon_2={<AirplaneFill className='me-2'/>} cardIcon_1={<CarFrontFill className='me-2'/>} clientsTitle={t('clienst')} cardTitle={t('card-title')} cardItem_1={t('hotel-info')} cardItem_2={t('aviabiletlar')} cardItem_3={t('location')} images={angliya} city={t('england')} clients={'300'}/></SwiperSlide>
            <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard cardIcon_3={<BuildingFill className='me-2'/>} cardIcon_2={<AirplaneFill className='me-2'/>} cardIcon_1={<CarFrontFill className='me-2'/>} clientsTitle={t('clienst')} cardTitle={t('card-title')} cardItem_1={t('hotel-info')} cardItem_2={t('aviabiletlar')} cardItem_3={t('location')} images={kanada} city={t('kanada')} clients={'300'}/></SwiperSlide>
            <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard cardIcon_3={<BuildingFill className='me-2'/>} cardIcon_2={<AirplaneFill className='me-2'/>} cardIcon_1={<CarFrontFill className='me-2'/>} clientsTitle={t('clienst')} cardTitle={t('card-title')} cardItem_1={t('hotel-info')} cardItem_2={t('aviabiletlar')} cardItem_3={t('location')} images={yevropa} city={t('yevropa')} clients={'360'}/></SwiperSlide>
            <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard cardIcon_3={<BuildingFill className='me-2'/>} cardIcon_2={<AirplaneFill className='me-2'/>} cardIcon_1={<CarFrontFill className='me-2'/>} clientsTitle={t('clienst')} cardTitle={t('card-title')} cardItem_1={t('hotel-info')} cardItem_2={t('aviabiletlar')} cardItem_3={t('location')} images={istanbul} city={t('istanbul')} clients={'234'} summa={'$420'}/></SwiperSlide>
            <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard cardIcon_3={<BuildingFill className='me-2'/>} cardIcon_2={<AirplaneFill className='me-2'/>} cardIcon_1={<CarFrontFill className='me-2'/>} clientsTitle={t('clienst')} cardTitle={t('card-title')} cardItem_1={t('hotel-info')} cardItem_2={t('aviabiletlar')} cardItem_3={t('location')} images={dubai} city={t('dubai')} clients={'300'} summa={'$700'}/></SwiperSlide>
          </Swiper> 
        </div>
      </div>
    </div>
  )
}
