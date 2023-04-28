import { Rating } from '@mui/material'
import React from 'react'

const Nvbr = ({setSearch,setRate,rate}) => {
  return (
  <div className='nbr'>
       <img className='imgnb' src='https://st3.depositphotos.com/12598558/31954/i/1600/depositphotos_319544676-stock-photo-film-reel-with-popcorn-and.jpg' alt='404'/>
       <div className='nvb'>
       <Rating onChange={(e)=>setRate(Number(e.target.value))}
    name="simple-controlled"
    value={rate}
      />
       <input type='text'  onChange={(e)=>setSearch(e.target.value)}/>
       </div>
      
  </div>
  )
}

export default Nvbr
