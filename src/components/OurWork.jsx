import React from 'react';
import './OurWork.css';

const services = [
  { title: "Social Media Marketing", items: ["Social Media Advertising", "Search Engine Marketing", "Display Banner Marketing"], image: "images/Social Media.webp" },
  { title: "SEO", items: ["Site Audit", "On-page Optimization", "Keyword Analysis"], image: "images/SEO.webp" },
  { title: "Performance Marketing", items: ["Social Media Management", "Brand Strategy", "Copywriting"], image: "images/Performance.webp" },
  { title: "Design & Branding", items: ["Brand Identity", "Pitch Decks", "Creatives"], image: "images/Design.webp" },
  { title: "Web Development", items: ["Responsive Websites", "E-Commerce Portals", "Website Maintenance"], image: "images/Web.webp" }
];

const OurWork = () => {
  return (
    <div className="container">
      <h2 className="section-title">Comprehensive Digital Marketing Solutions</h2>
      <p className="section-subtitle">WHAT WE DO</p>
      <div className="work-grid">
        {services.map((service, index) => (
          <div className="work-card" key={index}>
            <div className="work-card-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="work-card-content">
              <h3>{service.title}</h3>
              <ul>
                {service.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;