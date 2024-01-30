import { Component, useState, useEffect } from 'react'

class Classy extends Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0
		}
	}

	// Lifecycle methods
	componentDidMount() {
		// When the component is added to the DOM
		console.log('Classy Component did mount')
	}

	componentWillUnmount() {
		// Component will be removed from the DOM
		console.log('Classy Component will unmount')
	}

	componentDidUpdate() {
		// Each time component renders
		console.log('Classy Component did update')
	}

	render() {
		console.log('!!! Classy Renders !!!')
		return (
			<div style={{ border: '1px solid'}}>
				<p>-- Classy --</p>
				<h1 
					data-id={this.props.id}
					onClick={() => this.setState({ count: this.state.count + 1 })}
				>Hello {this.state.count}</h1>
			</div>
			
		)
	}
}

export default Classy

// -------------------

function Funky(props) {
	const [ count, setCount ] = useState(0)

	useEffect(() => {
		// Component updated/rendered (happens every render) 
	})

	useEffect(() => {
		// Component was added to the DOM
		// Code here runs once when component is created 
		return () => {
			// runs when component is removed from DOM
		}
	}, [])

	useEffect(() => {
		// This code executes when count changes
	}, [count])

	return (
		<h1
			onClick={() => setCount(count + 1)}
		>World {count}</h1>
	)
}

export { Funky }