import React from 'react';
import './Showcase.css';

const showcaseItems = [
    { title: "Travel & Lifestyle", image: "images/Travel.webp", color: "#e5a934" },
    { title: "Real Estate", image: "images/Real-estate.webp", color: "#e84393" },
    { title: "Health & Wellness", image: "images/Health.webp", color: "#00b894" },
    { title: "BPO", image: "images/BPO.webp", color: "#f0932b" },
    { title: "HR", image: "images/HR.webp", color: "#e5a9fc" },
    { title: "Food", image: "images/Food.webp", color: "#e84354" },
    { title: "Sports", image: "images/Sports.webp", color: "#00b890" },
    { title: "Chemical", image: "images/Chemicals.webp", color: "#08468F" },
    
];

const Showcase = () => {
    return (
        <div className="container">
            <h2 className="section-title">Showcase</h2>
            <div className="showcase-grid">
                {showcaseItems.map((item, index) => (
                    <div className="showcase-item" key={index} style={{ '--border-color': item.color }}>
                        <img src={item.image} alt={item.title} />
                        <div className="showcase-overlay"></div>
                        <p className="showcase-title">{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Showcase;