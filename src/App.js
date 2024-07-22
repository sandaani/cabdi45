import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { BlogProvider } from './context/BlogContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import Landing from './pages/Landing';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import './App.css';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <BlogProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/create" element={<PrivateRoute><CreatePost /></PrivateRoute>} />
            <Route path="/update/:id" element={<PrivateRoute><UpdatePost /></PrivateRoute>} />
          </Routes>
        </BlogProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
