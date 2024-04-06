//use
import {useState,useEffect} from 'react'

const useFetch = (url) => {
  const [isLoading,setIsLoading] = useState(true);
  const [isError,setIsError] = useState(false)
  const [error,setError] = useState(null)
  const [data,setData] = useState(null)

  useEffect(() => {
    const fetchData = async ( ) => {
      
      try {
        const response = await fetch(url)
        if(!response.ok) {
          throw new Error('Request failed')
        }
        const result = await response.json()
        setData(result)
        setIsLoading(false)
        setIsError(false)
        setError(null)
      } catch (error) {
          setIsError(true)
          setError(error)
      }
    }
    fetchData();
  }, [url])
  


  return {isLoading,isError,error,data};
}

export default useFetch