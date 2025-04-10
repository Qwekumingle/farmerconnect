import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-column">
          <h3>FarmConnect</h3>
          <p>Connecting farmers directly with consumers while promoting sustainable practices through innovative recycling solutions.</p>
          <div className="social-links">
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>
        <div className="footer-column">
          <h3>For Farmers</h3>
          <ul className="footer-links">
            <li><a href="#">How It Works</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Success Stories</a></li>
            <li><a href="#">Resources</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>For Consumers</h3>
          <ul className="footer-links">
            <li><a href="#">Find Local Farms</a></li>
            <li><a href="#">Seasonal Products</a></li>
            <li><a href="#">Recycling Program</a></li>
            <li><a href="#">Rewards</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul className="footer-links">
            <li><a href="#">Support</a></li>
            <li><a href="#">Partnerships</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2025 FarmConnect. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;