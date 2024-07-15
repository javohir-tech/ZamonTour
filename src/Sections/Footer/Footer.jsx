import React from 'react'
import './Footer.css'
import { useTranslation } from 'react-i18next'
import Button from '../../Components/Button/Button';

export default function Footer() {
    const { t } = useTranslation();
    return (
        <div>
            <footer className='footer-section pt-5 mt-3'>
                <div className='footer-box'>
                    <div className='container'>
                        <div className='d-flex justify-content-between align-items-center flex-column flex-md-row'>
                            <div className='footer-info'>
                                <h1 className='footer-title'>{t('footer-title')}</h1>
                                <h3 className='footer-subtitle mb-3'>{t('footer-subtitle')}</h3>
                            </div>
                            <div>
                                <Button text={t('footer-button')} style={'button_3 button px-3 py-2'} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center footer-under__text py-3'>
                    <p>Copyright © 2024 <a href="#">Zamon Business Tour.</a>All rights reserved</p>
                </div>
            </footer>
        </div>
    )
}
