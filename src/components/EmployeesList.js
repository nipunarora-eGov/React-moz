import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

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
  }, []);

  const history = useHistory();

  const handleViewEmployee = (employeeId) => {
    console.log(employeeId);
    // console.log(history);
    history.push(`/employees/${employeeId}`);
  }

  return (<div className="employee-list-container">
    <h1 className="list-title">Employees</h1>
    <ul className="employee-list">
      <li className="employee-item">
        <div>
          <strong>Name</strong> - email
        </div>
      </li>
      {
        employees.length > 0 ?
        employees.map((employee, idx) => {
          return (<li key={idx} className="employee-item">
            <div>
              <strong>{employee.firstName} {employee.lastName}</strong> - {employee.emailId}
            </div>
            <button className="view-button" onClick={() => { handleViewEmployee(employee.id) }}>view</button></li>);
        }) : <li>No Data to display...</li>
      }
    </ul>
  </div>);
}