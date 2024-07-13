import React from 'react'
import './SlideItyem.css'
import { Globe, House, PersonCircle } from 'react-bootstrap-icons'
import Button from '../Button/Button'

export default function SlideItem({ city, population, territory, price, banner}) {
  const userData = {
    
  }
  return (
    <div className={banner} >
      <div className='container'>
        {/* Banner */}
        <h2 className='slide-item__title mt-5 pt-5'>Siz yoqtirib qolishingiz aniq bo'lgan shahar:</h2>
        <h1 className='slide-item__city'>{city}</h1>
        <Button text='Borishni Xohlaysizmi?' />
        {/* Users */}
        <div className='more-info px-5 py-4 row g-5 justify-content-between align-items-center'>
          <div className='col col-md-6 col-xl-3 d-flex align-items-center more-info__item mt-0 text-start'>
            <span className='d-inline'>
              <PersonCircle size={42} />
            </span>
            <span >
              <h4 className='mb-1 more-item__description'>Aholisi</h4>
              <h4 className='mb-0 more-item__number'>{population}</h4>
            </span>
          </div>
          <div className=' col col-md-6 col-xl-3 d-flex align-items-center more-info__item mt-0 text-start'>
            <span className='d-inline'>
              <Globe size={42} />
            </span>
            <span >
              <h4 className='mb-1 more-item__description'>Hududi</h4>
              <h4 className='mb-0 more-item__number'>{territory}</h4>
            </span>
          </div>
          <div className='col col-md-6 col-xl-3 d-flex align-items-center more-info__item mt-0 text-start'>
            <span className='d-inline'>
              <House size={42} />
            </span>
            <span >
              <h4 className='mb-1 more-item__description'>O'rtacha Narx</h4>
              <h4 className='mb-0 more-item__number'>{price}</h4>
            </span>
          </div>
          <div className='col col-md-6 col-xl-3 mb-3 d-flex justify-content-center mt-0 text-start'>
            <Button text='Ko`proq Bilish...' />
          </div>
        </div>
      </div>
    </div>
  )
}
