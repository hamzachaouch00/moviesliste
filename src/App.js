
import './App.css';
import Nvbr from './Components/Nvbr';
import Ftr from './Components/Ftr';
import Movlist from './Components/Movlist';
import moviesData from './Constent/Data'
import { useState } from 'react';

function App() {
  const [data,setData]=useState(moviesData)
  const [search,setSearch]=useState("")
  const [rate,setRate]=useState(0)
  return (
    <div className="App">
     <Nvbr setSearch={setSearch} setRate={setRate} rate={rate}/>
     <Movlist data={data} search={search} rate={rate}/>
     <Ftr/>
    </div>
  );
}

export default App;
