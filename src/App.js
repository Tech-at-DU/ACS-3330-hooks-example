import './App.css';
import React, { useState } from 'react'
import LifeCycle from './LifeCycle';
import Classy from './Classy';

function App() {
  const [ show, setShow ] = useState(true)
  
  return (
    <div className="App">


      <button
        onClick={() => setShow(!show)}
      >{show ? "Hide" : "Hide"}</button>

      {show ? 
        <>
          <LifeCycle />
          {/* <Classy /> */}
        </> : null}
      
    </div>
  );
}

export default App;

