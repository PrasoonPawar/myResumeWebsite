import React from 'react';
import { Download } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function ResumeCTA() {
  const { heading, description } = portfolioData.resumeCTA;
  const { resumePath } = portfolioData.personal;

  return (
    <section className="section-padding bg-gradient-to-br from-azure-600 to-blue-700 text-white">
      <div className="container-layout">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">{heading}</h2>
          <p className="text-lg mb-8 text-azure-100">{description}</p>
          <a
            href={resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-azure-600 font-bold rounded-lg hover:bg-slate-100 transition-colors shadow-lg hover:shadow-xl"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
