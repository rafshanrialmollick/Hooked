import { ChevronDown } from 'lucide-react';
import Reveal from './Reveal';
import { FAQS } from '../data/content';

export default function FAQ() {
  return (
    <section id="faq" className="relative grain bg-surface-alt py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <Reveal className="text-center">
          <span className="section-tag">FAQ</span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Questions we{' '}
            <em className="italic font-normal text-accent">get asked</em>
          </h2>
          <div className="section-divider mx-auto" />
        </Reveal>

        <div className="mt-14 divide-y divide-line/60 border-y border-line/60">
          {FAQS.map(([q, a]) => (
            <details
              key={q}
              className="group py-6 transition-colors duration-200"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-ink transition-colors duration-200 group-hover:text-accent focus-visible:outline-2 focus-visible:outline-accent [&::-webkit-details-marker]:hidden">
                <span>{q}</span>
                <span className="grid h-8 w-8 shrink-0 place-items-center border border-line transition-all duration-300 group-open:rotate-180 group-open:bg-accent group-open:text-deep group-open:border-accent">
                  <ChevronDown size={16} aria-hidden />
                </span>
              </summary>
              <p className="mt-4 text-muted font-sans leading-relaxed pl-0">
                {a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
