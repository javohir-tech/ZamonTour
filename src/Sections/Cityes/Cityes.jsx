import React from 'react'
import SectionHeader from '../../Components/SectionHeader/SectionHeader'
import BiletCard from '../../Components/BiletCard/BiletCard'

//images
import dubai22 from '../../Photes/dubai-wallpaper.jpg'
import antalya22 from '../../Photes/country-02.jpg'
import sharm22 from '../../Photes/sharm22.jpg'
import istanbul33 from '../../Photes/istanbul33.jpg'
import { useTranslation } from 'react-i18next'

export default function Cityes() {
  const {t} = useTranslation()
  return (
    <div className='container py-3'>
        {/* section header */}
        <SectionHeader infoTitle={t('cityes-section__title')} infoSubtile={t('cityes-section__subtitle')} textPosition={'text-start plan my-4'} />
        {/* cards in cityes section */}
        <BiletCard  population={t('cityes-dubai__population')} area={' 41.290 km2'} summa={'1.100.200'} card2__img={dubai22}  card2__title={t('dubai')} card2__subtitle={t('cityes-country__arab')} card2__description={t('cityes-info__dubai')}/>
        <BiletCard population={t('cityes-antalya__population')} area={'275.400 km2'} summa={'946.000'} card2__img={antalya22} card2__title={t('antalya')} card2__subtitle={t('cityes-country__turkey')} card2__description={t('cityes-info__antalya')}/>
        <BiletCard population={t('cityes-turkey__population')} area={'551.500 km2'} summa={'425.600'} card2__img={sharm22} card2__title={t('antalya')} card2__subtitle={t('cityes-country__misr')} card2__description={t('cityes-info__misr')}/>
        <BiletCard population={t('cityes-turkey__population')} area={'551.500 km2'} summa={'425.600'} card2__img={istanbul33} card2__title={t('istanbul')} card2__subtitle={t('cityes-country__turkey')} card2__description={t('cityes-info__istanbul')}/>
    </div>
  )
}
