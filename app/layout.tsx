import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import LayoutWrapper from '@/components/LayoutWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Prasoon Pawar | Senior Data Integration & Azure Developer',
  description:
    'Prasoon Pawar is a Senior Data Integration and Azure Developer specializing in cloud-native integrations, Azure Functions, API development, event-driven systems, Workday integrations, and DevOps automation.',
  keywords: [
    'Senior Data Integration Developer Calgary',
    'Azure Developer Calgary',
    'Cloud Integration Developer Canada',
    'Azure Functions Developer',
    'Workday Integration Developer',
    'API Developer Canada',
    'Microsoft Azure Integration Specialist',
  ],
  authors: [{ name: 'Prasoon Pawar' }],
  creator: 'Prasoon Pawar',
  openGraph: {
    title: 'Prasoon Pawar | Senior Data Integration & Azure Developer',
    description:
      'Prasoon Pawar is a Senior Data Integration and Azure Developer specializing in cloud-native integrations, Azure Functions, API development, event-driven systems, Workday integrations, and DevOps automation.',
    type: 'website',
    url: 'https://prasoonpawar.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prasoon Pawar | Senior Data Integration & Azure Developer',
    description:
      'Senior Data Integration and Azure Developer specializing in cloud-native integrations, Azure Functions, API development, and DevOps automation.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300`}>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
