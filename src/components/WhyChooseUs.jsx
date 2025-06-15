import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    return (
        <div className="container">
            <div className="why-us-grid">
                <div className="why-us-intro">
                    <p className="section-subtitle">WHY CHOOSE US</p>
                    <h2>Your Growth, Our Mission</h2>
                    <p>In today's digital age, a strong online presence is no longer a luxury, it's a necessity. But with so many marketing agencies out there, how do you choose the right partner to elevate your brand and drive real results? Here's what sets us apart:</p>
                </div>
                <div className="why-us-card">
                    <h3>Data-Obsessed & Results-Driven</h3>
                    <ul>
                        <li>Leverage data analytics for strategic campaigns with measurable ROI.</li>
                        <li>Translate data into actionable insights for growth-oriented decisions.</li>
                        <li>Provide transparent reporting with regular updates to optimize campaigns.</li>
                    </ul>
                </div>
                <div className="why-us-card">
                    <h3>Strategic Storytelling & Creative Power</h3>
                    <ul>
                        <li>Craft compelling narratives to capture attention and build brand loyalty.</li>
                        <li>Develop eye-catching visuals and engaging copy to drive action.</li>
                        <li>Ensure consistent messaging across all channels to strengthen brand identity.</li>
                    </ul>
                </div>
                <div className="why-us-card">
                    <h3>A Collaborative Partnership</h3>
                    <ul>
                        <li>Become an extension of your team, understanding your goals and challenges.</li>
                        <li>Prioritize open communication to foster collaboration.</li>
                        <li>Provide a dedicated team of experts passionate about your success.</li>
                    </ul>
                </div>
                <div className="why-us-card">
                    <h3>Scalable Solutions & Future-Proof Stragtegies</h3>
                    <ul>
                        <li>Implement flexible solutions that grow with your business.</li>
                        <li>Utilize the latest technologies to stay ahead of the curve.</li>
                        <li>Continuously optimize strategies based on industry trends and insights.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;