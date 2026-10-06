import Reveal from './Reveal';
import indoor from '../assets/indoor.webp';
import outdoor from '../assets/outdoor.webp';
import bluepurple from '../assets/bluepurple.webp';

const SHOTS = [
  { src: indoor, alt: 'Five slushie and drink machines lined up on a white-clothed table indoors', cap: 'Indoor party line-up', cls: 'sm:col-span-2 sm:row-span-2' },
  { src: outdoor, alt: 'Three Hooked On Slushies machines on a table outside', cap: 'Outdoor daytime event', cls: '' },
  { src: bluepurple, alt: 'Twin-bowl machine with blue and purple slushies', cap: 'Twin bowls, two flavours', cls: '' },
];

export default function Machines() {
  return (
    <section id="machines" className="relative grain bg-surface-alt py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="section-tag">Equipment</span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Our machines at{' '}
            <em className="italic font-normal text-accent">real events</em>
          </h2>
          <div className="section-divider" />
          <p className="mt-5 text-base text-muted font-sans leading-relaxed">
            Single, twin and triple-bowl machines in bright flavours, wrapped in our sunset palm design.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-3 sm:grid-rows-2">
          {SHOTS.map((s) => (
            <Reveal
              key={s.cap}
              as="figure"
              className={`hover-lift group relative m-0 overflow-hidden border border-line ${s.cls}`}
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                decoding="async"
                className="hover-zoom-img h-72 w-full object-cover sm:h-full sm:min-h-72"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-6 pt-20 transition-opacity duration-300">
                <span className="font-accent text-xs font-medium uppercase tracking-[0.15em] text-white/90 transition-transform duration-300 group-hover:translate-x-1 inline-block">
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
