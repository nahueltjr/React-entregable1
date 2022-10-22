import { useState } from 'react'
import QuoteBox from './components/QuoteBox'
import ShuffleBtn from './components/ShuffleBtn'
import quotes from './quotes.json'
import './App.css'

function App() {

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const [index, setIndex]=useState(randomIndex)
  
  const changeIndex = ()=>{
    const anotherRandomIndex = Math.floor(Math.random() * quotes.length);
    setIndex(anotherRandomIndex)
  }

  const colors = [
    "#845EC2",
    "#D65DB1",
    "#FF6F91",
    "#FF9671",
    "#FFC75F",
    "#93022f",
    "#6ce1c4"
  ];
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  document.body.style = `background: ${colors[randomColorIndex]}`;

  return (
    <div className="App">
      <div className='Quote-container' style={{color: colors[randomColorIndex]}}>
          <QuoteBox index={index}/>
          <ShuffleBtn changeIndex={changeIndex} randomColorIndex={randomColorIndex}/>
      </div>
    </div>
  )
}

export default App
