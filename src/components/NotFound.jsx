import { CupSoda } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="grid min-h-svh place-items-center bg-bg px-6 text-center">
      <div>
        <CupSoda size={56} className="mx-auto text-orange dark:text-sun" aria-hidden />
        <h1 className="mt-4 font-display text-5xl font-extrabold">Page not found</h1>
        <p className="mx-auto mt-3 max-w-sm text-muted">That page has melted away. Head back to the homepage to find what you need.</p>
        <a href="/" className="btn btn-primary mt-8">Back to home</a>
      </div>
    </main>
  );
}
