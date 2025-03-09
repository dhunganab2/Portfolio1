import React from 'react';

const Homepage = () => {
  return (
    <header id="home" className="homepage">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="highlight">Hello, I'm</span> 
            <br />
            <span className="name">Bijay Dhungana</span>
          </h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <p className="hero-description">
            I build beautiful, responsive websites with modern technologies
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-background"></div>
        </div>
      </div>
    </header>
  );
};

export default Homepage;