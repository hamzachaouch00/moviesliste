import React from 'react'
import Movcard from './Movcard'
import Addfilm from './Addfilm'

const Movlist = ({data,search,rate,setData}) => {
  
  return (
    <div className ='cards'>
    <div className='bntmvlst'>
    <Addfilm setData={setData} data={data}/>
    </div>
      <div className='lst'>
      {
        data.filter((element)=>element.name.toUpperCase().includes(search.toUpperCase()) && element.rating>=rate).map((element)=><Movcard key={element.id} element={element}/>)
        
      }
    </div>
    </div>
  )
}

export default Movlist
