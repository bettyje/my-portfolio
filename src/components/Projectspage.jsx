// src/pages/Projects.js
import React from 'react'
import './Projects.css'

const projects = [
  {
    name: 'Journal App Frontend',
    description:
      'Frontend of a Journal  app with user-friendly UI and real-time data.',
    technologies: ['React', 'Tailwind CSS', 'Auth0'],
    github: 'https://github.com/bettyje/my-new-app',
    liveDemo: 'https://bettyjournal.netlify.app/',
  },
  {
    name: 'Journal App Backend',
    description: 'Backend for a Journal app, providing APIs for Journal data.',
    technologies: ['Flask', 'SQLAlchemy', 'JWT Authentication'],
    github: 'https://github.com/bettyje/Journal_Webb_App',
    liveDemo: 'https://journal-webb-app.onrender.com',
  },
  {
    name: 'Battleship',
    description:
      'A browser-based Battleship game documentation with interactive gameplay.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/bettyje/Battleship',
    liveDemo: 'https://battleshiptp.netlify.app/',
  },
  {
    name: 'Todo List Simple JS Project',
    description:
      'A simple To-Do List application with task management features.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/ARVLEMED/Todo-List-Simple-JS-Project',
    liveDemo: 'https://arvlemed.github.io/Todo-List-Simple-JS-Project/',
  },
  {
    name: 'Itothya Website Project',
    description:
      'A static website designed for Itothya Agency with contacts and about.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/bettyje/Itothya-Website',
    liveDemo: 'https://itothya.netlify.app/',
  },
  
  {
    name: 'Beauty Shop ',
    description: 'An E-Commerce Platform for Cosmetic Products.',
    technologies: ['Flask', 'jinja2'],
    github: 'https://github.com/bravvjr/beauty_shop_ecomm_website',
    liveDemo: 'https://beauty-shop-ecomm-website.onrender.com/',
  },
  

]

const Projects = () => {
  return (
    <div className='projects'>
      <h1>My Projects</h1>
      <div className='projects-list'>
        {projects.map((project, index) => (
          <div key={index} className='project-card'>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Technologies:</strong> {project.technologies.join(', ')}
            </p>
            <div className='project-links'>
              <a
                href={project.github}
                target='_blank'
                rel='noopener noreferrer'
                className='github-link'
              >
                🔗 GitHub Repository
              </a>
              <a
                href={project.liveDemo}
                target='_blank'
                rel='noopener noreferrer'
                className='demo-link'
              >
                🚀 Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
