'use client';

import React, { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  keyContributions: string[];
  technologies: string[];
}

export default function ProjectCard({
  title,
  startDate,
  endDate,
  description,
  keyContributions,
  technologies,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="card p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full text-left focus-ring p-0"
        >
          <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white hover:text-azure-600 dark:hover:text-azure-400 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            {startDate} – {endDate}
          </p>
          <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 3 && (
              <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                +{technologies.length - 3} more
              </span>
            )}
          </div>
          <div className="flex items-center text-azure-600 dark:text-azure-400 font-medium text-sm">
            View Details <ChevronDown className="w-4 h-4 ml-2" />
          </div>
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
            <div className="sticky top-0 flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {title}
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors focus-ring"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                  {startDate} – {endDate}
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  {description}
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3 text-slate-900 dark:text-white">
                  Key Contributions
                </h3>
                <ul className="space-y-2">
                  {keyContributions.map((contrib, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-slate-600 dark:text-slate-300"
                    >
                      <div className="w-2 h-2 bg-azure-500 rounded-full mt-2 flex-shrink-0" />
                      <span>{contrib}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3 text-slate-900 dark:text-white">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1.5 text-sm font-medium bg-azure-50 dark:bg-azure-900/30 text-azure-700 dark:text-azure-300 rounded-full border border-azure-200 dark:border-azure-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 flex gap-3 p-6 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 btn-primary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
