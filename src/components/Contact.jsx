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
    <li className="flex items-start gap-4 transition-transform duration-200 hover:translate-x-0.5">
      <span className="grid h-10 w-10 shrink-0 place-items-center border border-accent/20 text-accent bg-accent/5">
        <Icon size={16} aria-hidden />
      </span>
      <div className="mt-1.5 font-sans text-sm">{children}</div>
    </li>
  );

  return (
    <section id="contact" className="relative grain mx-auto max-w-6xl px-6 py-24 sm:px-8 md:py-32">
      <div className="grid gap-14 lg:grid-cols-5">
        {/* Left info */}
        <Reveal className="lg:col-span-2">
          <span className="section-tag">Contact</span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Get your{' '}
            <em className="italic font-normal text-accent">free quote</em>
          </h2>
          <div className="section-divider" />
          <p className="mt-5 text-base text-muted font-sans leading-relaxed">
            Tell us about your event and we will reply with machines, flavours and pricing.
          </p>

          <ul className="mt-10 space-y-5">
            <Info icon={Phone}>
              <a href={BUSINESS.phoneHref} className="font-semibold text-ink hover:text-accent transition-colors">
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

        {/* Form */}
        <Reveal className="lg:col-span-3">
          {state === 'sent' ? (
            <div role="status" className="border border-line bg-surface p-12 text-center">
              <CheckCircle size={44} className="mx-auto text-sage" aria-hidden />
              <h3 className="mt-5 font-display text-2xl font-bold">Enquiry received</h3>
              <p className="mt-3 text-muted font-sans">
                Thanks! We will get back to you shortly. For anything urgent, call {BUSINESS.phone}.
              </p>
              <button onClick={() => setState('idle')} className="btn btn-primary mt-8">
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="hover-lift grid gap-5 border border-line bg-surface p-7 sm:grid-cols-2 sm:p-10">
              <label className="font-accent text-[11px] font-medium uppercase tracking-[0.12em] text-ink">
                Name
                <input required className="field mt-2 font-sans text-sm" value={f.name} onChange={set('name')} autoComplete="name" placeholder="Your full name" />
              </label>
              <label className="font-accent text-[11px] font-medium uppercase tracking-[0.12em] text-ink">
                Phone
                <input required type="tel" className="field mt-2 font-sans text-sm" value={f.phone} onChange={set('phone')} autoComplete="tel" placeholder="0400 000 000" />
              </label>
              <label className="font-accent text-[11px] font-medium uppercase tracking-[0.12em] text-ink sm:col-span-2">
                Email
                <input required type="email" className="field mt-2 font-sans text-sm" value={f.email} onChange={set('email')} autoComplete="email" placeholder="you@example.com" />
              </label>
              <label className="font-accent text-[11px] font-medium uppercase tracking-[0.12em] text-ink">
                Event date
                <input required type="date" className="field mt-2 font-sans text-sm" value={f.date} onChange={set('date')} />
              </label>
              <label className="font-accent text-[11px] font-medium uppercase tracking-[0.12em] text-ink">
                Hire type
                <select className="field mt-2 font-sans text-sm cursor-pointer" value={f.type} onChange={set('type')}>
                  <option>Overnight hire</option>
                  <option>Long-term commercial hire</option>
                </select>
              </label>
              <label className="font-accent text-[11px] font-medium uppercase tracking-[0.12em] text-ink sm:col-span-2">
                Event location
                <input required className="field mt-2 font-sans text-sm" value={f.location} onChange={set('location')} placeholder="Suburb or town in the NT" />
              </label>
              <label className="font-accent text-[11px] font-medium uppercase tracking-[0.12em] text-ink sm:col-span-2">
                Message
                <textarea rows={4} className="field mt-2 font-sans text-sm" value={f.message} onChange={set('message')} placeholder="Number of guests, flavours you like, anything we should know" />
              </label>

              {state === 'error' && (
                <p role="alert" className="text-sm font-medium text-coral sm:col-span-2">
                  Something went wrong. Please try again or call {BUSINESS.phone}.
                </p>
              )}

              <button
                type="submit"
                disabled={state === 'sending'}
                className="group btn btn-primary sm:col-span-2 disabled:opacity-60 mt-2"
              >
                <span>{state === 'sending' ? 'Sending...' : 'Send Enquiry'}</span>
                <Send size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
