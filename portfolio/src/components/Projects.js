import React from 'react';

const projectsData = [
  { 
    title: 'Modern E-commerce', 
    desc: 'A fully responsive e-commerce platform built with React and Node.js. Features include user authentication, product filtering, and cart functionality.', 
    img: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'] 
  },
  { 
    title: 'Portfolio Website', 
    desc: 'A clean and modern portfolio template designed for creatives. Features smooth animations and a responsive layout.', 
    img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1455&q=80',
    tech: ['HTML', 'CSS', 'JavaScript', 'GSAP'] 
  },
  { 
    title: 'Weather Dashboard', 
    desc: 'A sleek weather application that provides real-time weather data and forecasts for any location. Built with modern JavaScript.', 
    img: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80',
    tech: ['JavaScript', 'React', 'Weather API', 'CSS'] 
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <button className="project-btn">Live Demo</button>
                <button className="project-btn">Source Code</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;