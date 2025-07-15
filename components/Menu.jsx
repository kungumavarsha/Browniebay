import React from 'react';
import Nav from './Nav';
import './Nav.css';
import brownie from '../src/assets/brownie.png';
import pic1 from '../src/assets/pic1.png';
import pic2 from '../src/assets/pic2.png';
import pic3 from '../src/assets/pic3.png';
import pic4 from '../src/assets/pic4.png';
import kitkat from '../src/assets/kitkat.png';
import b6 from '../src/assets/b6.png';
import double from '../src/assets/double.png';
import loaded from '../src/assets/loaded.png';
import c2 from '../src/assets/c2.png';
import oreo from '../src/assets/Oreo.png';
import ferro from '../src/assets/ferro.png';
import slab4 from '../src/assets/slab4.png';
import slap1 from '../src/assets/slap 1.png';
import b1 from '../src/assets/b1.png';
import assorted4 from '../src/assets/assorted4.png';
import mono from '../src/assets/mono.png';
import cakeb from '../src/assets/cakeb.png';
import bento from '../src/assets/bento.png';
import almond from '../src/assets/almond.png';
import logo from '../src/assets/logo.png';

const Menu = () => {
  const handleOrderClick = (itemName) => {
    // Redirect to Instagram direct message for thebrowniebay__ account
    window.open('https://www.instagram.com/direct/t/thebrowniebay__/', '_blank');
  };

  return (
    <>
      <Nav />
      <div style={{ 
        maxWidth: '1200px', 
        margin: '40px auto', 
        padding: '0 20px',
        fontFamily: 'Poppins, sans-serif'
      }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          textAlign: 'center', 
          marginBottom: '40px',
          color: '#62438C'
        }}>
          Our Menu
        </h1>

        {/* Welcome Message */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '50px',
          padding: '30px',
          background: '#f8f5ff',
          borderRadius: '15px'
        }}>
          <h2 style={{ 
            fontSize: '1.8rem', 
            fontWeight: 'bold', 
            marginBottom: '15px',
            color: '#62438C'
          }}>
            Welcome to Brownie Bay! 🍫
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#666', 
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Discover our handcrafted brownies made with love and premium ingredients. Each brownie is baked fresh daily to ensure the perfect texture and flavor. From classic favorites to unique creations, we have something for every chocolate lover!
          </p>
        </div>

        {/* Order Now Button just below the welcome paragraph */}

        {/* Best Sellers Section */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            marginBottom: '30px',
            color: '#62438C',
            textAlign: 'center'
          }}>
            ⭐ Best Sellers
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '30px' 
          }}>
            {/* Nutella Brownie - Best Seller */}
            <div style={{ 
              background: '#fff', 
              borderRadius: '15px', 
              padding: '25px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'transform 0.3s ease',
              border: '2px solid #b39ddb'
            }}>
              <img 
                src={pic1} 
                alt="Nutella Brownie"
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginBottom: '15px'
                }}
              />
              <div style={{
                background: '#b39ddb',
                color: '#fff',
                padding: '5px 15px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                marginBottom: '10px',
                display: 'inline-block'
              }}>
                BEST SELLER
              </div>
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: 'bold', 
                marginBottom: '10px',
                color: '#333'
              }}>
                Nutella Brownie
              </h3>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#62438C', marginBottom: '15px' }}>₹75</p>
              <p style={{ 
                color: '#666', 
                marginBottom: '20px',
                lineHeight: '1.6',
                fontSize: '0.9rem'
              }}>
                Our most popular brownie! Rich chocolate brownie swirled with creamy Nutella for an irresistible treat that everyone loves.
              </p>
            </div>

            {/* KitKat Brownie - Best Seller */}
            <div style={{ 
              background: '#fff', 
              borderRadius: '15px', 
              padding: '25px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'transform 0.3s ease',
              border: '2px solid #b39ddb'
            }}>
              <img 
                src={kitkat} 
                alt="KitKat Brownie"
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginBottom: '15px'
                }}
              />
              <div style={{
                background: '#b39ddb',
                color: '#fff',
                padding: '5px 15px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                marginBottom: '10px',
                display: 'inline-block'
              }}>
                BEST SELLER
              </div>
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: 'bold', 
                marginBottom: '10px',
                color: '#333'
              }}>
                KitKat Brownie
              </h3>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#62438C', marginBottom: '15px' }}>₹75</p>
              <p style={{ 
                color: '#666', 
                marginBottom: '20px',
                lineHeight: '1.6',
                fontSize: '0.9rem'
              }}>
                Delicious brownie loaded with KitKat chocolate bars for a crunchy and chocolatey treat that's perfect for special occasions.
              </p>
            </div>

            {/* 6-Piece Assorted Box - Best Seller */}
            <div style={{ 
              background: '#fff', 
              borderRadius: '15px', 
              padding: '25px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'transform 0.3s ease',
              border: '2px solid #b39ddb'
            }}>
              <img 
                src={b6} 
                alt="6-Piece Assorted Box"
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginBottom: '15px'
                }}
              />
              <div style={{
                background: '#b39ddb',
                color: '#fff',
                padding: '5px 15px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                marginBottom: '10px',
                display: 'inline-block'
              }}>
                BEST SELLER
              </div>
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: 'bold', 
                marginBottom: '10px',
                color: '#333'
              }}>
                6-Piece Assorted Box
              </h3>
              <p style={{ 
                fontSize: '1.2rem', 
                fontWeight: 'bold', 
                color: '#62438C',
                marginBottom: '15px'
              }}>
                ₹450
              </p>
              <p style={{ 
                color: '#666', 
                marginBottom: '20px',
                lineHeight: '1.6',
                fontSize: '0.9rem'
              }}>
                Our most popular choice! Select any 6 brownies for parties, gifts, or family gatherings. Perfect for sharing the love of brownies.
              </p>
            </div>
          </div>
        </div>

        {/* Individual Brownies Section */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            marginBottom: '30px',
            color: '#62438C',
            textAlign: 'center'
          }}>
            Individuals
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '30px' 
          }}>
            {/* Classic Brownie */}
            <div style={{ 
              background: '#fff', 
              borderRadius: '15px', 
              padding: '25px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <img 
                src={brownie} 
                alt="Classic Brownie"
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginBottom: '15px'
                }}
              />
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: 'bold', 
                marginBottom: '10px',
                color: '#333'
              }}>
                Classic Brownie
              </h3>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#62438C', marginBottom: '15px' }}>₹55</p>
              <p style={{ 
                color: '#666', 
                marginBottom: '20px',
                lineHeight: '1.6',
                fontSize: '0.9rem'
              }}>
                Our signature chocolate brownie with rich, fudgy texture and perfect balance of sweetness.
              </p>
            </div>

            {/* Triple Chocolate Brownie */}
            <div style={{ 
              background: '#fff', 
              borderRadius: '15px', 
              padding: '25px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <img 
                src={pic2} 
                alt="Triple Chocolate Brownie"
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginBottom: '15px'
                }}
              />
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: 'bold', 
                marginBottom: '10px',
                color: '#333'
              }}>
                Triple Chocolate Brownie
              </h3>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#62438C', marginBottom: '15px' }}>₹75</p>
              <p style={{ 
                color: '#666', 
                marginBottom: '20px',
                lineHeight: '1.6',
                fontSize: '0.9rem'
              }}>
                Three layers of chocolate goodness - dark, milk, and white chocolate in every bite.
              </p>
            </div>

            {/* Nutella Brownie */}
            <div style={{ 
              background: '#fff', 
              borderRadius: '15px', 
              padding: '25px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <img 
                src={pic1} 
                alt="Nutella Brownie"
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginBottom: '15px'
                }}
              />
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: 'bold', 
                marginBottom: '10px',
                color: '#333'
              }}>
                Nutella Brownie
              </h3>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#62438C', marginBottom: '15px' }}>₹75</p>
              <p style={{ 
                color: '#666', 
                marginBottom: '20px',
                lineHeight: '1.6',
                fontSize: '0.9rem'
              }}>
                Rich chocolate brownie swirled with creamy Nutella for an irresistible treat.
              </p>
            </div>

            {/* Red Velvet Brownie */}
            <div style={{ 
              background: '#fff', 
              borderRadius: '15px', 
              padding: '25px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <img 
                src={pic3} 
                alt="Red Velvet Brownie"
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginBottom: '15px'
                }}
              />
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: 'bold', 
                marginBottom: '10px',
                color: '#333'
              }}>
                Red Velvet Brownie
              </h3>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#62438C', marginBottom: '15px' }}>₹75</p>
              <p style={{ 
                color: '#666', 
                marginBottom: '20px',
                lineHeight: '1.6',
                fontSize: '0.9rem'
              }}>
                A rich, fudgy red velvet brownie with a swirl of cream cheese for the perfect balance of tang and chocolate.
              </p>
            </div>

            {/* Double Chocolate Brownie */}
            <div style={{ 
              background: '#fff', 
              borderRadius: '15px', 
              padding: '25px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <img 
                src={double} 
                alt="Double Chocolate Brownie"
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginBottom: '15px'
                }}
              />
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: 'bold', 
                marginBottom: '10px',
                color: '#333'
              }}>
                Double Chocolate Brownie
              </h3>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#62438C', marginBottom: '15px' }}>₹75</p>
              <p style={{ 
                color: '#666', 
                marginBottom: '20px',
                lineHeight: '1.6',
                fontSize: '0.9rem'
              }}>
                Extra chocolatey with both cocoa powder and chocolate chips for maximum chocolate flavor.
              </p>
            </div>

            {/* Chocolate Loaded Brownie */}
            <div style={{ 
              background: '#fff', 
              borderRadius: '15px', 
              padding: '25px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <img 
                src={loaded} 
                alt="Chocolate Loaded Brownie"
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginBottom: '15px'
                }}
              />
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: 'bold', 
                marginBottom: '10px',
                color: '#333'
              }}>
                Chocolate Loaded Brownie
              </h3>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#62438C', marginBottom: '15px' }}>₹75</p>
              <p style={{ 
                color: '#666', 
                marginBottom: '20px',
                lineHeight: '1.6',
                fontSize: '0.9rem'
              }}>
                Packed with chocolate chips, chocolate chunks, and chocolate drizzle for the ultimate chocolate experience.
              </p>
            </div>

            {/* Cookies */}
            <div style={{ 
              background: '#fff', 
              borderRadius: '15px', 
              padding: '25px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <img 
                src={c2} 
                alt="Cookies"
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  objectPosition: 'center 70%',
                  borderRadius: '10px',
                  marginBottom: '15px'
                }}
              />
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: 'bold', 
                marginBottom: '10px',
                color: '#333'
              }}>
                Cookies
              </h3>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#62438C', marginBottom: '15px' }}>₹35</p>
              <p style={{ 
                color: '#666', 
                marginBottom: '20px',
                lineHeight: '1.6',
                fontSize: '0.9rem'
              }}>
                Soft and chewy chocolate chip cookies made with premium ingredients and lots of love.
              </p>
            </div>

            {/* Oreo Brownie */}
            <div style={{ 
              background: '#fff', 
              borderRadius: '15px', 
              padding: '25px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <img 
                src={oreo} 
                alt="Oreo Brownie"
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginBottom: '15px'
                }}
              />
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: 'bold', 
                marginBottom: '10px',
                color: '#333'
              }}>
                Oreo Brownie
              </h3>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#62438C', marginBottom: '15px' }}>₹75</p>
              <p style={{ 
                color: '#666', 
                marginBottom: '20px',
                lineHeight: '1.6',
                fontSize: '0.9rem'
              }}>
                Rich chocolate brownie loaded with crushed Oreo cookies for a delightful crunch and classic flavor.
              </p>
            </div>

            {/* Nutty Brownie */}
            <div style={{ 
              background: '#fff', 
              borderRadius: '15px', 
              padding: '25px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <img 
                src={almond} 
                alt="Nutty Brownie"
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginBottom: '15px'
                }}
              />
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: 'bold', 
                marginBottom: '10px',
                color: '#333'
              }}>
                Nutty Brownie
              </h3>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#62438C', marginBottom: '15px' }}>₹70</p>
              <p style={{ 
                color: '#666', 
                marginBottom: '20px',
                lineHeight: '1.6',
                fontSize: '0.9rem'
              }}>
                Fudgy chocolate brownie packed with crunchy mixed nuts for a perfect blend of rich chocolate and nutty goodness.
              </p>
            </div>
          </div>
        </div>

        {/* Assorted Boxes Section */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            marginBottom: '30px',
            color: '#62438C',
            textAlign: 'center'
          }}>
            Assorted Brownie Boxes
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '40px' 
          }}>
            {/* 4-Piece Assorted Box */}
            <div style={{ 
              background: '#fff', 
              borderRadius: '15px', 
              padding: '30px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <img 
                src={assorted4} 
                alt="4-Piece Assorted Box"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginBottom: '15px'
                }}
              />
              <h3 style={{ 
                fontSize: '1.6rem', 
                fontWeight: 'bold', 
                marginBottom: '10px',
                color: '#333'
              }}>
                4-Piece Assorted Box
              </h3>
              <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#62438C', marginBottom: '15px' }}>₹300</p>
              <p style={{ color: '#b78af7', fontSize: '0.98rem', marginBottom: '10px' }}>Price may change for any customization for special occasions.</p>
              <p style={{ 
                color: '#666', 
                marginBottom: '20px',
                lineHeight: '1.6'
              }}>
                Perfect for small gatherings! Choose any 4 brownies from our menu. Great for sharing or treating yourself to variety.
              </p>
            </div>

            {/* 6-Piece Assorted Box */}
            <div style={{ 
              background: '#fff', 
              borderRadius: '15px', 
              padding: '30px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <img 
                src={b6} 
                alt="6-Piece Assorted Box"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  objectPosition: 'center 60%',
                  borderRadius: '10px',
                  marginBottom: '15px'
                }}
              />
              <h3 style={{ 
                fontSize: '1.6rem', 
                fontWeight: 'bold', 
                marginBottom: '10px',
                color: '#333'
              }}>
                6-Piece Assorted Box
              </h3>
              <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#62438C', marginBottom: '15px' }}>₹450</p>
              <p style={{ color: '#b78af7', fontSize: '0.98rem', marginBottom: '10px' }}>Price may change for any customization for special occasions.</p>
              <p style={{ 
                color: '#666', 
                marginBottom: '20px',
                lineHeight: '1.6'
              }}>
                Our most popular choice! Select any 6 brownies for parties, gifts, or family gatherings. Perfect for sharing the love of brownies.
              </p>
            </div>
          </div>
        </div>

        {/* Customized Treats Section */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            marginBottom: '30px',
            color: '#62438C',
            textAlign: 'center'
          }}>
            Customized Treats
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '40px' 
          }}>
            {/* Half Kg Customized Brownie */}
            <div style={{ 
              background: '#fff', 
              borderRadius: '15px', 
              padding: '30px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <img 
                src={slab4} 
                alt="Half Kg Customized Brownie"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginBottom: '15px'
                }}
              />
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: 'bold', 
                marginBottom: '10px',
                color: '#333'
              }}>
                Half Kg Customized Brownie
              </h3>
              <p style={{ 
                color: '#666', 
                marginBottom: '20px',
                lineHeight: '1.6',
                fontSize: '0.9rem'
              }}>
                Personalize your half kg brownie slab with your favorite message or design. Perfect for small celebrations!
              </p>
            </div>
            {/* 1 Kg Customized Brownie */}
            <div style={{ 
              background: '#fff', 
              borderRadius: '15px', 
              padding: '30px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <img 
                src={slap1} 
                alt="1 Kg Customized Brownie"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginBottom: '15px'
                }}
              />
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: 'bold', 
                marginBottom: '10px',
                color: '#333'
              }}>
                1 Kg Customized Brownie
              </h3>
              <p style={{ 
                color: '#666', 
                marginBottom: '20px',
                lineHeight: '1.6',
                fontSize: '0.9rem'
              }}>
                Go big with a full kilogram of brownie, customized for your special occasion. Ideal for parties and gifting!
              </p>
            </div>
            {/* Brownie */}
            <div style={{ 
              background: '#fff', 
              borderRadius: '15px', 
              padding: '30px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <img 
                src={b1} 
                alt="Brownie"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginBottom: '15px'
                }}
              />
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: 'bold', 
                marginBottom: '10px',
                color: '#333'
              }}>
                Brownie
              </h3>
              <p style={{ 
                color: '#666', 
                marginBottom: '20px',
                lineHeight: '1.6',
                fontSize: '0.9rem'
              }}>
                Classic, rich, and fudgy brownie—perfect for any chocolate lover or as a base for your own creative toppings.
              </p>
            </div>
          </div>
        </div>

        {/* Cakes Section */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            marginBottom: '30px',
            color: '#62438C',
            textAlign: 'center'
          }}>
            Special Cakes
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '40px' 
          }}>
            {/* Monogram Cake */}
            <div style={{ 
              background: '#fff', 
              borderRadius: '15px', 
              padding: '30px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <img 
                src={mono} 
                alt="Monogram Cake"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginBottom: '15px'
                }}
              />
              <h3 style={{ 
                fontSize: '1.6rem', 
                fontWeight: 'bold', 
                marginBottom: '10px',
                color: '#333'
              }}>
                Monogram Cake
              </h3>
              <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#62438C', marginBottom: '15px' }}>₹400</p>
              <p style={{ 
                color: '#666', 
                marginBottom: '20px',
                lineHeight: '1.6'
              }}>
                Personalized cake with your custom monogram design. Perfect for special occasions and celebrations.
              </p>
            </div>

            {/* Bento Cake */}
            <div style={{ 
              background: '#fff', 
              borderRadius: '15px', 
              padding: '30px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <img 
                src={cakeb} 
                alt="Bento Cake"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginBottom: '15px'
                }}
              />
              <h3 style={{ 
                fontSize: '1.6rem', 
                fontWeight: 'bold', 
                marginBottom: '10px',
                color: '#333'
              }}>
                Bento Cake
              </h3>
              <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#62438C', marginBottom: '15px' }}>₹350</p>
              <p style={{ 
                color: '#666', 
                marginBottom: '20px',
                lineHeight: '1.6'
              }}>
                Adorable individual-sized cakes perfect for personal treats or small celebrations. Beautifully decorated and delicious.
              </p>
            </div>

            {/* Bento Brownie */}
            <div style={{ 
              background: '#fff', 
              borderRadius: '15px', 
              padding: '30px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <img 
                src={bento} 
                alt="Bento Brownie"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginBottom: '15px'
                }}
              />
              <h3 style={{ 
                fontSize: '1.6rem', 
                fontWeight: 'bold', 
                marginBottom: '10px',
                color: '#333'
              }}>
                Bento Brownie
              </h3>
              <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#62438C', marginBottom: '15px' }}>₹250</p>
              <p style={{ 
                color: '#666', 
                marginBottom: '20px',
                lineHeight: '1.6'
              }}>
                Individual-sized brownies in cute bento style packaging. Perfect for personal indulgence or as gifts.
              </p>
            </div>
          </div>
        </div>

        {/* Ordering Information */}
        <div style={{ 
          background: '#f8f5ff', 
          borderRadius: '15px', 
          padding: '40px',
          marginBottom: '60px'
        }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            marginBottom: '30px',
            color: '#62438C',
            textAlign: 'center'
          }}>
            📋 Ordering Information
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '30px' 
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2rem',
                marginBottom: '15px'
              }}>
                🕒
              </div>
              <h3 style={{ 
                fontSize: '1.3rem', 
                fontWeight: 'bold', 
                marginBottom: '10px',
                color: '#333'
              }}>
                Order Timing
              </h3>
              <p style={{ 
                color: '#666', 
                lineHeight: '1.6'
              }}>
                Orders accepted daily from 9 AM to 8 PM. Same-day delivery available for orders placed before 2 PM.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2rem',
                marginBottom: '15px'
              }}>
                🚚
              </div>
              <h3 style={{ 
                fontSize: '1.3rem', 
                fontWeight: 'bold', 
                marginBottom: '10px',
                color: '#333'
              }}>
                Delivery
              </h3>
              <p style={{ 
                color: '#666', 
                lineHeight: '1.6'
              }}>
                Free delivery within 5km. Additional charges apply for longer distances. Delivery time: 1-2 hours.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2rem',
                marginBottom: '15px'
              }}>
                💳
              </div>
              <h3 style={{ 
                fontSize: '1.3rem', 
                fontWeight: 'bold', 
                marginBottom: '10px',
                color: '#333'
              }}>
                Payment
              </h3>
              <p style={{ 
                color: '#666', 
                lineHeight: '1.6'
              }}>
                Cash on delivery, UPI, or online payment accepted. Payment details shared after order confirmation.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2rem',
                marginBottom: '15px'
              }}>
                🌱
              </div>
              <h3 style={{ 
                fontSize: '1.3rem', 
                fontWeight: 'bold', 
                marginBottom: '10px',
                color: '#333'
              }}>
                Ingredients
              </h3>
              <p style={{ 
                color: '#666', 
                lineHeight: '1.6'
              }}>
                Made with premium ingredients: Belgian chocolate, farm-fresh eggs, and pure vanilla extract.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: '60px',
          padding: '40px',
          background: '#f8f5ff',
          borderRadius: '15px'
        }}>
          <h3 style={{ 
            fontSize: '1.8rem', 
            fontWeight: 'bold', 
            marginBottom: '20px',
            color: '#62438C'
          }}>
            Ready to Order?
          </h3>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#666', 
            marginBottom: '30px'
          }}>
            Message us on Instagram to place your order and we'll have your delicious brownies ready for you!
          </p>
          {/* Order on Instagram button removed */}
        </div>
      </div>
      {/* Order Now Button at the end of the menu page */}
      <div style={{ textAlign: 'center', margin: '60px 0 40px 0' }}>
        <a
          href="https://www.instagram.com/thebrowniebay__/"
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
            textDecoration: 'none',
            textAlign: 'center'
          }}
        >Order Now</a>
      </div>
    </>
  );
};

export default Menu; 