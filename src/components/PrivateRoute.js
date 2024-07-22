import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
