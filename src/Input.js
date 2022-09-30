import React from 'react'

const Input = ({labelFor, textLabel, inputType, inputVal, handleChange, placeholder, ...props}) => {

    // const [inputValue, setInputValue] = React.useState('')

    // function handleChange({target}){
    //     setInputValue(target.value)
    //     console.log(target.value)
    //     console.log(inputValue)
    // }

  return (
    <div id='divInput'>
        <label htmlFor={labelFor}>{textLabel}</label>
        <input type={inputType} id={labelFor} onChange={handleChange} value={inputVal} placeholder={placeholder} {...props} />
    </div>
  )
}

export default Input
