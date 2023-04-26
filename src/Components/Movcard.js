import { Rating } from '@mui/material'
import React from 'react'

const Movcard = ({element}) => {
  return (
    <div className='card'>
      <img width="167px" height="291px" src={element.image} alt='404'/>
      <div className='elm'>
      <h4>Title: {element.name}</h4>
      <Rating name="read-only" value={element.rating} readOnly />
      <p>Date: {element.date} </p>
      <p>Type: {element.type} </p>
      <p>Description: {element.description} </p>
      

      </div>
    </div>
  )
}

export default Movcard
