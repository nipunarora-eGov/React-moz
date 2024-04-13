import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function EmployeeInfo() {
  const url = 'http://localhost:8080/employee';
  const { id } = useParams();
  const employeeId = Number(id);

  if (isNaN(employeeId)) {
    window.location.href = '/employees';
  }
  const [employeeData, setEmployeeData] = useState({ firstName: null, lastName: null, emailId: null });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await fetch(`${url}/_search/${employeeId}`);
        if (!response.ok) {
          throw new Error('Failed to get Information');
        }
        const data = await response.json();
        setIsSuccess(true);
        setEmployeeData(data);
      } catch (error) {
        setIsSuccess(false);
        console.error('Error: ', error.message);
      }
    }
    fetchEmployee();
    setIsLoading(false);
    // setTimeout(() => {
    //   fetchEmployee();
    //   setIsLoading(false);
    // }, 3000);
  }, []);

  return (<div className="employee-info-container">
    <h2>Employee Information</h2>
    <p>Employee ID: {id}</p>
    {
      isLoading ?
        (<p> Loading... </p>) :
        (<p>
          <strong>{employeeData.firstName} {employeeData.lastName}</strong> - {employeeData.emailId}
        </p>)
    }

  </div>);
}