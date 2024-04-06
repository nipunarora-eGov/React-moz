import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import UsersList from './components/UsersList';
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/users" exact component={UsersList} />
      </Switch>    
    </BrowserRouter>
  )
}

export default App