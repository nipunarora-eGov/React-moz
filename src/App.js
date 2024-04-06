import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contact" exact component={Contact} />
      </Switch>    
    </BrowserRouter>
  )
}

export default App