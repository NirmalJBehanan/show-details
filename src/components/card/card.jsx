import React from 'react'
import Button from '../button/Button'
import './App.css'

const Card = ({name,email,btnname}) => {
  return (
    <div className='card-container'>
          <div className='card-details'>
                <h1>{name}</h1>
                <p>{email}</p>
            <div className='btn'>
               <Button  name={btnname}/>
            </div>
          </div>

    </div>
  )
}

export default Card