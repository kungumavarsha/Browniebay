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
          The Brownie Bay was founded in November 2023, inspired by a simple love for baking and a spontaneous idea that turned into something truly sweet—literally.
        </p>
        <p style={{ fontSize: '1.08rem', color: '#444', maxWidth: '700px', textAlign: 'center', lineHeight: 1.7, marginBottom: '16px' }}>
          While working as an IT professional, what began as a casual hobby in the kitchen soon became a full-blown passion. Countless hours of experimenting with flavors, textures, and recipes led to the creation of our signature brownies—rich, fudgy, and irresistibly delicious. After sharing them with friends and family, the response was overwhelming: "You have to sell these!" So we did.
        </p>
        <p style={{ fontSize: '1.08rem', color: '#444', maxWidth: '700px', textAlign: 'center', lineHeight: 1.7, marginBottom: '16px' }}>
          At The Brownie Bay, we bring handcrafted indulgence right to your doorstep. As an online-only pastry shop, we specialize in baking fresh-to-order brownies and treats using high-quality ingredients, plenty of creativity, and lots of love.
        </p>
        <p style={{ fontSize: '1.08rem', color: '#444', maxWidth: '700px', textAlign: 'center', lineHeight: 1.7, marginBottom: '16px' }}>
          From our best-selling Nutella brownies to a rotating selection of cookies and unique brownie flavors, everything is made from scratch—always fresh, never frozen. Whether you’re treating yourself, sending a gift, or celebrating a special occasion, we make it easy to enjoy bakery-quality desserts without leaving home.
        </p>
        <p style={{ fontSize: '1.08rem', color: '#444', maxWidth: '700px', textAlign: 'center', lineHeight: 1.7, marginBottom: '16px' }}>
          We may not have a physical storefront, but we’re always open online—just a few clicks away from your next favorite dessert. Every order is carefully packaged, beautifully presented, and delivered with care.
        </p>
        <p style={{ fontSize: '1.08rem', color: '#444', maxWidth: '700px', textAlign: 'center', lineHeight: 1.7, marginBottom: '16px' }}>
          <b>Why The Brownie Bay?</b><br/>
          We chose the name The Brownie Bay to reflect everything we want our brand to be: warm, comforting, and a little escape from the everyday.<br/><br/>
          <b>"Brownie"</b> represents our core offering—decadent, handmade brownies that are the heart and soul of our kitchen.<br/>
          <b>"Bay"</b> evokes a cozy, peaceful place—a quiet spot to unwind and indulge. Even though we're online-only, we want every visit to feel like a sweet little getaway.<br/><br/>
          Together, The Brownie Bay is more than just a bakery—it’s a feel-good experience, delivered straight to your door.
        </p>
        <p style={{ fontSize: '1.08rem', color: '#444', maxWidth: '700px', textAlign: 'center', lineHeight: 1.7 }}>
          So go ahead—indulge. You deserve it.<br/><br/>— With love,<br/>The Brownie Bay Team
        </p>
      </div>
    </>
  );
};

export default About; 