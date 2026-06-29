import React from 'react';
import CertificationCard from './CertificationCard';
import { portfolioData } from '@/data/portfolio';

export default function Certifications() {
  const certifications = portfolioData.certifications;

  return (
    <section
      id="certifications"
      className="section-padding bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800"
    >
      <div className="container-layout">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Certifications
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-azure-500 to-blue-600 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="animate-slideUp"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <CertificationCard
                title={cert.title}
                issuer={cert.issuer}
                date={cert.date}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
