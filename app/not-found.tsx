'use client';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">404</h1>
        <p className="text-slate-600 dark:text-slate-300 mb-6">Page not found</p>
        <a href="/" className="inline-block px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600">
          Go back home
        </a>
      </div>
    </div>
  );
}
