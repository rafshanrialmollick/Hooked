import { Phone, MapPin } from 'lucide-react';
import { BUSINESS, NAV } from '../data/content';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface-alt">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:px-8 md:grid-cols-3">
        {/* Brand */}
        <div>
          <a href="#top" className="font-display text-xl font-bold text-ink transition-colors duration-200 hover:text-accent">
            {BUSINESS.name}
          </a>
          <p className="mt-3 max-w-xs text-sm text-muted font-sans leading-relaxed">
            Premium slushie machine hire across the Northern Territory.
          </p>
          <div className="mt-4 shimmer-line w-16" />
        </div>

        {/* Nav Links */}
        <nav aria-label="Footer" className="grid grid-cols-2 gap-3">
          {NAV.map(([l, h]) => (
            <a
              key={h}
              href={h}
              className="font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-muted transition-colors duration-200 hover:text-accent"
            >
              {l}
            </a>
          ))}
        </nav>

        {/* Contact */}
        <ul className="space-y-4 text-sm font-sans text-muted">
          <li className="flex gap-3 items-center">
            <Phone size={15} className="shrink-0 text-accent" aria-hidden />
            <a href={BUSINESS.phoneHref} className="hover:text-ink font-medium transition-colors">
              {BUSINESS.phone}
            </a>
          </li>
          <li className="flex gap-3 items-start">
            <MapPin size={15} className="mt-0.5 shrink-0 text-accent" aria-hidden />
            <a href={BUSINESS.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">
              {BUSINESS.address}
            </a>
          </li>
        </ul>
      </div>

      {/* Copyright */}
      <div className="border-t border-line/50 py-6 text-center">
        <p className="font-accent text-[11px] font-medium uppercase tracking-[0.15em] text-muted/60">
          &copy; {new Date().getFullYear()} {BUSINESS.name}
        </p>
      </div>
    </footer>
  );
}
