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
          <button onClick={() => { navigate("/menu"); setMenuOpen(false); }}>Menu</button>
          <button onClick={() => { handleOrderClick(); setMenuOpen(false); }}>Order</button>
        </div>
        {/* Cart icon removed */}
      </div>
    
    
</> 
  );
};

export default Nav; 