import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Connect Farmers with Consumers</h1>
        <p>A revolutionary platform that empowers farmers, supports local businesses, and promotes environmental sustainability through innovative recycling integration.</p>
        <div className="hero-buttons">
          <a href="#" className="btn">Join as a Farmer</a>
          <a href="#" className="btn btn-secondary">Shop Local Produce</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;