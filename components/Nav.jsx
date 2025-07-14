import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../src/assets/logo.png';

import './Nav.css';

const Nav = () => {
  const navigate = useNavigate();
  
  const handleOrderClick = () => {
    // Redirect to Instagram direct message for thebrowniebay__ account
    window.open('https://www.instagram.com/direct/t/thebrowniebay__/', '_blank');
  };

  return (
<>
    
      <div className="navbar-content">
        <div className="navbar-logo">
          <img src={logo} alt="Brownie Bay Logo" style={{ height: '100px', width: 'auto', marginLeft: '100px' }} />
        </div>
        <div className="navbar-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
        
      </div>
      <div className="content">  
        <div className="nav-buttons">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/about")}>About</button>
          <button onClick={() => navigate("/menu")}>Menu</button>
          <button onClick={handleOrderClick}>Order</button>
        </div>
        {/* Cart icon removed */}
      </div>
    
    
</> 
  );
};

export default Nav; 