import { ArrowRight, Sparkles } from 'lucide-react';
import indoor from '../assets/indoor.webp';

export default function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[92svh] items-end overflow-hidden pt-16 text-white">
      <img
        src={indoor}
        alt="Row of slushie machines filled with red, green, purple and orange slushies on a party table"
        fetchPriority="high"
        className="hero-img absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#2b0f06]/95 via-[#2b0f06]/60 to-[#2b0f06]/20 md:bg-gradient-to-r md:from-[#2b0f06]/90 md:via-[#2b0f06]/50 md:to-transparent" />
      
      <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-28 sm:px-8 md:pb-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold font-accent uppercase tracking-wider text-sun backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-sun/40">
          <Sparkles size={14} className="animate-pulse text-sun" />
          <span>#1 Slushie Hire in Northern Territory</span>
        </div>

        {/* Heading */}
        <h1 className="mt-5 max-w-3xl font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl drop-shadow-md">
          Slushies made easy, anywhere in the NT
        </h1>

        {/* Subtitle */}
        <p className="mt-5 max-w-xl text-lg text-white/90 sm:text-xl font-sans leading-relaxed">
          Slushie machine hire for overnight events and long-term commercial use, from a local Northern Territory business.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a href="#contact" className="group btn btn-primary">
            <span>Get a free quote</span>
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a href="#gallery" className="btn btn-ghost">
            Explore Gallery
          </a>
        </div>
      </div>
    </section>
  );
}
