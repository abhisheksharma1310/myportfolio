import React from 'react';
import './portfolio.css';
import PortfolioItem from './PortfolioItem';
import myProjects from '../../data/project';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container portfolio__container'>
        {myProjects.map((project) => 
        <PortfolioItem title={project.title} imageUrl={project.imageUrl} githubLink={project.githubLink} demoLink={project.demoLink} />)}
      </div>
    </section>
  )
}

export default Portfolio