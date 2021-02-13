import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import routes from '../privateRoutes';
import useAuth from '../../../hooks/useAuth';
import PropTypes from 'prop-types';
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      exact
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to={routes.login} />
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.Component,
};

export default PrivateRoute;
