import { ChevronDown } from 'lucide-react';
import Reveal from './Reveal';
import { FAQS } from '../data/content';

export default function FAQ() {
  return (
    <section id="faq" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <span className="font-accent text-xs font-bold uppercase tracking-widest text-orange dark:text-sun bg-orange/10 dark:bg-sun/10 px-3.5 py-1.5 rounded-full border border-orange/20 dark:border-sun/20">
            Got Questions?
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Questions we get asked
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-line border-y border-line">
          {FAQS.map(([q, a]) => (
            <details
              key={q}
              className="group py-5 transition-colors duration-200"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold text-ink transition-colors duration-200 group-hover:text-orange dark:group-hover:text-sun focus-visible:outline-2 focus-visible:outline-orange [&::-webkit-details-marker]:hidden">
                <span>{q}</span>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-bg border border-line transition-transform duration-300 group-open:rotate-180 group-open:bg-orange group-open:text-white group-open:border-orange">
                  <ChevronDown className="shrink-0" size={18} aria-hidden />
                </span>
              </summary>
              <p className="mt-3.5 text-muted font-sans leading-relaxed transition-all duration-300">
                {a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
