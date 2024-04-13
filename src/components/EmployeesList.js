import React, { useEffect, useState } from "react";

export default function EmployeesList(props) {
  const url = 'http://localhost:8080/employee'
  const [employees, setEmployees] = useState([{
    firstName: null,
    lastName: null,
    emailId: null
  }]);

  useEffect(() => {
    async function useFetch() {
      try {
        const response = await fetch(`${url}/_search`);
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error('Error:', error.message);
      }
    }
    useFetch();
  }, [employees]);

  return (<div className="employee-list-container">
    <h1 className="list-title">Employees</h1>
    <ul className="employee-list">
      <li className="employee-item"><strong>Name</strong> - email</li>
      {
        employees.map((employee, idx) => {
          return (<li key={idx} className="employee-item"><strong>{employee.firstName} {employee.lastName}</strong> - {employee.emailId}</li>);
        })
      }
    </ul>
  </div>);
}