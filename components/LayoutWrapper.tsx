'use client';

import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import Navbar from './Navbar';
import Footer from './Footer';

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  );
}
