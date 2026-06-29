'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function ExperienceTimeline() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const experience = portfolioData.experience;

  return (
    <section
      id="experience"
      className="section-padding bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800"
    >
      <div className="container-layout">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Professional Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-azure-500 to-blue-600 rounded-full" />
        </div>

        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className="animate-slideUp"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <button
                onClick={() =>
                  setExpandedId(expandedId === exp.id ? null : exp.id)
                }
                className="w-full card p-6 hover:shadow-lg transition-shadow focus-ring text-left"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-lg font-semibold gradient-text mb-2">
                      {exp.company}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      {exp.location} • {exp.startDate} - {exp.endDate}
                    </p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-600 dark:text-slate-400 transition-transform flex-shrink-0 ${
                      expandedId === exp.id ? 'transform rotate-180' : ''
                    }`}
                  />
                </div>

                {expandedId === exp.id && (
                  <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700 space-y-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex gap-3">
                        <div className="w-2 h-2 bg-azure-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-slate-600 dark:text-slate-300">
                          {resp}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
