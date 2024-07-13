import React from 'react'
import SuggestionsCard from '../../Components/Cards/Suggestions-card'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Suggestions.css';
import first from '../../Photes/offers-01.jpg'
import istanbul from '../../Photes/istanbul.jpg'
import dubai from '../../Photes/dubai2.jpg'
import antalya from '../../Photes/Antalya2.jpg'
import kanada from '../../Photes/kanada.jpg'
import yevropa from '../../Photes/yevropa.jpg'
import angliya from '../../Photes/eng.jpg'
import usa from '../../Photes/aqsh.jpg'

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function Suggestions() {
  return (
    <div className="container">
      <div className='suggestions-section py-5'>
        <div className='suggestions-section__info text-center'>
          <h2 className='suggestions-info__title '>Eng Yaxshi Haftalik Takliflarimiz</h2>
          <p className='suggestions-info__subtitle '>Har bir shaharda faqat siz uchun tuzilgan eng yaxshi haftalik takliflarni kashf eting. <br />O'zingizni sarguzashtlar dunyosida his qiling.</p>
        </div>
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
            <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard images={antalya} city={'Antalya'} summa={'$999'} clients={"500"}/></SwiperSlide>
            <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard images={first} city={'Sharm El-Sheikh'} summa={'$800'} clients={200}/></SwiperSlide>
            <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard images={usa} city={'AQSH'} clients={"434"}/></SwiperSlide>
            <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard images={angliya} city={'Angliya'} clients={'300'}/></SwiperSlide>
            <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard images={kanada} city={'Kanada'} clients={'300'}/></SwiperSlide>
            <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard images={yevropa} city={'Yevropa'} clients={'360'}/></SwiperSlide>
            <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard images={istanbul} city={'Istanbul'} clients={'234'} summa={'$420'}/></SwiperSlide>
            <SwiperSlide className='suggestion-card__swiper'><SuggestionsCard images={dubai} city={'Dubai'} clients={'300'} summa={'$700'}/></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>

  )
}
