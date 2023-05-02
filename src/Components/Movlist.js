import React from 'react'
import Movcard from './Movcard'
const Movlist = ({data,search,rate}) => {
  return (
    <div className ='cards'>
      {
        
        data.filter((element)=>element.name.toUpperCase().includes(search.toUpperCase()) && element.rating>=rate).map((element)=><Movcard key={element.id} element={element}/>)
      }
    </div>
  )
}

export default Movlist
