import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import { SERVICES } from '../data/content';
import outdoor from '../assets/outdoor.webp';
import bluepurple from '../assets/bluepurple.webp';

const IMG = { outdoor, bluepurple };

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <Reveal className="max-w-2xl">
        <span className="font-accent text-xs font-bold uppercase tracking-widest text-orange dark:text-sun bg-orange/10 dark:bg-sun/10 px-3.5 py-1.5 rounded-full border border-orange/20 dark:border-sun/20">
          Flexible Hire Packages
        </span>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Hire for one night or the whole season
        </h2>
        <p className="mt-4 text-lg text-muted font-sans">
          Pick the hire that fits. Both come from a local team that knows the NT.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-5">
        {SERVICES.map((s, i) => (
          <Reveal
            key={s.id}
            className={`hover-lift group overflow-hidden rounded-3xl border border-line bg-surface transition-all duration-300 ${
              i === 0 ? 'md:col-span-3' : 'md:col-span-2'
            }`}
          >
            <div className="overflow-hidden relative">
              <img
                src={IMG[s.image]}
                alt={s.alt}
                loading="lazy"
                decoding="async"
                className={`hover-zoom-img w-full object-cover ${
                  i === 0 ? 'h-64 sm:h-80' : 'h-64 sm:h-80 object-top'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            
            <div className="p-6 sm:p-8">
              <h3 className="font-display text-2xl font-bold text-ink transition-colors duration-200 group-hover:text-orange dark:group-hover:text-sun">
                {s.title}
              </h3>
              <p className="mt-2 text-muted font-sans leading-relaxed">
                {s.text}
              </p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-2 font-accent text-sm font-bold text-orange hover:text-raspberry dark:text-sun transition-colors duration-200"
              >
                <span>Ask about {s.title.toLowerCase()}</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
