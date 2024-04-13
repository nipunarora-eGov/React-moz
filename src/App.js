import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import EmployeesList from './components/EmployeesList';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/employees" component={EmployeesList}/>
      </Switch>    
    </BrowserRouter>
  )
}

export default App