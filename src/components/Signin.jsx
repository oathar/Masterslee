// Signin.jsx (Redesigned with a cleaner, more modern look)
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signin.css';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = (e) => {
    e.preventDefault();
    // Implement sign-in logic here
    console.log('Signin:', email, password);
  };

  return (
    <div className="signin-page">
      <div className="signin-card">
        <h2 className="signin-title">Welcome Back</h2>
        <form onSubmit={handleSignin} className="signin-form">
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="signin-input"
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="signin-input"
            />
          </div>
          <button type="submit" className="signin-button bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-800" >
            Sign In
          </button>
        </form>
        <p className="signup-link">
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;