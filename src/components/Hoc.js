import React from 'react'
import { withDataFetching } from './withDataFetchingHOC'


const MyComp = ({data,...props}) => {
  return (
    <div>
      <div>Name : {data.name}</div>
      <div>Name : {data.email}</div>
      <div>Name : {data.phone}</div>
    
    </div>
  )
}

const Hoc = (props) => {

  const EnhancedComp = withDataFetching(MyComp,'https://jsonplaceholder.typicode.com/users/1')

  return (
    <EnhancedComp name={"enhance"}/>
  )
}

export default Hoc