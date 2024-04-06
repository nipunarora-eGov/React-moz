import React,{useState,Fragment} from 'react'
import useCallApi from '../hooks/useCallApi'
const UserForm = () => {
  //create a simple form that takes in data from the user and calls an api (dummy) and get the get the respoonse -> once we get the response we'll user created succesfully
  const {callApi,isSuccess} = useCallApi()
  const [formData,setFormData] = useState({
    name:'',
    phone:'',
    email:''
  })

  const [isSubmitting,setIsSubmitting] = useState(false)

  //call another hook(common hook to create something on the server)
  const handleSubmit = async (e) => {
    //call an api with this formData and get a response
    e.preventDefault()
    setIsSubmitting(true)

    //call an api

    try {
      //call custom hook here
      await callApi(formData);
      setIsSubmitting(false)
      setFormData({
        name:'',
        phone:'',
        email:''
      })
    } catch (error) {
      console.log("Error",error);
      setIsSubmitting(false)
    }
  }

  //handle change fn
  const handleInputChange = (e) => {
    console.log(e.target.value);
    const {name,value} = e.target
    setFormData({...formData,[name]:value})
  }
  

  return (
    <>
      <h1 style={{"margin":"1rem 2rem 1rem 19rem"}}>Create a user</h1>
      <div className='user-form-container'>
        <h2>Submit User Info</h2>
        <form className='user-form' onSubmit={handleSubmit}>
          <label>
            Name:
              <input 
                type='text'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              
          </label>
          <label>
            Phone:
              <input 
                type='text'
                name='phone'
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              
          </label>
          <label>
            Email:
              <input 
                type='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              
          </label>

          <button type='submit' className='submit-button' disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>

        {
          isSuccess && (
            <div>
              User Info Submitted successfully
            </div>
          )
        }
      </div>
    </>
  )
}

export default UserForm