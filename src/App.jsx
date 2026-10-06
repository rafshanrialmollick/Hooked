import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Machines from './components/Machines';
import Gallery from './components/Gallery';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

const initialDark = () => {
  try { const s = localStorage.getItem('theme'); if (s) return s === 'dark'; } catch { /* storage unavailable */ }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
};

export default function App() {
  const [dark, setDark] = useState(initialDark);
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch { /* ignore */ }
  }, [dark]);

  const path = window.location.pathname.replace(/\/+$/, '');
  if (path !== '' && path !== '/index.html') return <NotFound />;

  return (
    <>
      <Navbar dark={dark} onToggle={() => setDark(!dark)} />
      <main>
        <Hero />
        <Services />
        <Machines />
        <Gallery />
        <HowItWorks />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
