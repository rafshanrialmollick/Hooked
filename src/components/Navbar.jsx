import { useState } from 'react';
import { Menu, X, Sun, Moon, Phone, CupSoda } from 'lucide-react';
import { BUSINESS, NAV } from '../data/content';

export default function Navbar({ dark, onToggle }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/50 bg-bg/80 backdrop-blur-xl transition-colors duration-400">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6 sm:px-8">
        {/* Logo */}
        <a href="#top" onClick={close} className="group flex items-center gap-3 transition-all duration-300">
          <span className="grid h-9 w-9 place-items-center rounded-sm border border-accent/30 bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-deep group-hover:border-accent">
            <CupSoda size={18} aria-hidden />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-ink transition-colors duration-200 group-hover:text-accent">
            Hooked On Slushies
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {NAV.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="font-sans text-[13px] font-medium uppercase tracking-[0.12em] text-muted transition-colors duration-300 hover:text-ink"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggle}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="grid h-10 w-10 place-items-center rounded-sm border border-line text-muted transition-all duration-300 hover:border-accent hover:text-accent active:scale-95 focus-visible:outline-2 focus-visible:outline-accent"
          >
            {dark ? <Sun size={16} className="text-accent" /> : <Moon size={16} />}
          </button>

          <a href="#contact" className="btn btn-primary hidden !py-2.5 !px-5 text-xs sm:inline-flex">
            Book Now
          </a>

          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-10 w-10 place-items-center rounded-sm border border-line text-ink md:hidden transition-all duration-200 hover:border-accent focus-visible:outline-2 focus-visible:outline-accent"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="animate-fadeIn border-t border-line/50 bg-bg/95 backdrop-blur-xl px-6 pb-8 pt-4 md:hidden">
          {NAV.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={close}
              className="block border-b border-line/40 py-4 font-sans text-[13px] font-medium uppercase tracking-[0.12em] text-ink hover:text-accent transition-colors duration-200"
            >
              {label}
            </a>
          ))}
          <div className="mt-6 flex flex-col gap-3">
            <a href="#contact" onClick={close} className="btn btn-primary text-center">
              Book Now
            </a>
            <a href={BUSINESS.phoneHref} className="btn border border-line text-ink hover:border-accent hover:text-accent transition-all">
              <Phone size={16} /> {BUSINESS.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
