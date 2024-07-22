import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { currentUser, logout } = useAuth();
 


  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        {!currentUser ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        ) : (
          <>
            <Link to="/home">Home</Link>
            <Link to="/create">Create Post</Link>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
