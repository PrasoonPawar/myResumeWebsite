import React from 'react';
import { portfolioData } from '@/data/portfolio';

export default function About() {
  const { summary, stats } = portfolioData.about;

  return (
    <section
      id="about"
      className="section-padding bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800"
    >
      <div className="container-layout">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-azure-500 to-blue-600 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Summary */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {summary.split('\n\n').map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
                >
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="card p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
