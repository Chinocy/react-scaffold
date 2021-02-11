import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Login from '../components/Screens/Login';
export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/'>
            <Login />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
