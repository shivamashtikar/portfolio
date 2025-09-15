import React from 'react';
import Masonry from 'react-masonry-css';

// Placeholder project data
const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A brief description of the first project, highlighting the key technologies and challenges.',
    imageUrl: 'https://via.placeholder.com/400x300.png/2563eb/ffffff?text=Project+One',
    demoUrl: '#',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'This project was more complex and involved backend development and a database.',
    imageUrl: 'https://via.placeholder.com/400x450.png/2563eb/ffffff?text=Project+Two',
    demoUrl: '#',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A mobile-first application built with a modern frontend framework.',
    imageUrl: 'https://via.placeholder.com/400x350.png/2563eb/ffffff?text=Project+Three',
    demoUrl: '#',
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'A data visualization tool that helps users understand complex datasets.',
    imageUrl: 'https://via.placeholder.com/400x300.png/2563eb/ffffff?text=Project+Four',
    demoUrl: '#',
  },
];

const ProjectCard = ({ title, description, imageUrl, demoUrl }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-4">
    <img src={imageUrl} alt={title} className="w-full h-auto object-cover"/>
    <div className="p-6">
      <h4 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">{title}</h4>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      <a 
        href={demoUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Live Demo
      </a>
    </div>
  </div>
);

export default function Projects() {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <section id="projects" className="container mx-auto px-6 py-12">
      <h3 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">My Projects</h3>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </Masonry>
    </section>
  );
}
