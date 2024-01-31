import './App.css';
import React, { useState } from 'react'
import LifeCycle from './LifeCycle';
import Classy from './Classy';
import Ready from './Ready';
import Colors from './Colors';
import Didload from './Didload'

function App() {
  const [ show, setShow ] = useState(true)
  
  return (
    <div className="App">
      <button
        onClick={() => setShow(!show)}
      >{show ? "Hide" : "Show"}</button>
      { show ? 
        <>
          {/* Class lifecyle methods */}
          {/* <Classy /> */}
         
          {/* Hooks lifecycle */}
          {/* <LifeCycle /> */}
          
          <Ready />
          
          <Colors /> 
        </> : null
      }
    </div>
  );
}

export default App;

