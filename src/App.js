
import './App.css';
import Nvbr from './Components/Nvbr';
import Ftr from './Components/Ftr';
import Movlist from './Components/Movlist';
import moviesData from './Constent/Data'

function App() {
  return (
    <div className="App">
     <Nvbr/>
     <Movlist data={moviesData}/>
     <Ftr/>
    </div>
  );
}

export default App;
