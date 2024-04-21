import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'


const ReduxComp = (props) => {
  const history = useHistory()
  const count = useSelector(state => {
    return state.count
  })

  const dispatch = useDispatch()

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
      <p>Count: {count}</p>
      
      
    </div>
  )
}

export default ReduxComp