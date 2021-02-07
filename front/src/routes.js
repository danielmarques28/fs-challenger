import React from 'react';
import {
  Router,
  Switch,
  Route
} from 'react-router-dom';
import history from './history';

// VIEWS
import Login from './views/Login';
import Home from './views/Home';

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/login" name="login">
          <Login />
        </Route>
        <Route exact path="/" name="home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
