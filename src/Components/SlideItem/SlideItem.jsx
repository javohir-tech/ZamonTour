
import './SlideItyem.css'
import { Globe, House, PersonCircle } from 'react-bootstrap-icons'
import Button from '../Button/Button'
import { useTranslation } from 'react-i18next'

export default function SlideItem({ city, population, territory, price, banner}) {

  const {t} = useTranslation()

  return (
    <div className={banner} >
      <div className='container'>
        {/* Banner */}
        <h2 className='slide-item__title mt-5 pt-5'>{t('main-section__description')}</h2>
        <h1 className='slide-item__city'>{city}</h1>
        <Button text={t('button_1')} style={'button px-3 py-2 button_3'} />
        {/* Users */}
        <div className='more-info px-5 py-4 row g-5 justify-content-between align-items-center'>
          <div className='col col-md-6 col-xl-3 d-flex align-items-center more-info__item mt-0 text-start'>
            <span className='d-inline'>
              <PersonCircle size={42} />
            </span>
            <span >
              <h4 className='mb-1 more-item__description'>{t('population')}</h4>
              <h4 className='mb-0 more-item__number'>{population}</h4>
            </span>
          </div>
          <div className=' col col-md-6 col-xl-3 d-flex align-items-center more-info__item mt-0 text-start'>
            <span className='d-inline'>
              <Globe size={42} />
            </span>
            <span >
              <h4 className='mb-1 more-item__description'>{t('teritory')}</h4>
              <h4 className='mb-0 more-item__number'>{territory}</h4>
            </span>
          </div>
          <div className='col col-md-6 col-xl-3 d-flex align-items-center more-info__item mt-0 text-start'>
            <span className='d-inline'>
              <House size={42} />
            </span>
            <span >
              <h4 className='mb-1 more-item__description'>{t('summa')}</h4>
              <h4 className='mb-0 more-item__number'>{price}</h4>
            </span>
          </div>
          <div className='col col-md-6 col-xl-3 mb-3 d-flex justify-content-center mt-0 text-start'>
            <Button text={t('button_2')} style={'button px-3 py-2 button_1'} />
          </div>
        </div>
      </div>
    </div>
  )
}
