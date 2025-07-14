import React from 'react';
import './Nav.css';
import Nav from './Nav';

const About = () => {
  return (
    <>
      <Nav />
      <div style={{ background: '#f3eafd', minHeight: '480px', borderRadius: '12px', margin: '50px auto', maxWidth: '1000px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 32px' }}>
        <h1 style={{ color: '#62438C', fontSize: '2.4rem', fontWeight: 'bold', marginBottom: '22px', textAlign: 'center' }}>About Us</h1>
        <p style={{ fontSize: '1.18rem', color: '#333', maxWidth: '700px', textAlign: 'center', lineHeight: 1.7, marginBottom: '18px' }}>
          At The Brownie Bay, we bring handcrafted indulgence straight to your doorstep. We're an online-only pastry shop dedicated to creating rich, fudgy brownies and fresh baked treats with care, creativity, and top-quality ingredients.
        </p>
        <p style={{ fontSize: '1.08rem', color: '#444', maxWidth: '700px', textAlign: 'center', lineHeight: 1.7, marginBottom: '16px' }}>
          From our signature Nutella brownies to a rotating selection of cookies and other flavours of brownie every item is baked to order—fresh, never frozen. Whether you're treating yourself, surprising someone special, or planning dessert for an event, we make it easy to satisfy your sweet tooth without leaving home.
        </p>
        <p style={{ fontSize: '1.08rem', color: '#444', maxWidth: '700px', textAlign: 'center', lineHeight: 1.7, marginBottom: '16px' }}>
          We may not have a storefront, but we’re always open online just a few clicks away from your next favorite dessert. Every box from The Brownie Bay is carefully packaged, beautifully presented, and delivered with love.
        </p>
        <p style={{ fontSize: '1.08rem', color: '#444', maxWidth: '700px', textAlign: 'center', lineHeight: 1.7 }}>
          So go ahead, indulge. You deserve it.<br/><br/>— With love,<br/>The Brownie Bay
        </p>
      </div>
    </>
  );
};

export default About; 