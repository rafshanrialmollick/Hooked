import { CupSoda } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="grid min-h-svh place-items-center bg-bg px-6 text-center">
      <div>
        <span className="font-display text-8xl font-bold text-accent/20">404</span>
        <div className="mt-4 flex items-center justify-center gap-3">
          <CupSoda size={24} className="text-accent" aria-hidden />
          <h1 className="font-display text-3xl font-bold text-ink">Page not found</h1>
        </div>
        <div className="section-divider mx-auto mt-4" />
        <p className="mx-auto mt-5 max-w-sm text-muted font-sans leading-relaxed">
          That page has melted away. Head back to the homepage to find what you need.
        </p>
        <a href="/" className="btn btn-primary mt-8">Back to Home</a>
      </div>
    </main>
  );
}
