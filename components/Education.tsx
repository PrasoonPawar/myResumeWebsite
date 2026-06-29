import React from 'react';
import { BookOpen } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function Education() {
  const education = portfolioData.education;

  return (
    <section
      id="education"
      className="section-padding bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700"
    >
      <div className="container-layout">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Education
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-azure-500 to-blue-600 rounded-full" />
        </div>

        <div className="space-y-6 max-w-3xl">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className="card p-6 hover:shadow-lg transition-shadow flex gap-4 animate-slideUp"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="p-3 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg h-fit flex-shrink-0">
                <BookOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {edu.degree}
                </h3>
                <p className="font-semibold gradient-text mb-1">
                  {edu.institution}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {edu.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
