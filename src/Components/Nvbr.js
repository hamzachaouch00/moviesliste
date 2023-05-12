import { Rating } from '@mui/material'
import React from 'react'
import {FaHome,FaClipboardList,FaPhoneAlt} from "react-icons/fa"
import { Link } from 'react-router-dom'


const Nvbr = ({setSearch,setRate,rate}) => {
  return (
  <div className='nbr'>
      <Link to='/'> <img className='imgnb' src='https://st3.depositphotos.com/12598558/31954/i/1600/depositphotos_319544676-stock-photo-film-reel-with-popcorn-and.jpg' alt='404'/></Link>
       <div className='nvb'>
       
     
       <Rating onChange={(e)=>setRate(Number(e.target.value))}
    name="simple-controlled"
    value={rate}
      />
       <input type='text' placeholder='search' onChange={(e)=>setSearch(e.target.value)}/>
       </div>
      
  </div>
  )
}

export default Nvbr
