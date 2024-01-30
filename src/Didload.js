import { useEffect, useState } from 'react'

const styles = { 
        backgroundColor: 'red',
        width: '200px',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1rem'
      }

function Didload() {
  const [count, setCount] = useState(0)

	useEffect(() => {
    console.log('Did load Example')

    const id = setInterval(() => {
      setCount(count + 1)
    }, 3000)
    return () => {
      console.log('Clears the interval')
      clearInterval(id)
    }
	}, [count])

	return (
    <div>
      <h1 style={styles}>{count}</h1>
    </div>
	)

}

export default Didload