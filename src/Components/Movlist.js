import React from 'react'
import Movcard from './Movcard'
const Movlist = ({data}) => {
  return (
    <div className='cards'>
      {
        data.map((element)=><Movcard key={element.id} element={element}/>)
      }
    </div>
  )
}

export default Movlist
