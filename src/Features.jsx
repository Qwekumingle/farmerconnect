import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingUsd, faRecycle, faUsers } from '@fortawesome/free-solid-svg-icons';
import './Features.css';

const Features = () => {
  return (
    <section id="features">
      <div className="section-title">
        <h2>Why Choose FarmConnect</h2>
      </div>
      <div className="features">
        <div className="feature-card">
          <div className="feature-icon">
            <FontAwesomeIcon icon={faHandHoldingUsd} />
          </div>
          <h3>Higher Profits for Farmers</h3>
          <p>Sell directly to consumers without middlemen, increasing your profit margins by up to 40%.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <FontAwesomeIcon icon={faRecycle} />
          </div>
          <h3>Integrated Recycling</h3>
          <p>Turn agricultural waste into valuable resources through our innovative recycling program.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <FontAwesomeIcon icon={faUsers} />
          </div>
          <h3>Community Building</h3>
          <p>Connect with local consumers and build lasting relationships while supporting rural development.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;