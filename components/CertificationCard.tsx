import React from 'react';
import { Award } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
}

export default function CertificationCard({
  title,
  issuer,
  date,
}: CertificationCardProps) {
  return (
    <div className="card p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-amber-50 dark:bg-amber-900/30 rounded-lg flex-shrink-0">
          <Award className="w-6 h-6 text-amber-600 dark:text-amber-400" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-slate-900 dark:text-white mb-1 break-words">
            {title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
            {issuer}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-500 font-medium">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
}
