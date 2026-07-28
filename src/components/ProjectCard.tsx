import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ProjectData } from '../types';

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl max-w-md mx-auto w-full h-full flex flex-col">
      <div className="relative group">
        <div className="aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
          <a
            href={project.link}
            target="_blank"
            className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition-all duration-300 transform translate-y-8 group-hover:translate-y-0 flex items-center gap-2"
            aria-label={`View ${project.title} project source`}
          >
            <Github size={18} />
            <span>View Source Code</span>
          </a>
        </div>
      </div>
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">{project.title}</h3>
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 leading-relaxed flex-1">{project.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-blue-600 dark:text-blue-400 font-medium capitalize">
            {project.category === 'web' ? 'Web Development' :
             project.category === 'app' ? 'App Design' : 'UI/UX Design'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProjectCard);