import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from './Nav';
import brownie from '../src/assets/brownie.png';
import pic1 from '../src/assets/pic1.png';  
import pic2 from '../src/assets/pic2.png';
import pic3 from '../src/assets/pic3.png';
import pic4 from '../src/assets/pic4.png';
import c1 from '../src/assets/c1.png';
import b2 from '../src/assets/b2.png';
import bento from '../src/assets/bento.png';
import b6 from '../src/assets/b6.png';
import c2 from '../src/assets/c2.png';
import slap from '../src/assets/slap 1.png';
import b1 from '../src/assets/b1.png';
import "./Nav.css";
// import Footer from "./Footer";
  
const productPics = [c1, b2, bento, b6, c2, slap, b1];
const productNames = [
  'Cookies',
  'Brownie',
  'Bento Brownie',
  'Assorted Brownie',
  'Dark Chocolate Cookie',
  'Customized Brownie Slab',
  'b-day brownie'
];

function Home() {
  const navigate = useNavigate();

  // Duplicate the array for looping effect
  const carouselPics = productPics;

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
        <div className="mid">
          <h2>Featured products</h2>
          <div className="products">  
            <div className="product" id="product">
              <div className="product-carousel-container">
                <div className="product-carousel">
                  {carouselPics.map((pic, idx) => (
                    <div className="product-item" key={idx}>
                      <img src={pic} alt={`pic${idx + 1}`} />
                      <h3>{productNames[idx]}</h3>
                      
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Our Story and Customer Favorites Section */}
        <div style={{ maxWidth: '1100px', margin: '40px auto', padding: '0 20px' }}>
        
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' , color: '#62438C' }}>Customer Favorites</h3>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {/* Card 1 */}
            <div style={{ background: 'transparent', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', width: '320px', padding: '20px', textAlign: 'left' }}>
              <img src={pic1} alt="Classic Baguette" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px', marginBottom: '16px' }} />
              <div style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '4px' }}>Nutella Brownie  </div>
              <div style={{ color: '#666', fontSize: '0.98rem' }}>Rich, fudgy brownie swirled with creamy Nutella for the ultimate chocolate-hazelnut treat.</div>
            </div>
            {/* Card 2 */}
            <div style={{ background: 'transparent', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', width: '320px', padding: '20px', textAlign: 'left' }}>
              <img src={pic2} alt="Chocolate Chip Cookies" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px', marginBottom: '16px' }} />
              <div style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '4px' }}>triple chocolate brownie</div>
              <div style={{ color: '#666', fontSize: '0.98rem' }}>Decadent brownie loaded with dark, milk, and white chocolate for triple the indulgence.</div>
            </div>
            {/* Card 3 */}
            <div style={{ background: 'transparent', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', width: '320px', padding: '20px', textAlign: 'left' }}>
              <img src={pic3} alt="Fruit Tart" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px', marginBottom: '16px' }} />
              <div style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '4px' }}>red velvet brownie</div>
              <div style={{ color: '#666', fontSize: '0.98rem' }}>A luscious red velvet brownie with a hint of cocoa, topped with a swirl of cream cheese frosting.</div>
            </div>
          </div>
        </div>
        {/* Order Now Section */}
        <div style={{ textAlign: 'center', margin: '60px 0 40px 0' }}>
          <h2 style={{ fontSize: '2.3rem', fontWeight: 'bold', marginBottom: '24px', color: '#222' }}>Order Your Favorites Today</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <a
              href="https://instagram.com/thebrowniebay__/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: '#b39ddb',
                color: '#222',
                border: 'none',
                borderRadius: '24px',
                padding: '14px 38px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                transition: 'background 0.2s',
                textDecoration: 'none', // removes underline
                textAlign: 'center'
              }}
            >
              Order Now
            </a>
            <button
              style={{
                background: '#fff',
                color: '#62438C',
                border: '2px solid #b39ddb',
                borderRadius: '24px',
                padding: '14px 38px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                transition: 'background 0.2s',
              }}
              onClick={() => window.location.href = '/Menu'}
            >Menu</button>
          </div>
        </div>
        {/* Minimal Centered Footer */}
        <div style={{
          width: '100vw',
          background: '#b78af7',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 0 24px 0',
          fontFamily: 'Poppins, sans-serif',
          boxSizing: 'border-box',
          marginTop: '40px',
        }}>
          {/* Stacked Links */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, marginBottom: 28, height: '110px', fontFamily: 'Poppins, sans-serif' }}>
            <a href="/" style={{ color: '#222', textDecoration: 'none', fontSize: '1rem', margin: 2, fontFamily: 'Poppins, sans-serif' }}>Home</a>
            <a href="/about" style={{ color: '#222', textDecoration: 'none', fontSize: '1rem', margin: 2, fontFamily: 'Poppins, sans-serif' }}>About</a>
            <a href="/menu" style={{ color: '#222', textDecoration: 'none', fontSize: '1rem', margin: 2, fontFamily: 'Poppins, sans-serif' }}>Menu</a>
            <a href="/order" style={{ color: '#222', textDecoration: 'none', fontSize: '1rem', margin: 2, fontFamily: 'Poppins, sans-serif' }}>Order</a>
            {/* <a href="/contact" style={{ color: '#222', textDecoration: 'none', fontSize: '1rem', margin: 2, fontFamily: 'Poppins, sans-serif' }}>Contact</a> */}
          </div>
          {/* Social Icons Row */}
          {/* <div style={{ display: 'flex', gap: 24, marginBottom: 28 }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ border: '1.5px solid #222', borderRadius: 8, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#222', fontSize: '1.3rem', background: '#fff', transition: 'background 0.2s' }}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com/thebrowniebay_" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ border: '1.5px solid #222', borderRadius: 8, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#222', fontSize: '1.3rem', background: '#fff', transition: 'background 0.2s' }}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ border: '1.5px solid #222', borderRadius: 8, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#222', fontSize: '1.3rem', background: '#fff', transition: 'background 0.2s' }}>
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" style={{ border: '1.5px solid #222', borderRadius: 8, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#222', fontSize: '1.3rem', background: '#fff', transition: 'background 0.2s' }}>
              <i className="fab fa-pinterest-p"></i>
            </a>
          </div> */}
          {/* Copyright */}
          <div style={{ color: '#222', fontSize: '0.95rem', marginBottom: 8, textAlign: 'center', fontFamily: 'Poppins, sans-serif' }}>
            The Brownie Bay © 2024
          </div>
          {/* Legal Links */}
          <div style={{ color: '#222', fontSize: '0.95rem', textAlign: 'center', letterSpacing: '0.02em', fontFamily: 'Poppins, sans-serif' }}>
            <a href="#" style={{ color: '#222', textDecoration: 'none', margin: '0 8px', fontFamily: 'Poppins, sans-serif' }}>Terms & Conditions</a>|
            <a href="#" style={{ color: '#222', textDecoration: 'none', margin: '0 8px', fontFamily: 'Poppins, sans-serif' }}>Privacy</a>|
            <a href="#" style={{ color: '#222', textDecoration: 'none', margin: '0 8px', fontFamily: 'Poppins, sans-serif' }}>Legal Notice</a>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default Home;