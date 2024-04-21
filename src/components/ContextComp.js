import React from 'react'
import { useMyContext } from '../utils/context'
import { useHistory } from 'react-router-dom'


const ContextComp = (props) => {
  const history = useHistory()
 
  const {state,dispatch} = useMyContext()

  const dec = () => {
    dispatch({
      type:"DECREMENT"
    })
  }
  const inc = () => {
    dispatch({
      type:"INCREMENT"
    })
  }

  const redirect = () => {
    history.push("/users")
  }

  return (
    <div>
      <button onClick={inc}>Increment Count</button>
      <button onClick={dec}>Decrement Count</button>
      <button onClick={redirect}> Redirect</button>
      <p>Count: {state.count}</p>
    </div>
  )
}

export default ContextComp