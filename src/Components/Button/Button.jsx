import React from 'react'
import './Button.css'

export default function Button({text, style}) {
  return (
    <div>
        <button className='button rounded-pill px-3 py-2'><p className='mb-0'>{text}</p></button>
    </div>
  )
}
