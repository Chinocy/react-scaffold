import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../components/screens/Login';
import Home from '../components/screens/Home';
import paths from './paths';
export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path={paths.login} exact>
            <Login />
          </Route>
          <Route path={paths.home} exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
