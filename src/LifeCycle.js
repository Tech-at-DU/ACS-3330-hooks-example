import { useState, useEffect } from 'react'
import './App.css';

function LifeCycle() {
	const [count, setCount] = useState(0)
	const [random, setRandom] = useState(1)

	// --- Compononent added to DOM ---

	useEffect(() => {
		// The first parameter is a function that is executed when 
		// this component is mounted
		console.log('1. Component Did Mount!')
		// Return a function that is executed when this
		// Component is removed from DOM
		return () => {
			console.log('4. Component is removed DOM')
		}
	}, []) // The second parameter is an array that lists values that trigger an update

	// --- Each update ---
	useEffect(() => {
		console.log('2. Component did update')
	}) // No array triggers every update

	// --- When *count* changes ---
	useEffect(() => {
		console.log('3. Count Updated')
	}, [count]) // Includes count, so only triggers when count is updated

	console.log('!!! LifeCycle rendering !!!')
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

			<button
				onClick={() => setCount(0)}
			>Reset</button>
    </div>
  );
}

export default LifeCycle;



