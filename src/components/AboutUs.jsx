import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container container">
      <div className="about-us-image">
        <img src="images/Pink Flamingo.png" alt="A pink flamingo" />
      </div>
      <div className="about-us-content">
        <p className="section-subtitle">ABOUT US</p>
        <h2>The saga behind our <span className="highlight-text">strategic vision</span></h2>
        <p>We're a passionate team of digital marketing experts obsessed with helping businesses succeed in the ever-evolving online landscape. We don’t just manage your social media or throw generic ads; we delve deep to understand your brand, target audience, and industry.</p>
        <p>We aim to become an extension of your team, working collaboratively to achieve your unique business goals. Our transparent communication and results-oriented approach ensures you're always in the loop and seeing the impact of your marketing efforts.</p>
      </div>
    </div>
  );
};

export default AboutUs;