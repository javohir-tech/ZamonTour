import React from 'react'
import './Button.css'
import { NavbarBrand } from 'react-bootstrap'

export default function Button({text, style}) {
  return (
    <div>
        <button className={style}><p className='mb-0'>{text}</p></button>
    </div>
  )
}