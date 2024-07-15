import React from 'react'
import Button from '../../Components/Button/Button'
import ContactsCard from './ContactsCard'
import './Contacts.css'
import { EnvelopeFill, GeoAltFill, TelephoneFill } from 'react-bootstrap-icons'
import { useTranslation } from 'react-i18next'

export default function Contacts() {
    const {t}  = useTranslation()
    return (
        <div className='py-3'>
            <div className='contacts-section'>
                <div className='container'>
                    <div className='contacts-content text-center position-relative'>
                        <h3>{t('contacts-section-title')}</h3>
                        <span className='position-relative'>
                            <span className='position-absolute under-line'></span>
                        </span>
                        <h1>{t('contacts-section-subtitle')}</h1>
                        <Button text={t('button_2')} style={'button px-3 py-2 button_2'} />
                        <div className='contacts-cards d-flex flex-column flex-xl-row g-5 text-center justify-content-between mt-5 position-absolute w-100'>
                            <ContactsCard icon={<TelephoneFill />} type={t('telefon')} adress={'+998 90 007 29 04'} />
                            <ContactsCard icon={<EnvelopeFill />} type={t('email')} adress={'suvonovjavohir625@gmail.com'} />
                            <ContactsCard icon={<GeoAltFill />} type={t('adress')} adress={'15/25, Chilanzar - 9, Tashkent city'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
