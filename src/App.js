import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import EmployeesList from './components/EmployeesList';
import EmployeeForm from './components/EmployeeForm';
import EmployeeInfo from './components/EmployeeInfo';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/employees" exact component={EmployeesList} />
        <Route path="/employees/:id" component={EmployeeInfo}/>
        {/* <Route path="/employee-info" component={EmployeeInfo}/> */}
        <Route path="/create-employee" component={EmployeeForm}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App