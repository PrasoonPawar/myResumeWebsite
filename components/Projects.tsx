import React from 'react';
import ProjectCard from './ProjectCard';
import { portfolioData } from '@/data/portfolio';

export default function Projects() {
  const projects = portfolioData.projects;

  return (
    <section
      id="projects"
      className="section-padding bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700"
    >
      <div className="container-layout">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-azure-500 to-blue-600 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-slideUp"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <ProjectCard
                title={project.title}
                startDate={project.startDate}
                endDate={project.endDate}
                description={project.description}
                keyContributions={project.keyContributions}
                technologies={project.technologies}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
