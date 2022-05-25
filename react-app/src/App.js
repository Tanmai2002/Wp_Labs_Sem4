import logo from './logo.svg';
import React,{useState} from 'react'
import './App.css';


function App() {
  const [celcius, setcelcius] = useState(0);
  const [Farhenite, setFarhenite] = useState(32);
  let Celcius2Farhenite=(event)=>{
    let i= parseInt(event.target.value);
    setcelcius(i);
    setFarhenite(i*9/5+32);
  }
  let Farhenite2Celcius=(event)=>{
    let i= parseInt(event.target.value);
    setFarhenite(i);
    setcelcius((i-32)*5/9);
  }
  return (
    <div className="App">
      <h1>Fahrenheit- Celsius Converter</h1>
      <div>
        <h2>Celsius</h2>
        <input type='number' value={celcius} onChange={Celcius2Farhenite}/>
        <h2>Fahrenheit</h2>
        <input type='number' value={Farhenite} onChange={Farhenite2Celcius}/>
      </div>
    </div>
  );
}

export default App;
