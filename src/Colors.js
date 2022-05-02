import React, { useState, useEffect } from 'react'

function Colors() {
	const [x, setX] = useState(0)
	const [y, setY] = useState(0)
	let color = 'red'

	function setColor() {
		color = parseInt(Math.random() * 255 * 255 * 255)
	}

	useEffect(() => {
		setColor()
	}, [x, y])

	console.log(x, color)

	return (
		<div style={{ backgroundColor: color }}>
			<h1>X {x}</h1>
			<button
				onClick={() => setX(x + 1)}
			>X + 1</button>
		</div>
	)
}

export default Colors