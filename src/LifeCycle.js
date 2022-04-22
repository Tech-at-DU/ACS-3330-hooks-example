import { useState, useEffect } from 'react'
import './App.css';

function LifeCycle() {
	const [count, setCount] = useState(0)
	const [random, setRandom] = useState(1)

	// --- Compononent added to DOM ---
	useEffect(() => {
		console.log('1. Component Did Mount!')
		return () => {
			// Component removed from DOM
			console.log('LifeCycle is removed DOM')
		}
	}, [])

	// --- Each update ---
	useEffect(() => {
		console.log('2. Component did update')
	})

	// --- When *count* changes ---
	useEffect(() => {
		console.log('3. Count Updated')
	}, [count])

  return (
    <div className="App">
      <h1>-- Hooky --</h1>
			<h2>Count: {count} + {random}</h2>
			<button
				onClick={() => setCount(count + random)}
			>Add 1</button>

			<button
				onClick={() => setRandom(Math.floor(Math.random() * 9) + 1)}
			>Randomize</button>
    </div>
  );
}

export default LifeCycle;
