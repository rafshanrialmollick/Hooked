import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import { SERVICES } from '../data/content';
import outdoor from '../assets/outdoor.webp';
import bluepurple from '../assets/bluepurple.webp';

const IMG = { outdoor, bluepurple };

export default function Services() {
  return (
    <section id="services" className="relative grain mx-auto max-w-6xl px-6 py-24 sm:px-8 md:py-32">
      <Reveal className="max-w-2xl">
        <span className="section-tag">Services</span>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Hire for one night{' '}
          <em className="italic font-normal text-accent">or the whole season</em>
        </h2>
        <div className="section-divider" />
        <p className="mt-5 text-base text-muted font-sans leading-relaxed max-w-lg">
          Pick the hire that fits. Both come from a local team that knows the Territory inside and out.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-8 md:grid-cols-5">
        {SERVICES.map((s, i) => (
          <Reveal
            key={s.id}
            className={`hover-lift group overflow-hidden border border-line bg-surface transition-all duration-400 ${
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
            </div>

            <div className="p-7 sm:p-9">
              <h3 className="font-display text-2xl font-bold text-ink transition-colors duration-200 group-hover:text-accent">
                {s.title}
              </h3>
              <p className="mt-3 text-muted font-sans leading-relaxed">
                {s.text}
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 font-accent text-xs font-medium uppercase tracking-[0.15em] text-accent hover:text-coral transition-colors duration-300"
              >
                <span>Enquire now</span>
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
