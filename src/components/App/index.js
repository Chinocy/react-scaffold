import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../auth/Login';
import paths from '../../config/paths';
import PrivateRoute from './PrivateRoute';
import privateRoutes from './privateRoutes';
export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={paths.login} exact>
          <Login />
        </Route>
        {privateRoutes.map((route) => (
          <PrivateRoute
            component={route.component}
            path={route.path}
            key={route.path}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
}
