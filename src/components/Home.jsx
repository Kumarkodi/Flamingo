import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-background">
        <img src="images/home.png" alt="Modern office with a flamingo" />
        <div className="overlay"></div>
      </div>
    </div>
  );
};

export default Home;