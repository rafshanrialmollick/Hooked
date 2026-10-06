import { ArrowRight } from 'lucide-react';
import indoor from '../assets/indoor.webp';

export default function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-end overflow-hidden pt-16 text-white">
      {/* Background Image */}
      <img
        src={indoor}
        alt="Row of slushie machines filled with red, green, purple and orange slushies on a party table"
        fetchPriority="high"
        className="hero-img absolute inset-0 -z-20 h-full w-full object-cover"
      />

      {/* Cinematic Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0f0f1a]/95 via-[#1a1a2e]/55 to-[#1a1a2e]/15 md:bg-gradient-to-r md:from-[#0f0f1a]/90 md:via-[#1a1a2e]/50 md:to-transparent" />

      {/* Grain texture */}
      <div className="grain absolute inset-0 -z-5 pointer-events-none" />

      {/* Content */}
      <div className="mx-auto w-full max-w-6xl px-6 pb-20 pt-32 sm:px-8 md:pb-28">
        {/* Overline */}
        <div className="font-accent text-[11px] font-medium uppercase tracking-[0.25em] text-accent">
          <span className="inline-block border-b border-accent/40 pb-1">
            Northern Territory's Premier Slushie Hire
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-6 max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Slushies made{' '}
          <em className="italic font-medium text-accent">effortless</em>,{' '}
          anywhere in the NT
        </h1>

        {/* Decorative line */}
        <div className="mt-6 shimmer-line w-24" />

        {/* Subtitle */}
        <p className="mt-6 max-w-lg text-base text-white/75 font-sans leading-relaxed sm:text-lg">
          Premium slushie machine hire for overnight events and long-term commercial use. Local expertise, delivered to your door.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a href="#contact" className="group btn btn-primary">
            <span>Get a Free Quote</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a href="#gallery" className="btn btn-ghost">
            View Gallery
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 hidden md:flex items-center gap-3 text-white/40 font-accent text-[11px] uppercase tracking-[0.2em]">
          <span className="block h-8 w-px bg-gradient-to-b from-accent/60 to-transparent" />
          Scroll to explore
        </div>
      </div>
    </section>
  );
}
