import Reveal from './Reveal';
import indoor from '../assets/indoor.webp';
import outdoor from '../assets/outdoor.webp';
import bluepurple from '../assets/bluepurple.webp';

const SHOTS = [
  { src: indoor, alt: 'Five slushie and drink machines lined up on a white-clothed table indoors', cap: 'A full line-up for an indoor party', cls: 'sm:col-span-2 sm:row-span-2' },
  { src: outdoor, alt: 'Three Hooked On Slushies machines on a table outside', cap: 'Set up outdoors for a daytime event', cls: '' },
  { src: bluepurple, alt: 'Twin-bowl machine with blue and purple slushies', cap: 'Twin bowls, two flavours at once', cls: '' },
];

export default function Machines() {
  return (
    <section id="machines" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="font-accent text-xs font-bold uppercase tracking-widest text-orange dark:text-sun bg-orange/10 dark:bg-sun/10 px-3.5 py-1.5 rounded-full border border-orange/20 dark:border-sun/20">
            Premium Equipment
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Our machines at real events
          </h2>
          <p className="mt-4 text-lg text-muted font-sans">
            Single, twin and triple-bowl machines in bright flavours, wrapped in our sunset palm design.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-3 sm:grid-rows-2">
          {SHOTS.map((s) => (
            <Reveal
              key={s.cap}
              as="figure"
              className={`hover-lift group relative m-0 overflow-hidden rounded-3xl border border-line ${s.cls}`}
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                decoding="async"
                className="hover-zoom-img h-72 w-full object-cover sm:h-full sm:min-h-72"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6 pt-16 font-accent font-semibold text-white transition-opacity duration-300">
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  {s.cap}
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
