import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

export default function ProjectCard({project}){

  return (
    <motion.article
      className="project-card-glass"
      layout
      whileTap={{ scale: 0.995 }}
    >
      <motion.div className="project-media" layout>
        <img src={project.image} alt={project.title} />
      </motion.div>

      <motion.div className="project-body" layout>
        <h3>{project.title}</h3>
        <p className="tech">{project.tech}</p>
        <div className="project-actions">
          <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={project.demo} target="_blank" rel="noreferrer">Ver demo</a>
        </div>
      </motion.div>
    </motion.article>
  );
}
