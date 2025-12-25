import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHeader, Section } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Photo gallery of Corvettes of Durham events, cruises, and member vehicles.',
};

// Gallery images - in production this could be dynamic
const galleryImages = [
  { src: '/content/images/gallery/gallery-1.jpg', alt: 'Club event photo 1' },
  { src: '/content/images/gallery/gallery-2.jpg', alt: 'Club event photo 2' },
  { src: '/content/images/misc/home-hero.jpg', alt: 'Club gathering' },
  { src: '/content/images/misc/club-banner.jpg', alt: 'Corvettes of Durham banner' },
  { src: '/content/images/misc/charity-1.jpg', alt: 'Charity event 1' },
  { src: '/content/images/misc/charity-2.jpg', alt: 'Charity event 2' },
  { src: '/content/images/misc/charity-3.jpg', alt: 'Charity event 3' },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Photo Gallery"
        subtitle="Memories from our events, cruises, and gatherings"
      />

      <Section background="gray">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          More photos coming soon! Check back regularly for updates.
        </p>
      </Section>
    </>
  );
}
