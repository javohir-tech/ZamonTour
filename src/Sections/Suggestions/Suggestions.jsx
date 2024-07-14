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


export default function Suggestions() {
  return (
    <div className="container py-5">
      <div className='suggestions-section py-5'>
        {/* section header */}
        <SectionHeader infoTitle={'Eng Yaxshi Haftalik Takliflarimiz'} infoSubtile={'Har bir shaharda faqat siz uchun tuzilgan eng yaxshi haftalik takliflarni kashf eting. O\'zingizni sarguzashtlar dunyosida his qiling.'} textPosition={'text-center mb-5'}/>
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
            navigation={false}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard cardIcon_3={<BuildingFill className='me-2'/>} cardIcon_2={<AirplaneFill className='me-2'/>} cardIcon_1={<CarFrontFill className='me-2'/>} clientsTitle={'/kishi'} cardTitle={'Tur o\'z ishiga oladi'} cardItem_1={'5 kunlik sayohat > Mehmonxona'} cardItem_2={'Aviabiletlar'} cardItem_3={'Eng yaxshi manzillar'} images={antalya} city={'Antalya'} summa={'$999'} clients={"500 buyurtmalar"}/></SwiperSlide>
            <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard cardIcon_3={<BuildingFill className='me-2'/>} cardIcon_2={<AirplaneFill className='me-2'/>} cardIcon_1={<CarFrontFill className='me-2'/>} clientsTitle={'/kishi'} cardTitle={'Tur o\'z ishiga oladi'} cardItem_1={'5 kunlik sayohat > Mehmonxona'} cardItem_2={'Aviabiletlar'} cardItem_3={'Eng yaxshi manzillar'} images={first} city={'Sharm El-Sheikh'} summa={'$800'} clients={'200 buyurtmalar'}/></SwiperSlide>
            <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard cardIcon_3={<BuildingFill className='me-2'/>} cardIcon_2={<AirplaneFill className='me-2'/>} cardIcon_1={<CarFrontFill className='me-2'/>} clientsTitle={'/kishi'} cardTitle={'Tur o\'z ishiga oladi'} cardItem_1={'5 kunlik sayohat > Mehmonxona'} cardItem_2={'Aviabiletlar'} cardItem_3={'Eng yaxshi manzillar'} images={usa} city={'AQSH'} clients={"434 buyurtmalar"}/></SwiperSlide>
            <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard cardIcon_3={<BuildingFill className='me-2'/>} cardIcon_2={<AirplaneFill className='me-2'/>} cardIcon_1={<CarFrontFill className='me-2'/>} clientsTitle={'/kishi'} cardTitle={'Tur o\'z ishiga oladi'} cardItem_1={'5 kunlik sayohat > Mehmonxona'} cardItem_2={'Aviabiletlar'} cardItem_3={'Eng yaxshi manzillar'} images={angliya} city={'Angliya'} clients={'300 buyurtmalar'}/></SwiperSlide>
            <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard cardIcon_3={<BuildingFill className='me-2'/>} cardIcon_2={<AirplaneFill className='me-2'/>} cardIcon_1={<CarFrontFill className='me-2'/>} clientsTitle={'/kishi'} cardTitle={'Tur o\'z ishiga oladi'} cardItem_1={'5 kunlik sayohat > Mehmonxona'} cardItem_2={'Aviabiletlar'} cardItem_3={'Eng yaxshi manzillar'} images={kanada} city={'Kanada'} clients={'300 buyurtmalar'}/></SwiperSlide>
            <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard cardIcon_3={<BuildingFill className='me-2'/>} cardIcon_2={<AirplaneFill className='me-2'/>} cardIcon_1={<CarFrontFill className='me-2'/>} clientsTitle={'/kishi'} cardTitle={'Tur o\'z ishiga oladi'} cardItem_1={'5 kunlik sayohat > Mehmonxona'} cardItem_2={'Aviabiletlar'} cardItem_3={'Eng yaxshi manzillar'} images={yevropa} city={'Yevropa'} clients={'360 buyurtmalar'}/></SwiperSlide>
            <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard cardIcon_3={<BuildingFill className='me-2'/>} cardIcon_2={<AirplaneFill className='me-2'/>} cardIcon_1={<CarFrontFill className='me-2'/>} clientsTitle={'/kishi'} cardTitle={'Tur o\'z ishiga oladi'} cardItem_1={'5 kunlik sayohat > Mehmonxona'} cardItem_2={'Aviabiletlar'} cardItem_3={'Eng yaxshi manzillar'} images={istanbul} city={'Istanbul'} clients={'234 buyurtmalar'} summa={'$420'}/></SwiperSlide>
            <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard cardIcon_3={<BuildingFill className='me-2'/>} cardIcon_2={<AirplaneFill className='me-2'/>} cardIcon_1={<CarFrontFill className='me-2'/>} clientsTitle={'/kishi'} cardTitle={'Tur o\'z ishiga oladi'} cardItem_1={'5 kunlik sayohat > Mehmonxona'} cardItem_2={'Aviabiletlar'} cardItem_3={'Eng yaxshi manzillar'} images={dubai} city={'Dubai'} clients={'300 buyurtmalar'} summa={'$700'}/></SwiperSlide>
          </Swiper> 
        </div>
      </div>
    </div>
  )
}
