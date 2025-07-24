import './Navbar.css';
import React, { useState } from 'react';

const Navbar = ({ onAdminChange }: { onAdminChange: (isAdmin: boolean) => void }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const handleSignIn = () => {
    if (username === 'Admin' && password === 'Admin') {
      setIsAdmin(true);
      onAdminChange(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleSignOut = () => {
    setIsAdmin(false);
    setUsername('');
    setPassword('');
    onAdminChange(false);
  };

  return (
    <nav className="eca-navbar">
      <div className="eca-navbar__logo">
        <img src="/Logo.png" alt="Umhlanga Arms Logo" style={{height: '2rem', verticalAlign: 'middle', marginRight: '0.5rem'}} />
        Umhlanga Arms
      </div>
      <div className="eca-navbar__links">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        {/* <a href="#events">Events</a> */}
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        {isAdmin ? (
          <button
            style={{
              marginLeft: '0.5rem',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              border: 'none',
              background: '#dc3545',
              color: '#fff',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        ) : (
          <>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              style={{
                padding: '0.4rem 0.7rem',
                borderRadius: '0.4rem',
                border: '1px solid #ccc',
                fontSize: '1rem',
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{
                padding: '0.4rem 0.7rem',
                borderRadius: '0.4rem',
                border: '1px solid #ccc',
                fontSize: '1rem',
              }}
            />
            <button
              style={{
                marginLeft: '0.5rem',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                border: 'none',
                background: '#007bff',
                color: '#fff',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 