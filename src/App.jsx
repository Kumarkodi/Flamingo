import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import OurWork from './components/OurWork';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import Showcase from './components/Showcase';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <section id="our-work"><OurWork /></section>
        <section id="about-us"><AboutUs /></section>
        <section id="why-us"><WhyChooseUs /></section>
        <section id="showcase"><Showcase /></section>
        <section id="contact-us"><ContactUs /></section>
      </main>
      <Footer />
    </>
  );
}

export default App;