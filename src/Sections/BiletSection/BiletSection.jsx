import React from 'react'
import SectionHeader from '../../Components/SectionHeader/SectionHeader'
import BiletCard from '../../Components/BiletCard/BiletCard'

//images
import afraosiyob from '../../Photes/afr.jpg'
import airplane from '../../Photes/airplane.jpg'
import { useTranslation } from 'react-i18next'

export default function BiletSection() {
   const {t} = useTranslation()
  return (
    <div className='py-5 container'>
        {/* section header */}
        <SectionHeader infoTitle={t('bilet-section__title')} infoSubtile={t('bilet-section__subtitle')} textPosition={'text-start plan my-4'} />
        {/* transport karts */}
        <BiletCard card2__img={afraosiyob} seeOrNotSee={'d-none'} card2__title={t('transport_1')} card2__subtitle={t('transport_1__subtitle')} card2__description={t('transport_1__description')}/>
        <hr />
        <BiletCard card2__img={airplane} seeOrNotSee={'d-none'} card2__title={t('transport_2')} card2__subtitle={t('transport_2__subtitle')} card2__description={t('transport_2__description')} />
        <hr />
    </div>
  )
}
