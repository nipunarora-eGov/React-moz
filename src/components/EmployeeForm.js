import React, { useState } from "react";

export default function EmployeeForm(props) {
  const url = 'http://localhost:8080/employee'
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailId: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const postData = async () => {
      try {
        const response = await fetch(`${url}/_create`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (!response.ok) {
          setIsSuccess(false);
          console.log('Failed to post data');
        }
        const data = await response.json();

        setIsSuccess(true);
      } catch (error) {
        setIsSuccess(false);
        console.log('Error:', error.message);
      }
    }
    await postData();

    setIsSubmitting(false);
    setFormData({
      firstName: '',
      lastName: '',
      emailId: ''
    });

    // setTimeout(() => {
    //   setIsSubmitting(false);
    //   console.log('waiting for 5s');
    // }, 5000);

  }

  return (<div className="employee-form-container">
    <h1>Create Employee</h1>
    <form className="employee-form" onSubmit={handleSubmit}>
      <label>
        Firstname:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
      </label>
      <label>
        Lastname:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="emailId" value={formData.emailId} onChange={handleChange} required />
      </label>
      <button type="submit" className="submit-button" disabled={isSubmitting}>
        {isSubmitting ? 'Subtmitting...' : 'submit'}</button>
    </form>
    {
      isSuccess && (
        <div className="success-toast">Employee Info Submitted successfully</div>
      )
    }
  </div>);
}