import React from 'react'
import './Button.css'
import { NavbarBrand } from 'react-bootstrap'

export default function Button({text, style, window}) {
  return (
    <div>
        <button className={style}><p className='mb-0'><a href={window}>{text}</a></p></button>
    </div>
  )
}