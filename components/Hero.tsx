import React from 'react';
import Link from 'next/link';
import { ArrowRight, Cloud } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function Hero() {
  const { headline, subheadline, highlights } = portfolioData.hero;

  return (
    <section id="home" className="section-padding bg-gradient-to-b from-slate-50 dark:from-slate-800 to-white dark:to-slate-900">
      <div className="container-layout">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slideUp">
            <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 bg-azure-50 dark:bg-azure-900/30 text-azure-700 dark:text-azure-300 rounded-full text-sm font-medium">
              <Cloud className="w-4 h-4" />
              Azure-Powered Solutions
            </div>

            <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 dark:text-white">
              {headline}
            </h1>

            <p className="mb-8 text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
              {subheadline}
            </p>

            {/* Highlights */}
            <div className="mb-10 grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  <div className="w-2 h-2 bg-azure-500 rounded-full" />
                  {highlight}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="#projects" className="btn-primary gap-2">
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={portfolioData.personal.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Download Resume
              </a>
              <Link href="#contact" className="btn-outline">
                Contact Me
              </Link>
            </div>
          </div>

          {/* Visual Concept */}
          <div className="hidden lg:flex items-center justify-center animate-fadeIn">
            <div className="relative w-full h-96">
              {/* Background Gradient Blob */}
              <div className="absolute inset-0 bg-gradient-to-br from-azure-400/20 to-blue-600/20 rounded-3xl blur-3xl" />

              {/* Grid Pattern */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <svg
                  className="w-full h-full opacity-10 dark:opacity-5"
                  viewBox="0 0 400 400"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <pattern
                      id="grid"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Cloud/API Architecture Concept */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  {/* Central Core */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-azure-500 to-blue-600 rounded-lg shadow-lg flex items-center justify-center">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>

                  {/* Orbiting Elements */}
                  {[0, 90, 180, 270].map((angle, idx) => {
                    const rad = (angle * Math.PI) / 180;
                    const x = Math.cos(rad) * 80;
                    const y = Math.sin(rad) * 80;
                    return (
                      <div
                        key={idx}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        style={{
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        }}
                      >
                        <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center border-2 border-azure-400 dark:border-azure-500">
                          <div className="w-2 h-2 bg-azure-500 rounded-full" />
                        </div>
                      </div>
                    );
                  })}

                  {/* Connection Lines */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 256 256"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    {[0, 90, 180, 270].map((angle) => {
                      const rad = (angle * Math.PI) / 180;
                      const x = Math.cos(rad) * 80 + 128;
                      const y = Math.sin(rad) * 80 + 128;
                      return (
                        <line
                          key={angle}
                          x1="128"
                          y1="128"
                          x2={x}
                          y2={y}
                          stroke="currentColor"
                          strokeWidth="1"
                          className="text-azure-300 dark:text-azure-600 opacity-40"
                        />
                      );
                    })}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
