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
    <section id="gallery" className="bg-bg/50 py-20 md:py-28 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        
        {/* Section Header */}
        <Reveal className="flex flex-col items-center text-center">
          <span className="font-accent text-xs font-bold uppercase tracking-widest text-orange dark:text-sun bg-orange/10 dark:bg-sun/10 px-3.5 py-1.5 rounded-full border border-orange/20 dark:border-sun/20">
            Event Highlights
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Event Gallery
          </h2>
          <p className="mt-4 max-w-xl text-lg text-muted">
            Explore photos and videos from real events across the Northern Territory.
          </p>

          {/* Filter Tabs */}
          <div className="mt-8 inline-flex rounded-full border border-line bg-surface p-1.5 shadow-sm">
            {['All', 'Photos', 'Videos'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`font-accent relative rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  filter === tab
                    ? 'bg-gradient-to-r from-orange to-raspberry text-white shadow-md shadow-orange/30'
                    : 'text-muted hover:text-ink hover:bg-bg'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Gallery Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <Reveal key={item.id} className="h-full">
              <div
                onClick={() => setActiveItem(item)}
                className="hover-lift group relative flex flex-col h-full overflow-hidden rounded-3xl border border-line bg-surface cursor-pointer"
              >
                {/* Image / Video Thumbnail Container */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-900">
                  <img
                    src={item.type === 'video' ? item.poster : item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="hover-zoom-img h-full w-full object-cover"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

                  {/* Top Badge: Photo or Video */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="font-accent inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-medium text-white border border-white/10">
                      {item.type === 'video' ? (
                        <>
                          <Film size={12} className="text-sun" /> Video
                        </>
                      ) : (
                        <>
                          <ImageIcon size={12} className="text-sun" /> Photo
                        </>
                      )}
                    </span>
                  </div>

                  {/* Play Button for Video / Expand Icon for Photo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {item.type === 'video' ? (
                      <div className="grid h-14 w-14 place-items-center rounded-full bg-orange/90 text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-orange">
                        <Play size={24} className="ml-1 fill-white" />
                      </div>
                    ) : (
                      <div className="grid h-12 w-12 place-items-center rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105">
                        <Maximize2 size={20} />
                      </div>
                    )}
                  </div>

                  {/* Video Duration Badge */}
                  {item.type === 'video' && item.duration && (
                    <div className="absolute bottom-4 right-4 z-10 font-accent text-xs font-semibold text-white bg-black/70 px-2.5 py-1 rounded-md border border-white/10">
                      {item.duration}
                    </div>
                  )}
                </div>

                {/* Card Info */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold text-ink transition-colors duration-200 group-hover:text-orange dark:group-hover:text-sun">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted line-clamp-2">
                    {item.caption}
                  </p>
                  <div className="mt-4 pt-4 border-t border-line/60 flex items-center justify-between text-xs font-semibold text-orange dark:text-sun font-accent">
                    <span>{item.type === 'video' ? 'Watch Video' : 'View Full Image'}</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Modal Lightbox Popup */}
        {activeItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 animate-fadeIn"
            onClick={() => setActiveItem(null)}
          >
            <div
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-surface shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white backdrop-blur-md transition hover:bg-black/90 focus-visible:outline-orange"
              >
                <X size={20} />
              </button>

              {/* Media Content */}
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

              {/* Modal Info Footer */}
              <div className="p-6 sm:p-8 bg-surface">
                <div className="flex items-center gap-2 mb-2 font-accent text-xs font-semibold text-orange dark:text-sun uppercase tracking-wider">
                  {activeItem.type === 'video' ? 'Video Showcase' : 'Photo Snapshot'}
                </div>
                <h3 className="font-display text-2xl font-bold text-ink">
                  {activeItem.title}
                </h3>
                <p className="mt-2 text-muted">
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
