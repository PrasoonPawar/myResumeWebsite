import React from 'react';
import { portfolioData } from '@/data/portfolio';

export default function SkillsGrid() {
  const { categories } = portfolioData.skills;

  return (
    <section
      id="skills"
      className="section-padding bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700"
    >
      <div className="container-layout">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-azure-500 to-blue-600 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="card p-6 hover:shadow-lg transition-shadow animate-slideUp"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-flex items-center px-3 py-1.5 text-sm font-medium bg-azure-50 dark:bg-azure-900/30 text-azure-700 dark:text-azure-300 rounded-full border border-azure-200 dark:border-azure-800 hover:bg-azure-100 dark:hover:bg-azure-900/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
