import {useState} from 'react'

const useCallApi = () => {
  
  const [isSuccess,setIsSuccess] = useState(false)

  //data is formData(user Inputs)
  const callApi = async (data) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
      })

      if(!response.ok) {
        throw new Error('Failed to submit user info')
      }
      setIsSuccess(true)
    } catch (error) {
        throw new Error(error.message)
    }
  }


  return {callApi,isSuccess}
}

export default useCallApi