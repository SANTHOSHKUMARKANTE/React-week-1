import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div className='form'>
      <input type="text" placeholder='Search by name or symbol'/>
      <p>Sort by mkt cap</p>
      <p>Sort by Percentage</p>
    </div>
  )
}

export default Form
