import React,{useContext,createContext,useReducer} from "react"

const MyContext = createContext()
const initialState = {
  count:0
}

const reducer = (state=initialState,action) => {
  switch (action.type) {
    case "INCREMENT":
      return {...state,count : state.count + 1}
    case "DECREMENT":
      return {...state,count : state.count - 1}
    default:
     return state;
  }
}

export const useMyContext = () => {

  return useContext(MyContext)
}

export const ProviderContext = ({children}) => {

  const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <MyContext.Provider value={{state,dispatch}}>
      {children}
    </MyContext.Provider>
  )
}