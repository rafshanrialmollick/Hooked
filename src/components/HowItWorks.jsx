import Reveal from './Reveal';
import { STEPS } from '../data/content';

export default function HowItWorks() {
  return (
    <section id="how" className="relative grain mx-auto max-w-6xl px-6 py-24 sm:px-8 md:py-32">
      <Reveal className="text-center max-w-2xl mx-auto">
        <span className="section-tag">Process</span>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          How hiring{' '}
          <em className="italic font-normal text-accent">works</em>
        </h2>
        <div className="section-divider mx-auto" />
      </Reveal>

      <ol className="mt-16 grid gap-8 md:grid-cols-3">
        {STEPS.map((s, i) => (
          <Reveal
            as="li"
            key={s.title}
            className="hover-lift group list-none border border-line bg-surface p-8 transition-all duration-400 relative"
          >
            {/* Step Number */}
            <span className="font-display text-5xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors duration-400 absolute top-6 right-6 leading-none">
              {String(i + 1).padStart(2, '0')}
            </span>

            {/* Accent line */}
            <div className="w-8 h-px bg-accent mb-6" />

            <h3 className="font-display text-xl font-bold text-ink transition-colors duration-200 group-hover:text-accent">
              {s.title}
            </h3>
            <p className="mt-3 text-muted font-sans leading-relaxed">
              {s.text}
            </p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
