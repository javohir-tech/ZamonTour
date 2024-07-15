import React from 'react'
import { PeopleFill } from 'react-bootstrap-icons'
import Button from '../Button/Button'
import './Suggestions-card.css'
import { useTranslation } from 'react-i18next'


export default function SuggestionsCard({ city, summa, clients, images, clientsTitle, cardTitle, cardItem_1, cardItem_2, cardItem_3, cardIcon_1, cardIcon_2, cardIcon_3 }) {

  const {t} = useTranslation()

  return (
    <div className='suggestion-card position-relative'>
      <div className='suggestion-card__img'>
        <img src={images} alt="first-card__img" style={{ width: 300 }} className='first-card__img' />
        <div className='position-absolute suggestion-card__info'>
          <div className='suggest-card__city d-flex justify-content-between align-items-center mb-0'>
            <h4 className='card-city mb-0'>{city}</h4>
            <h4 className='city-summa ms-3 mb-0'>{summa}</h4>
          </div>
          <div className='suggest-card__users d-flex justify-content-between align-items-center pb-3'>
            <span><PeopleFill /><p className='d-inline mb-0 ms-1 '>{clients} {t('orders')}</p></span>
            <span><p className='mb-0'>{clientsTitle}</p></span>
          </div>
          <hr />
          <div>
            <ul className='suggest-card__list ps-0 pt-3 mb-4 text-start'>
              <li className='main-li'><p>{cardTitle}</p></li>
              <li>{cardIcon_1}{cardItem_1}</li>
              <li>{cardIcon_2}{cardItem_2}</li>
              <li>{cardIcon_3}{cardItem_3}</li>
            </ul>
          </div>
          <div className='text-start'>
            <Button text={t('button_3')} style={'button px-3 py-2 button_1'}/>
          </div>
        </div>
      </div>
    </div>
  )
}
