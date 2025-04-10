import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="section-title">
        <h2>Success Stories</h2>
      </div>
      <div className="testimonial-container">
        <div className="testimonial-card">
          <p className="testimonial-text">"Since joining FarmConnect, my income has increased by 35%. I now have direct relationships with customers who value my organic produce."</p>
          <div className="testimonial-author">
            <div className="testimonial-avatar">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div>
              <h4>John Smith</h4>
              <p>Organic Vegetable Farmer</p>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <p className="testimonial-text">"The recycling program has transformed how we handle waste. What used to be a problem is now an additional source of income."</p>
          <div className="testimonial-author">
            <div className="testimonial-avatar">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div>
              <h4>Maria Johnson</h4>
              <p>Fruit Orchard Owner</p>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <p className="testimonial-text">"As a consumer, I love knowing exactly where my food comes from. The quality is outstanding, and I feel good supporting local farmers."</p>
          <div className="testimonial-author">
            <div className="testimonial-avatar">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div>
              <h4>Robert Davis</h4>
              <p>Regular Customer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;