import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import EmployeesList from './components/EmployeesList';
import EmployeeForm from './components/EmployeeForm';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/employees" component={EmployeesList} />
        <Route path="/create-employee" component={EmployeeForm}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App