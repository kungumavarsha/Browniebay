import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import Nav from './Nav';
import brownie from '../src/assets/brownie.png';
import "./Nav.css";
import Footer from './Footer';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="home">
        <Nav />
        <div className="brownie-image-bg" style={{
          backgroundImage: `url(${brownie})`,
          width: '100vw',
          height: '500px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          
        }}>
          <h1 style={{
            color: '#fff',
            fontSize: '3rem',
            fontWeight: 'bold',
            textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
            letterSpacing: '2px',
            margin: 0,
          }}>
            Welcome to the Brownie Bay!
          </h1>
        </div>
      </div>
     <div className="mid">
      <h2>featured products</h2>
      <div className="products"> 
          <div className="product">
            
          </div>
         </div>
     </div>
     {/* Footer Section */}
      <div style={{
        width: '100vw',
        background: '#e6e6ee',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: '32px 40px 16px 40px',
        fontFamily: 'Poppins, sans-serif',
        boxSizing: 'border-box',
        marginTop: '40px'
      }}>
        {/* Logo Column */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 48 }}>
          <img src={brownie} alt="The Brownie Bay Logo" style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', background: '#fff', border: '2px solid #b78af7' }} />
        </div>
        {/* Navigation Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginRight: 48, minWidth: 120 }}>
          <a href="/" style={{ color: '#333', textDecoration: 'none', fontSize: '1rem', marginBottom: 4 }}>Home</a>
          <a href="/about" style={{ color: '#333', textDecoration: 'none', fontSize: '1rem', marginBottom: 4 }}>About</a>
          <a href="/menu" style={{ color: '#333', textDecoration: 'none', fontSize: '1rem', marginBottom: 4 }}>Menu</a>
          <a href="/order" style={{ color: '#333', textDecoration: 'none', fontSize: '1rem' }}>Order</a>
        </div>
        {/* Legal Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginRight: 48, minWidth: 120 }}>
          <a href="#" style={{ color: '#333', textDecoration: 'none', fontSize: '1rem', marginBottom: 4 }}>Terms & Conditions</a>
          <a href="#" style={{ color: '#333', textDecoration: 'none', fontSize: '1rem' }}>Legal Notice</a>
        </div>
        {/* Policy Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginRight: 48, minWidth: 120 }}>
          <a href="#" style={{ color: '#333', textDecoration: 'none', fontSize: '1rem', marginBottom: 4 }}>Return Policy</a>
          <a href="#" style={{ color: '#333', textDecoration: 'none', fontSize: '1rem' }}>Privacy Policy</a>
        </div>
        {/* Right Section */}
        <div style={{ marginLeft: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', minWidth: 220, gap: 12 }}>
          <span style={{ color: '#333', fontSize: '0.95rem', marginBottom: 8 }}>The Brownie Bay. All rights reserved</span>
          <div style={{ display: 'flex', gap: 18 }}>
            <a href="https://instagram.com/thebrowniebay_" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: '#333', fontSize: '1.3rem' }}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: '#333', fontSize: '1.3rem' }}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ color: '#333', fontSize: '1.3rem' }}>
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;