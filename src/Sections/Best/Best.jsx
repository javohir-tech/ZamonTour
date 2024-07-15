import React from 'react'
import Carousel from '../WebGuild/WebGuild'
import SectionHeader from '../../Components/SectionHeader/SectionHeader'
import { useTranslation } from 'react-i18next'

export default function Best() {
  const {t} = useTranslation()
  return (
    <div className='container py-5 d-none d-xl-block'>
        <SectionHeader textPosition={'text-center'} infoTitle={t('best-section-title')} infoSubtile={t('best-section-subtitle')}/>
        <Carousel/>
    </div>
  )
}
