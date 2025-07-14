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
          Welcome to Brownie Bay! We are a passionate team of bakers dedicated to crafting the most irresistible brownies in town. Our journey began with a love for chocolate and a dream to share joy through every bite. From classic favorites to creative new flavors, each brownie is made with the finest ingredients and a whole lot of heart.
        </p>
        <p style={{ fontSize: '1.08rem', color: '#444', maxWidth: '700px', textAlign: 'center', lineHeight: 1.7, marginBottom: '16px' }}>
          At Brownie Bay, we believe that brownies are more than just a dessert—they're a way to bring people together. Whether you're celebrating a special occasion or simply treating yourself, our brownies are baked to make every moment sweeter. We offer a variety of options, including our signature Nutella Brownie, decadent Triple Chocolate, and the ever-popular Red Velvet, as well as seasonal specials that keep our menu exciting.
        </p>
        <p style={{ fontSize: '1.08rem', color: '#444', maxWidth: '700px', textAlign: 'center', lineHeight: 1.7, marginBottom: '16px' }}>
          Our commitment to quality means we use only the best ingredients—rich cocoa, creamy butter, and farm-fresh eggs. Every batch is handcrafted with care, ensuring a perfect balance of fudgy, chewy, and chocolatey goodness in every bite.
        </p>
        <p style={{ fontSize: '1.08rem', color: '#444', maxWidth: '700px', textAlign: 'center', lineHeight: 1.7 }}>
          Thank you for making Brownie Bay a part of your sweetest moments. We look forward to sharing our love of brownies with you, one delicious square at a time!
        </p>
      </div>
    </>
  );
};

export default About; 