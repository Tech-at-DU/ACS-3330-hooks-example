import './App.css';
import React, { useState } from 'react'
import LifeCycle from './LifeCycle';
import Classy from './Classy';
import Ready from './Ready';
import Colors from './Colors';

function App() {
  const [ show, setShow ] = useState(true)
  
  return (
    <div className="App">
      <button
        onClick={() => setShow(!show)}
      >{show ? "Hide" : "Show"}</button>

      {
      show ? 
        <>
          <LifeCycle />
          <Classy />
          <Ready />
          <Colors />
        </> : null
      }
      
    </div>
  );
}

export default App;

