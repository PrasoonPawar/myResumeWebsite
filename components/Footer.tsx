'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Linkedin, Download } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function Footer() {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white border-t border-slate-800">
      <div className="container-layout section-padding">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-azure-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-sm">
                PP
              </div>
              <span className="font-bold text-lg">Prasoon Pawar</span>
            </div>
            <p className="text-slate-400 text-sm">
              Senior Data Integration & Azure Developer
              <br />
              Calgary, Alberta, Canada
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#about"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <div className="space-y-3 text-sm">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href={personal.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>
              © {currentYear} Prasoon Pawar. All rights reserved.
            </p>
            <p>
              Designed & Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
