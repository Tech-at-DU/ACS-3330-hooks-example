import React, { useState, useEffect } from 'react'

// https://overreacted.io/a-complete-guide-to-useeffect/


function Ready() {
	const [showMessage, setShowMessage] = useState(false)
	const [w, setW] = useState(0)
	const [h, setH] = useState(0)
	const [count, setCount] = useState(0)

	useEffect(() => {
		setTimeout(() => {
			setShowMessage(true)
		}, 2000)
	}, [])

	useEffect(() => {
		function onResize(e) {
			const { width, height } = document.body.getBoundingClientRect();
			setW(parseInt(width))
			setH(parseInt(height))
		}
		window.addEventListener('resize', onResize)
		return () => window.removeEventListener('resize', onResize)
	}, [])

	useEffect(() => {
		const t = setInterval(() => {
			setCount(count + 1)
			console.log("counting")
		}, 1000)
		return () => clearInterval(t)
	}, [count])


	if (!showMessage) {
		return (
			<div>
				<h1>Ready</h1>
			</div>
		)
	} 

	return (
		<div>
			<h1>Message Shown!</h1>
			<p>Width:{w} Height:{h}</p>
			<h2>Count:{count}</h2>
		</div>
	)
}

export default Ready