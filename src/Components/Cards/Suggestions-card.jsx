import React from 'react'
import { AirplaneFill, BuildingFill, CarFront, CarFrontFill, PeopleFill } from 'react-bootstrap-icons'
import Button from '../Button/Button'
import './Suggestions-card.css'
import first from '../../Photes/offers-01.jpg'
import istanbul from '../../Photes/istanbul.jpg'
import dubai from '../../Photes/dubai2.jpg'
import antalya from '../../Photes/Antalya2.jpg'
import kanada from '../../Photes/kanada.jpg'
import yevropa from '../../Photes/yevropa.jpg'


export default function SuggestionsCard({city, summa, clients, images}) {
  const cardData = [
    {
      city: 'Sharm El-Sheikh',
      summa:'$800',
      clients:'200',
      img:'../../Photes/offers-01.jpg'
    },
    {
      city: 'Antalya',
      summa:'$999',
      clients:'500',
      img:'../../Photes/Antalya2.jpg'
    },
    {
      city: 'AQSH',
      clients:'434',
      img:'../../Photes/aqsh.jpg'
    },
    {
      city: 'Angliya',
      clients:'300',
      img:'../../Photes/eng.jpg'
    },
    {
      city: 'Yevropa',
      clients:'360',
      img:'../../Photes/yevropa.jpg'
    },
    {
      city: 'Kanada',
      clients:'300',
      img:'../../Photes/kanada.jpg'
    },
    {
      city: 'Istanbul',
      clients:'234',
      summa:'$420',
      img:'../../Photes/chuqur.jpg'
    },
    {
      city: 'Dubai',
      clients:'300',
      summa:'$700',
      img:'../../Photes/aqsh.jpg'
    }
  ]
  return (
    <div className='suggestion-card position-relative'>
        <div className='suggestion-card__img'>
            <img src={images} alt="first-card__img" style={{width: 300}}/>
            <div className='position-absolute suggestion-card__info'>
                    <div className='suggest-card__city d-flex justify-content-between align-items-center mb-0'>
                      <h4 className='card-city mb-0'>{city}</h4>
                      <h4 className='city-summa ms-3 mb-0'>{summa}</h4>
                    </div>
                    <div className='suggest-card__users d-flex justify-content-between align-items-center pb-3'>
                      <span><PeopleFill/><p className='d-inline mb-0 ms-1'>{clients} buyurtmalar</p></span>
                      <span><p className='mb-0'>/kishi</p></span>
                    </div>
                    <hr/>
                    <div>
                      <ul className='suggest-card__list ps-0 pt-3 mb-4 text-start'>
                        <li className='main-li'><p>Tur o'z ichiga oladi </p></li>
                        <li><CarFrontFill className='me-2'/>5 kunlik sayohat Mehmonxona</li>
                        <li><AirplaneFill className='me-2'/>Aviabilet</li>
                        <li><BuildingFill className='me-2'/>Eng yaxshi manzillar</li>
                      </ul>
                    </div>
                    <div className='text-start'>
                      <Button text={'Joy Band Qilish'} />
                    </div>
            </div>  
        </div>
    </div>
  )
}
