import { Phone, MapPin } from 'lucide-react';
import { BUSINESS, NAV } from '../data/content';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-3">
        <div>
          <a href="#top" className="font-display text-xl font-bold text-ink transition-colors duration-200 hover:text-orange dark:hover:text-sun">
            {BUSINESS.name}
          </a>
          <p className="mt-2 max-w-xs text-muted font-sans leading-relaxed">
            Slushie machine hire across the Northern Territory.
          </p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-2 text-muted font-accent text-sm font-semibold">
          {NAV.map(([l, h]) => (
            <a key={h} href={h} className="transition-colors duration-200 hover:text-orange dark:hover:text-sun hover:translate-x-0.5">
              {l}
            </a>
          ))}
        </nav>
        <ul className="space-y-3 text-muted font-sans text-sm">
          <li className="flex gap-2.5 items-center">
            <Phone size={18} className="shrink-0 text-orange dark:text-sun" aria-hidden />
            <a href={BUSINESS.phoneHref} className="hover:text-ink font-semibold transition-colors">
              {BUSINESS.phone}
            </a>
          </li>
          <li className="flex gap-2.5 items-start">
            <MapPin size={18} className="mt-0.5 shrink-0 text-orange dark:text-sun" aria-hidden />
            <a href={BUSINESS.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">
              {BUSINESS.address}
            </a>
          </li>
        </ul>
      </div>
      <p className="border-t border-line py-5 text-center text-xs font-accent text-muted">
        © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
      </p>
    </footer>
  );
}
