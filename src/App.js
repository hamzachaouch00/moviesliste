
import './App.css';
import Nvbr from './Components/Nvbr';
import Ftr from './Components/Ftr';
import Movlist from './Components/Movlist';
import moviesData from './Constent/Data'
import { useState } from 'react';

import Home from './Components/Home';
import {Routes,Route} from "react-router-dom"
import Trailer from './Components/Trailer';

function App() {
  const [data,setData]=useState(moviesData)
  const [search,setSearch]=useState("")
  const [rate,setRate]=useState(0)
  return (
    <div className="App">
    <Nvbr setSearch={setSearch} setRate={setRate} rate={rate}/>
    <Routes>
    <Route path='/'element={<Home/>}/>
  
    <Route path ='/Movlist' element={ <Movlist  data={data} search={search} rate={rate} setData={setData}/>}/>
    <Route path='/trailer/:id' element={<Trailer data={data} />}/>
   </Routes>
   <Ftr/>
    
    
    </div>
  );
}

export default App;
