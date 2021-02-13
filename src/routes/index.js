import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../components/auth/Login';
import TestList from '../components/test/TestList';
import paths from './paths';
export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path={paths.login} exact>
            <Login />
          </Route>
          <Route path={paths.testList} exact>
            <TestList />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
