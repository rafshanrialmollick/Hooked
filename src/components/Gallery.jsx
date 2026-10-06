import { useState } from 'react';
import { Play, Image as ImageIcon, X, Film, Maximize2 } from 'lucide-react';
import Reveal from './Reveal';
import { GALLERY_ITEMS } from '../data/galleryData';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [activeItem, setActiveItem] = useState(null);

  const filteredItems = filter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="relative grain py-24 md:py-32 border-t border-line/50">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">

        {/* Section Header */}
        <Reveal className="flex flex-col items-center text-center">
          <span className="section-tag">Gallery</span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Event{' '}
            <em className="italic font-normal text-accent">Highlights</em>
          </h2>
          <div className="section-divider mx-auto" />
          <p className="mt-5 max-w-xl text-base text-muted font-sans leading-relaxed">
            Explore photos and videos from real events across the Northern Territory.
          </p>

          {/* Filter Tabs */}
          <div className="mt-10 inline-flex border border-line bg-surface p-1">
            {['All', 'Photos', 'Videos'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`font-accent text-xs font-medium uppercase tracking-[0.12em] px-6 py-2.5 transition-all duration-300 ${
                  filter === tab
                    ? 'bg-accent text-deep'
                    : 'text-muted hover:text-ink hover:bg-surface-alt'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Gallery Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <Reveal key={item.id} className="h-full">
              <div
                onClick={() => setActiveItem(item)}
                className="hover-lift group relative flex flex-col h-full overflow-hidden border border-line bg-surface cursor-pointer"
              >
                {/* Image / Video Thumbnail */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-deep">
                  <img
                    src={item.type === 'video' ? item.poster : item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="hover-zoom-img h-full w-full object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-70" />

                  {/* Type Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="font-accent inline-flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-white/90 border border-white/10">
                      {item.type === 'video' ? (
                        <><Film size={11} className="text-accent" /> Video</>
                      ) : (
                        <><ImageIcon size={11} className="text-accent" /> Photo</>
                      )}
                    </span>
                  </div>

                  {/* Play / Expand */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {item.type === 'video' ? (
                      <div className="grid h-14 w-14 place-items-center rounded-full bg-accent/90 text-deep shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent">
                        <Play size={22} className="ml-0.5 fill-current" />
                      </div>
                    ) : (
                      <div className="grid h-11 w-11 place-items-center rounded-full bg-white/15 backdrop-blur-md text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                        <Maximize2 size={18} />
                      </div>
                    )}
                  </div>

                  {/* Duration */}
                  {item.type === 'video' && item.duration && (
                    <div className="absolute bottom-4 right-4 z-10 font-accent text-[10px] font-medium text-white bg-black/60 px-2.5 py-1 tracking-wider uppercase">
                      {item.duration}
                    </div>
                  )}
                </div>

                {/* Card Info */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-bold text-ink transition-colors duration-200 group-hover:text-accent">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted line-clamp-2 font-sans leading-relaxed">
                    {item.caption}
                  </p>
                  <div className="mt-auto pt-5 border-t border-line/40 flex items-center justify-between text-[10px] font-medium text-accent font-accent uppercase tracking-[0.15em]">
                    <span>{item.type === 'video' ? 'Watch Video' : 'View Full Image'}</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1 text-sm">&rarr;</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Modal Lightbox */}
        {activeItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 animate-fadeIn"
            onClick={() => setActiveItem(null)}
          >
            <div
              className="relative w-full max-w-4xl overflow-hidden border border-white/10 bg-surface shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setActiveItem(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-20 grid h-10 w-10 place-items-center bg-black/50 text-white backdrop-blur-md transition hover:bg-black/80 focus-visible:outline-accent"
              >
                <X size={18} />
              </button>

              {/* Media */}
              <div className="relative bg-black max-h-[70vh] flex items-center justify-center">
                {activeItem.type === 'video' ? (
                  <video
                    src={activeItem.src}
                    poster={activeItem.poster}
                    controls
                    autoPlay
                    className="max-h-[70vh] w-full object-contain"
                  />
                ) : (
                  <img
                    src={activeItem.src}
                    alt={activeItem.alt}
                    className="max-h-[70vh] w-full object-contain"
                  />
                )}
              </div>

              {/* Info Footer */}
              <div className="p-6 sm:p-8 bg-surface border-t border-line/30">
                <span className="section-tag text-[10px]">
                  {activeItem.type === 'video' ? 'Video' : 'Photo'}
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold text-ink">
                  {activeItem.title}
                </h3>
                <p className="mt-2 text-muted font-sans leading-relaxed">
                  {activeItem.caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
