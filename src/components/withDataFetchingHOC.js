import React,{useState,useEffect,Fragment} from "react"

export const withDataFetching = (WrappedComp,dataSrc) => {
  
  //returning a component
  return (props) => {

    const [data,setData] = useState(null)
    const [isLoading,setIsLoading] = useState(false)
    const [isError,setIsError] = useState(false)

    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true)
        try {
          const response = await fetch(dataSrc)
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const resultJson = await response.json()
          setIsLoading(false)
          setData(resultJson)
        } catch (error) {
            setIsLoading(false)
            setIsError(true)
            console.log("An err occured");          
        }
      }

      fetchData()
    }, [])
    

    return (
      <>
        {isLoading && <div>Loading...</div>}
        {data && <WrappedComp data={data} isLoading={isLoading} isError={isError} {...props} />}
        {isError && <div>Error occured...</div>}
      </>
    )
  }

}