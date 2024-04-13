import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function EmployeeUpdateForm(props) {
  const { id } = useParams();
  const employeeId = Number(id);

  if (isNaN(employeeId)) {
    window.location.href = '/employees';
  }

  const url = 'http://localhost:8080/employee'
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailId: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSucces, setIsSuccess] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await fetch(`${url}/_search/${employeeId}`);
        if (!response.ok) {
          throw new Error('Failed to get Information');
        }
        const data = await response.json();
        setIsSuccess(true);
        setFormData(data);
      } catch (error) {
        setIsSuccess(false);
        console.error('Error: ', error.message);
      }
    }
    fetchEmployee();
    // setIsLoading(false);
    // setTimeout(() => {
    //   fetchEmployee();
    //   setIsLoading(false);
    // }, 3000);
  }, []);

  const handleChange = (e) => { 
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => { 
    e.preventDefault();
    setIsSubmitting(true);

    const putData = async () => {
      try {
        const response = await fetch(`${url}/_update/${employeeId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (!response.ok) {
          setIsSuccess(false);
          throw new Error('Failed to post data');
        }
        const data = await response.json();

        setIsSuccess(true);
      } catch (error) {
        setIsSuccess(false);
        console.log('Error:', error.message);
      }
    }
    await putData();

    setIsSubmitting(false);
    setFormData({
      firstName: '',
      lastName: '',
      emailId: ''
    });
  };

  return (
    <div className="employee-form-container">
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
    </div>
  );
}