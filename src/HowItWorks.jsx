import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="section-title">
        <h2>How It Works</h2>
      </div>
      <div className="steps">
        <div className="step-card">
          <div className="step-number">1</div>
          <h3>Register Your Farm</h3>
          <p>Create your profile, add your location, and list the products you offer to get started.</p>
        </div>
        <div className="step-card">
          <div className="step-number">2</div>
          <h3>Connect with Customers</h3>
          <p>Accept orders, arrange deliveries, and build your customer base through our platform.</p>
        </div>
        <div className="step-card">
          <div className="step-number">3</div>
          <h3>Participate in Recycling</h3>
          <p>Register your agricultural waste for collection and earn credits for sustainable practices.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;