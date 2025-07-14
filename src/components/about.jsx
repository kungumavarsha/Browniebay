import React from "react";
import Nav from "./Nav";
import "./Nav.css";

function About() {
  return (
    <>
    <Nav />
    <div className="about-container" style={{ width: '100vw', padding: 32 }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: 16, color: "#9063CD" }}>About Us</h1>
      <p style={{ fontSize: "1rem", marginBottom: 12, color: '#62438C' }}>
        Discover the story and passion behind Brownie Bay.
      </p>
      <p style={{ fontSize: "1.2rem", marginBottom: 32 }}>
        Welcome to <b>Brownie Bay</b>! We are passionate about baking the most delicious, gooey, and chocolatey brownies you'll ever taste. Our mission is to bring a smile to your face with every bite.
      </p>

      <div style={{ display: "flex", gap: 32, flexWrap: "wrap", marginBottom: 32, width: '100%' }}>
        <div style={{ flex: 1, minWidth: 250 }}>
          <h2 style={{ color: "#62438C" }}>Our Story</h2>
          <p>
            Founded in 2023, Brownie Bay started as a small home bakery. Today, we deliver happiness across the city, one brownie at a time. Our secret? Premium ingredients, love, and a dash of creativity!
          </p>
        </div>
        <div style={{ flex: 1, minWidth: 250 }}>
          <h2 style={{ color: "#62438C" }}>Our Promise</h2>
          <p>
            We promise freshness, quality, and a taste that will keep you coming back. Whether you crave classic chocolate, nutty, or something unique, we have a brownie for you!
          </p>
        </div>
      </div>

      <div style={{ background: "#f7f3ff", borderRadius: 12, padding: 24, textAlign: "center", width: '100%' }}>
        <h2 style={{ color: "#9063CD", marginBottom: 12 }}>Why Choose Us?</h2>
        <ul style={{ listStyle: "none", padding: 0, fontSize: "1.1rem" }}>
          <li>🍫 100% real chocolate</li>
          <li>🌱 Fresh, locally sourced ingredients</li>
          <li>🚚 Fast delivery to your doorstep</li>
          <li>💜 Made with love and care</li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default About;