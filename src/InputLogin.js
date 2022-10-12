import React from 'react'
import css from './css/inputLogin.css'

const InputLogin = ({icone, placeholder, tipo, handleChange, valor, ...props }) => { 

  return (
    <>
      <div className='iconeDosInputs'>
        {icone}
        <input placeholder={placeholder} type={tipo} onChange={handleChange} value={valor} {...props} />
        </div>

    </>
  )
}

export default InputLogin
