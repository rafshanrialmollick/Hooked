import indoor from '../assets/indoor.webp';
import outdoor from '../assets/outdoor.webp';
import bluepurple from '../assets/bluepurple.webp';

/**
 * GALLERY DATA STRUCTURE
 * ----------------------------------------------------
 * You can easily replace these dummy photos and videos!
 * - For Photos: set type: 'photo', src: 'YOUR_IMAGE_PATH_OR_URL'
 * - For Videos: set type: 'video', src: 'YOUR_VIDEO_MP4_URL', poster: 'THUMBNAIL_IMAGE'
 */

export const GALLERY_ITEMS = [
  // --- PHOTOS ---
  {
    id: 'p1',
    type: 'photo',
    title: 'Indoor Party Setup',
    category: 'Photos',
    src: indoor, // Replace with your photo file or URL
    alt: 'Indoor slushie machine lineup',
    caption: 'Full multi-flavor slushie bar setup for an indoor celebration.',
  },
  {
    id: 'p2',
    type: 'photo',
    title: 'Outdoor Event Hire',
    category: 'Photos',
    src: outdoor, // Replace with your photo file or URL
    alt: 'Outdoor slushie setup',
    caption: 'Chilled slushie machines ready under the sunshine.',
  },
  {
    id: 'p3',
    type: 'photo',
    title: 'Twin Bowl Tropical Mix',
    category: 'Photos',
    src: bluepurple, // Replace with your photo file or URL
    alt: 'Twin bowl slushie machine with blue and purple flavors',
    caption: 'Vibrant blue raspberry and wild berry twin slushies.',
  },
  {
    id: 'p4',
    type: 'photo',
    title: 'Commercial Counter Setup',
    category: 'Photos',
    src: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80', // Replace with your photo file or URL
    alt: 'Ice cold summer slushies in glasses',
    caption: 'Long-term commercial placement for high foot-traffic venues.',
  },
  {
    id: 'p5',
    type: 'photo',
    title: 'Sunset Birthday Celebration',
    category: 'Photos',
    src: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80', // Replace with your photo file or URL
    alt: 'Party celebration background',
    caption: 'Adding color and refreshment to evening birthday bashes.',
  },

  // --- VIDEOS ---
  {
    id: 'v1',
    type: 'video',
    title: 'Slushie Machine In Action',
    category: 'Videos',
    // Dummy HTML5 video MP4 (Replace with your actual video .mp4 file or URL)
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', 
    poster: indoor, // Replace with video poster thumbnail image
    duration: '0:30',
    alt: 'Video showing slushie machine pouring',
    caption: 'Watch how smooth and quick the slushie machine pours choco & berry slushies.',
  },
  {
    id: 'v2',
    type: 'video',
    title: 'Quick Setup & Pour Guide',
    category: 'Videos',
    // Dummy HTML5 video MP4 (Replace with your actual video .mp4 file or URL)
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    poster: outdoor, // Replace with video poster thumbnail image
    duration: '0:45',
    alt: 'Video demonstrating machine setup',
    caption: 'Step-by-step walkthrough of setting up and operating your hired slushie unit.',
  },
  {
    id: 'v3',
    type: 'video',
    title: 'Event Highlights Video',
    category: 'Videos',
    // Dummy HTML5 video MP4 (Replace with your actual video .mp4 file or URL)
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    poster: bluepurple, // Replace with video poster thumbnail image
    duration: '1:00',
    alt: 'Video showing party guests enjoying slushies',
    caption: 'Highlights from local Northern Territory events powered by Hooked On Slushies.',
  },
];
