import React from 'react'
import css from './css/inputLogin.css'

const InputLogin = ({icone, placeholder, tipo, handleChange, valor }) => { 

  return (
    <>
      <div className='iconeDosInputs'>
        {icone}
        <input placeholder={placeholder} type={tipo} onChange={handleChange} value={valor} />
        </div>

    </>
  )
}

export default InputLogin
