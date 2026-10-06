import { useState } from 'react';
import { Menu, X, Sun, Moon, Phone, CupSoda } from 'lucide-react';
import { BUSINESS, NAV } from '../data/content';

export default function Navbar({ dark, onToggle }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" onClick={close} className="group flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-ink transition-all duration-300">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-orange to-raspberry text-white shadow-md shadow-orange/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
            <CupSoda size={20} aria-hidden />
          </span>
          <span className="group-hover:text-orange dark:group-hover:text-sun transition-colors duration-200">
            Hooked On Slushies NT
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-semibold font-accent md:flex" aria-label="Main">
          {NAV.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="relative text-muted transition-colors duration-200 hover:text-ink after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-orange after:to-raspberry after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={onToggle}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-all duration-300 hover:bg-surface hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-orange"
          >
            {dark ? <Sun size={18} className="transition-transform duration-500 hover:rotate-90 text-sun" /> : <Moon size={18} className="transition-transform duration-500 hover:-rotate-12 text-orange" />}
          </button>
          <a href="#contact" className="btn btn-primary hidden !py-2 text-sm sm:inline-flex">Book now</a>
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink md:hidden transition-all duration-200 hover:bg-surface focus-visible:outline-2 focus-visible:outline-orange"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line bg-bg/95 backdrop-blur-lg px-5 pb-6 pt-3 md:hidden font-accent animate-fadeIn">
          {NAV.map(([label, href]) => (
            <a key={href} href={href} onClick={close} className="block border-b border-line py-3.5 text-base font-semibold text-ink hover:text-orange transition-colors">
              {label}
            </a>
          ))}
          <div className="mt-5 flex flex-col gap-3">
            <a href="#contact" onClick={close} className="btn btn-primary">Book now</a>
            <a href={BUSINESS.phoneHref} className="btn border border-line text-ink hover:bg-surface"><Phone size={18} /> {BUSINESS.phone}</a>
          </div>
        </nav>
      )}
    </header>
  );
}
