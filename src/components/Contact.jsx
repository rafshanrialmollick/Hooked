import { useState } from 'react';
import { Phone, MapPin, Clock, Globe, CheckCircle, Send } from 'lucide-react';
import Reveal from './Reveal';
import { BUSINESS } from '../data/content';

const EMPTY = { name: '', phone: '', email: '', date: '', location: '', type: 'Overnight hire', message: '' };

export default function Contact() {
  const [f, setF] = useState(EMPTY);
  const [state, setState] = useState('idle');
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setState('sending');
    try {
      if (BUSINESS.formEndpoint) {
        const r = await fetch(BUSINESS.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(f),
        });
        if (!r.ok) throw new Error('failed');
      }
      setState('sent');
      setF(EMPTY);
    } catch {
      setState('error');
    }
  };

  const Info = ({ icon: Icon, children }) => (
    <li className="flex items-start gap-3 transition-transform duration-200 hover:translate-x-1">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-orange/10 text-orange dark:bg-sun/10 dark:text-sun border border-orange/20 dark:border-sun/20">
        <Icon size={18} aria-hidden />
      </span>
      <div className="mt-1 font-sans">{children}</div>
    </li>
  );

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <div className="grid gap-12 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <span className="font-accent text-xs font-bold uppercase tracking-widest text-orange dark:text-sun bg-orange/10 dark:bg-sun/10 px-3.5 py-1.5 rounded-full border border-orange/20 dark:border-sun/20">
            Bookings & Quotes
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Get your free quote
          </h2>
          <p className="mt-4 text-lg text-muted font-sans leading-relaxed">
            Tell us about your event and we will reply with machines, flavours and pricing.
          </p>
          
          <ul className="mt-8 space-y-4">
            <Info icon={Phone}>
              <a href={BUSINESS.phoneHref} className="font-semibold text-ink hover:text-orange dark:hover:text-sun transition-colors">
                {BUSINESS.phone}
              </a>
            </Info>
            <Info icon={MapPin}>
              <a href={BUSINESS.mapUrl} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-ink transition-colors">
                {BUSINESS.address}
              </a>
            </Info>
            <Info icon={Clock}>
              <span className="text-muted">{BUSINESS.hours}</span>
            </Info>
            <Info icon={Globe}>
              <a href={BUSINESS.oldSite} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-ink transition-colors">
                hookedonslushiesnt.com.au
              </a>
            </Info>
          </ul>
        </Reveal>

        <Reveal className="lg:col-span-3">
          {state === 'sent' ? (
            <div role="status" className="rounded-3xl border border-line bg-surface p-10 text-center shadow-lg">
              <CheckCircle size={48} className="mx-auto text-green-500 animate-bounce" aria-hidden />
              <h3 className="mt-4 font-display text-2xl font-bold">Enquiry received</h3>
              <p className="mt-2 text-muted font-sans">
                Thanks! We will get back to you shortly. For anything urgent, call {BUSINESS.phone}.
              </p>
              <button onClick={() => setState('idle')} className="btn btn-primary mt-6">
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="hover-lift grid gap-4 rounded-3xl border border-line bg-surface p-6 sm:grid-cols-2 sm:p-8 shadow-sm">
              <label className="text-sm font-semibold font-accent text-ink">
                Name
                <input required className="field mt-1.5 font-sans" value={f.name} onChange={set('name')} autoComplete="name" placeholder="Your full name" />
              </label>
              <label className="text-sm font-semibold font-accent text-ink">
                Phone
                <input required type="tel" className="field mt-1.5 font-sans" value={f.phone} onChange={set('phone')} autoComplete="tel" placeholder="0400 000 000" />
              </label>
              <label className="text-sm font-semibold font-accent text-ink sm:col-span-2">
                Email
                <input required type="email" className="field mt-1.5 font-sans" value={f.email} onChange={set('email')} autoComplete="email" placeholder="you@example.com" />
              </label>
              <label className="text-sm font-semibold font-accent text-ink">
                Event date
                <input required type="date" className="field mt-1.5 font-sans" value={f.date} onChange={set('date')} />
              </label>
              <label className="text-sm font-semibold font-accent text-ink">
                Hire type
                <select className="field mt-1.5 font-sans cursor-pointer" value={f.type} onChange={set('type')}>
                  <option>Overnight hire</option>
                  <option>Long-term commercial hire</option>
                </select>
              </label>
              <label className="text-sm font-semibold font-accent text-ink sm:col-span-2">
                Event location
                <input required className="field mt-1.5 font-sans" value={f.location} onChange={set('location')} placeholder="Suburb or town in the NT" />
              </label>
              <label className="text-sm font-semibold font-accent text-ink sm:col-span-2">
                Message
                <textarea rows={4} className="field mt-1.5 font-sans" value={f.message} onChange={set('message')} placeholder="Number of guests, flavours you like, anything we should know" />
              </label>

              {state === 'error' && (
                <p role="alert" className="text-sm font-medium text-red-600 sm:col-span-2">
                  Something went wrong. Please try again or call {BUSINESS.phone}.
                </p>
              )}

              <button
                type="submit"
                disabled={state === 'sending'}
                className="group btn btn-primary sm:col-span-2 disabled:opacity-60 mt-2"
              >
                <span>{state === 'sending' ? 'Sending...' : 'Send enquiry'}</span>
                <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
