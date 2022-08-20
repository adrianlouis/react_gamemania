import React from 'react'
import css from './css/button.css'

const Button = ({onclick, nome}) => {
  return (
    <button className='buttonBuy' onClick={onclick} >{nome}</button>
  )
}

export default Button
