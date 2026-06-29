'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { portfolioData } from '@/data/portfolio';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white dark:bg-slate-900 shadow-md'
          : 'bg-white dark:bg-slate-900'
      }`}
    >
      <div className="container-layout">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center gap-2 font-bold text-xl text-slate-900 dark:text-white hover:text-azure-600 dark:hover:text-azure-400 transition-colors"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-azure-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              PP
            </div>
            <span className="hidden sm:inline">Prasoon Pawar</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-azure-600 dark:hover:text-azure-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus-ring"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              ) : (
                <Sun className="w-5 h-5 text-slate-400" />
              )}
            </button>

            {/* Download Resume Button */}
            <a
              href={portfolioData.personal.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden sm:inline-flex text-sm"
            >
              Resume
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus-ring"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-700 py-4 animate-slideDown">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-azure-600 dark:hover:text-azure-400 transition-colors rounded"
                  onClick={handleNavClick}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={portfolioData.personal.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium text-white bg-azure-600 hover:bg-azure-700 rounded transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
