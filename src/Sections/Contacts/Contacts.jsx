import React from 'react'
import Button from '../../Components/Button/Button'
import ContactsCard from './ContactsCard'
import './Contacts.css'
import { EnvelopeFill, GeoAltFill, TelephoneFill } from 'react-bootstrap-icons'

export default function Contacts() {
    return (
        <div className='py-3'>
            <div className='contacts-section'>
                <div className='container'>
                    <div className='contacts-content text-center position-relative'>
                        <h3>O'zingiz yoqtirganingizni tanlang</h3>
                        <span className='position-relative'>
                            <span className='position-absolute under-line'></span>
                        </span>
                        <h1>O'z joyingizni band qiling</h1>
                        <Button text={'Ko\'proq bilish'} style={'button px-3 py-2 button_2'} />
                        <div className='contacts-cards d-flex flex-column flex-xl-row g-5 text-center justify-content-between mt-5 position-absolute w-100'>
                            <ContactsCard icon={<TelephoneFill />} type={'Telefon raqam'} adress={'+998 90 007 29 04'} />
                            <ContactsCard icon={<EnvelopeFill />} type={'Bizga email orqali bog\'laning'} adress={'suvonovjavohir625@gmail.com'} />
                            <ContactsCard icon={<GeoAltFill />} type={'Ofisimizga tashrif buyuring'} adress={'15/25, Chilanzar - 9, Tashkent city'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
