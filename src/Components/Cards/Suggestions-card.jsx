import React from 'react'
import first from '../../Photes/offers-01.jpg'
import { AirplaneFill, BuildingFill, CarFront, CarFrontFill, PeopleFill } from 'react-bootstrap-icons'
import Button from '../Button/Button'
import './Suggestions-card.css'

export default function SuggestionsCard() {
  return (
    <div className='suggestion-card position-relative'>
        <div className='suggestion-card__img'>
            <img src={first} alt="first-card__img"/>
            <div className='position-absolute suggestion-card__info'>
                    <div className='suggest-card__city d-flex justify-content-between align-items-center mb-0'>
                      <h4 className='card-city mb-0'>Sharm El-Sheikh</h4>
                      <h4 className='city-summa ms-3 mb-0'>$800</h4>
                    </div>
                    <div className='suggest-card__users d-flex justify-content-between align-items-center pb-3'>
                      <span><PeopleFill/><p className='d-inline mb-0 ms-1'>234 buyurtmalar</p></span>
                      <span><p className='mb-0'>/kishi</p></span>
                    </div>
                    <hr/>
                    <div>
                      <ul className='suggest-card__list ps-0 pt-3 mb-4'>
                        <li className='main-li'><p>Tur o'z ichiga oladi </p></li>
                        <li><CarFrontFill className='me-2'/>5 kunlik sayohat Mehmonxona</li>
                        <li><AirplaneFill className='me-2'/>Aviabilet</li>
                        <li><BuildingFill className='me-2'/>Eng yaxshi manzillar</li>
                      </ul>
                    </div>
                    <div>
                      <Button text={'Joy Band Qilish'} />
                    </div>
            </div>  
        </div>
    </div>
  )
}
