/* 
    ? Using State in React
    state variables are ones that react keeps track of
    within a session
    
    useState(param) returns an array with two elements
    * 0 - the param
    * 1 - a function object that updates the state variable
*/

import "./counter.css"
import { useState } from "react"

function Counter(props) {
  const startVal = Number(props.startValue) || 0
  const [count, setCount] = useState(startVal)
  // this is array destructuring, equivalent to:
  //   let countState = useState(0)
  //   let count = countState[0]
  //   let setCount = countState[1]

  const decrement = () => {
    if (count % 2) {
      setCount((c) => c + 10)
    }
    if (count > 0) {
      setCount((c) => c - 1)
    }
  }

  return (
    <div className="counter-component">
      <button onClick={() => setCount(count + 1)}>+</button>
      {/* count will automatically re-render ONLY if it's a state variable */}
      <span>{count}</span>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter
