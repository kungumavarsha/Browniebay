import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../src/assets/logo.png';

import './Nav.css';

const Nav = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  
  const handleOrderClick = () => {
    // Redirect to Instagram direct message for thebrowniebay__ account
    window.open('https://www.instagram.com/direct/t/thebrowniebay__/', '_blank');
  };

  return (
<>
    
      <div className="navbar-content">
        <div className="navbar-logo">
          <img src={logo} alt="Brownie Bay Logo" style={{ height: '100px', width: 'auto', marginLeft: '10px' }} />
        </div>
        <div className="navbar-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com/thebrowniebay__/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          {/* Hamburger menu button for mobile, now below icons */}
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
      {/* Responsive nav links */}
      <div className={`content${menuOpen ? ' open' : ''}`}>
        <div className="nav-buttons">
          <button onClick={() => { navigate("/"); setMenuOpen(false); }}>Home</button>
          <button onClick={() => { navigate("/about"); setMenuOpen(false); }}>About</button>
          <button onClick={() => { navigate("/Menu"); setMenuOpen(false); }}>Menu</button>
          <a
            href="https://instagram.com/thebrowniebay__/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
             
              color: 'white',
              border: 'none',
              borderRadius: '24px',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
              transition: 'background 0.2s',
              textDecoration: 'none',
              textAlign: 'center',
              marginLeft: '0px'
            }}
            onClick={() => setMenuOpen(false)}
          >Order</a>
        </div>
        {/* Cart icon removed */}
      </div>
    
    
</> 
  );
};

export default Nav; 