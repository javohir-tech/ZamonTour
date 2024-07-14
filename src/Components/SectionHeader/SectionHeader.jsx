import React from 'react'
import './SectionHeader.css'

export default function SectionHeader({infoTitle, infoSubtile, textPosition}) {
  return (
    <div>
        <div className={textPosition}>
          <h2 className='suggestions-info__title'>{infoTitle}</h2>
          <p className='suggestions-info__subtitle'>{infoSubtile}</p>
        </div>
    </div>
  )
}
