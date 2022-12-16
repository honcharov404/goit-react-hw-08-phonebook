import React from 'react';
import { Navigate } from 'react-router-dom';

function WithAuthRedirect(Component, RiderectTo) {
  const ComponentWithRedirect = props => {
    const token = localStorage.getItem('token');
    return Boolean(token) ? (
      <Component {...props} />
    ) : (
      <Navigate to={RiderectTo} />
    );
  };
  return ComponentWithRedirect;
}

export default WithAuthRedirect;
