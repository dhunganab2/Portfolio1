import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image-container">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" 
              alt="Profile" 
              className="profile-image" 
            />
          </div>
          <div className="about-text">
            <h3 className="about-subtitle">Frontend Developer & UI/UX Enthusiast</h3>
            <p>
              I'm a passionate Frontend Developer with expertise in creating responsive, user-friendly websites 
              using modern technologies like React, JavaScript, HTML, and CSS.
            </p>
            <p>
              With a strong background in user interface design and user experience principles, I create 
              websites that not only look beautiful but also function seamlessly across all devices.
            </p>
            <div className="skills-container">
              <h4>Technical Skills</h4>
              <div className="skills-list">
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Responsive Design</span>
                <span className="skill-tag">Git</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;