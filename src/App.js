import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import UsersList from './components/UsersList';
import UsersListWithHook from './components/UsersListWithHook';
import UserForm from './components/UserForm';
import ComponentLife from './components/ComponentLife';
import ComponentUpdate from './components/ComponentUpdate';
import ComponentUnmount from './components/ComponentUnmount';
import Hoc from './components/Hoc';
import Context from './components/Context';
import ErrorBoundary from './components/ErrorBoundary';
import ReduxComp from './components/ReduxComp';
import ContextComp from './components/ContextComp';
const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/users" component={UsersList} />
          <Route path="/hook-fetch-users" component={UsersListWithHook} />
          <Route path="/create-user" component={UserForm} />
          <Route
            path="/life-cycle"
            component={(props) => <ComponentLife initialValue={0} {...props} />}
          />
          <Route
            path="/life-cycle-update"
            component={(props) => (
              <ComponentUpdate initialValue={1} {...props} />
            )}
          />
          <Route
            path="/life-cycle-unmount"
            component={(props) => (
              <ComponentUnmount initialValue={1} {...props} />
            )}
          />
          <Route path="/hoc" component={(props) => <Hoc {...props} />} />
          <Route
            path="/context"
            component={(props) => <Context {...props} />}
          />
          <Route
            path="/redux-comp"
            component={(props) => <ReduxComp {...props} />}
          />
          <Route
            path="/context-comp"
            component={(props) => <ContextComp {...props} />}
          />
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
