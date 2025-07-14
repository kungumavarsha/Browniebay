import React from 'react';
import './Footer.css';
import brownieLogo from '../assets/brownie.png';

const Footer = () => (
  <footer className="footer">
    <div className="footer-col logo-col">
      <img src={brownieLogo} alt="The Brownie Bay Logo" className="footer-logo" />
    </div>
    <div className="footer-col">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/menu">Menu</a>
      <a href="/order">Order</a>
    </div>
    <div className="footer-col">
      <a href="#">Terms & Conditions</a>
      <a href="#">Legal Notice</a>
    </div>
    <div className="footer-col">
      <a href="#">Return Policy</a>
      <a href="#">Privacy Policy</a>
    </div>
    <div className="footer-right">
      <span>The Brownie Bay. All rights reserved</span>
      <div className="footer-socials">
        <a href="https://instagram.com/thebrowniebay_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer; 