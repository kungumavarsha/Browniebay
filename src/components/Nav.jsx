import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram ,FaShoppingCart} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './Nav.css';

const Nav = () => {
  const navigate = useNavigate();
  return (
<>
    
      <div className="navbar-content">
        <div className="navbar-logo">Brownie Bay</div>
        <div className="navbar-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
       
        </div>
        
      </div>
      <div className="content">  
        <div className="nav-buttons">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/about")}>About Us</button>
          <button onClick={() => navigate("/Order")}>Order</button>
        </div>
        <div className="cart-wrapper">
          <a href="https://cart.com" className='cart-icon' target="_blank" rel="noopener noreferrer"><FaShoppingCart /></a>
        </div>
      </div>
    
    
</> 
  );
};

export default Nav;