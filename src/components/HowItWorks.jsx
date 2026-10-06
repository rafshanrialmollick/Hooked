import Reveal from './Reveal';
import { STEPS } from '../data/content';

export default function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <Reveal>
        <span className="font-accent text-xs font-bold uppercase tracking-widest text-orange dark:text-sun bg-orange/10 dark:bg-sun/10 px-3.5 py-1.5 rounded-full border border-orange/20 dark:border-sun/20">
          Simple 3-Step Process
        </span>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          How hiring works
        </h2>
      </Reveal>

      <ol className="mt-12 grid gap-6 md:grid-cols-3">
        {STEPS.map((s, i) => (
          <Reveal
            as="li"
            key={s.title}
            className="hover-lift group list-none rounded-3xl border border-line bg-surface p-7 transition-all duration-300"
          >
            <span className="font-accent grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-orange to-raspberry text-lg font-bold text-white shadow-md shadow-orange/25 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              0{i + 1}
            </span>
            <h3 className="mt-6 font-display text-xl font-bold text-ink transition-colors duration-200 group-hover:text-orange dark:group-hover:text-sun">
              {s.title}
            </h3>
            <p className="mt-2 text-muted font-sans leading-relaxed">
              {s.text}
            </p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
