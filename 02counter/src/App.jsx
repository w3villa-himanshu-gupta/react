import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(10);
  // let counter = 20;
  const addValue = () =>{
    counter = counter+1
    setCounter(counter)
    console.log("value added",Math.random());
    }
    const removeValue = () =>{
    setCounter(counter-1)

    }
  return (
    <>
    <h1>Web Page Counter</h1>
    <h1>Counter Value : {counter}</h1>
    <button onClick={addValue}>Add Value {counter}</button>
    <br />
    <button onClick={removeValue}>Decrease Value {counter}</button>
    </>
  )
}

export default App
