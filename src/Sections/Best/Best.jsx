import React from 'react'
import Carousel from '../WebGuild/WebGuild'
import SectionHeader from '../../Components/SectionHeader/SectionHeader'

export default function Best() {
  return (
    <div className='container py-5 d-none d-xl-block'>
        <SectionHeader textPosition={'text-center'} infoTitle={'Eng Yaxshi Manzillar'} infoSubtile={'Har bir shahardagi eng yaxshi takliflarimizni kashf eting, faqat siz uchun. O\'zingiz uchun yangi dunyosni oching va misli ko\'rilmagan sarguzashtlar ega bo\'ling.'}/>
        <Carousel/>
    </div>
  )
}
