// we are going to fetch a list of users from a dummy api(JsonPlaceholder) -> list of users and render them on UI


import React from 'react'
import useFetch from '../hooks/useFetch'

const UsersListWithHook = (props) => {

  const {isLoading,isError,error,data}=useFetch('https://jsonplaceholder.typicode.com/users')
  
 
  if(isLoading){
    return <div>Loading....</div>
  }
  if(isError){
    return <div>Error Occured</div>
  }

  return (
    <div className='user-list-container'>
      <h1 className='list-title'>User List</h1>
      <ul className='user-list'>
        {
          //here we directly JS code 
          // I'll assume users state has an array users
          data.map((user,idx) => {
            return (
              <li key={idx} className='user-item'>
                <strong>{user.name}</strong> - {user.email}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default UsersListWithHook