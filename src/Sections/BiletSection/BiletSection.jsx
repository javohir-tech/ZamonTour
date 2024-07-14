import React from 'react'
import SectionHeader from '../../Components/SectionHeader/SectionHeader'
import BiletCard from '../../Components/BiletCard/BiletCard'

//images
import afraosiyob from '../../Photes/afr.jpg'
import airplane from '../../Photes/airplane.jpg'

export default function BiletSection() {
  return (
    <div className='py-5 container'>
        {/* section header */}
        <SectionHeader infoTitle={'Chiptalarni Biz Bilan Arzon Va Oson Toping'} infoSubtile={'Har bir shaharda eng yaxshi temir yo‘l va aviachipta biletlarini biz bilan toping'} textPosition={'text-start plan my-4'} />
        {/* transport karts */}
        <BiletCard card2__img={afraosiyob} seeOrNotSee={'d-none'} card2__title={'Temir Yo‘l Biletleri Biz Bilan'} card2__subtitle={'Butun dunyo bo\'ylab'} card2__description={'Temir yo\'l orqali biz bilan sarguzashtlarni kashf eting! Baland tog\'larni, betakror tabiat manzalarni, qadimiy va navqiron shaharlarni, takrorlanmas landshaflarni biz bilan birga toping. Qiziqarlimi? Biz bilan bog\'laning.'}/>
        <hr />
        <BiletCard card2__img={airplane} seeOrNotSee={'d-none'} card2__title={'Aviabiletlar Biz Bilan Arzon'} card2__subtitle={'Jahon bo‘ylab Manzillar'} card2__description={'Eng arzon, qulay, xavfsiz aviabiletlar biz bilan! Bizga bog\'laning, biz sizga eng maqbul bo\'ladigan aviabilerni topib beramiz'} />
        <hr />
    </div>
  )
}
