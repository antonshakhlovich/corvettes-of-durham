import type { Metadata } from 'next';
import { Gallery, PageHeader, Section } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Photo gallery of Corvettes of Durham events, cruises, and member vehicles.',
};

// Gallery events with images from the original website
const galleryEvents = [
  {
    title: 'Motorama 2025',
    images: [
      '348b416feae9dc410ede5a023702db2a',
      'b99076b5b4fca54cadf66f1da648e311',
      '0f5062a3224cae093b665d0adc85fc7d',
      '2c8553f32c62d8d1591a757157dfa726',
      'c7829924b69070587e732140e75e488a',
      '5639b2e4d77f1ed44ec694106b79507a',
      '1b9378982b120840b875277f312fa6bd',
      'ab157659fafe42107346707486d1f2a9',
      '5237038ce66a12a9b2ac581c1538d921',
      '0fb34e15da8b6c89589dd26dfead4172',
      'a5c0268e313ca201d19a4a51a2aa68ea',
      'a007a507eab081d3ab33f24de193c8c1',
      'df122a0174264188e8f5aeea52fe2ee1',
      '10508bc1f2bab915b29ddeaeff7a7709',
      '1b9ab1df0b8e96d63df29e5f61117a08',
    ],
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Photo Gallery"
        subtitle="Memories from our events, cruises, and gatherings"
      />

      {galleryEvents.map((event, eventIndex) => (
        <Section
          key={event.title}
          title={event.title}
          background={eventIndex % 2 === 0 ? 'gray' : 'white'}
        >
          <Gallery
            title={event.title}
            images={event.images}
            previewCount={8}
          />
        </Section>
      ))}

      <Section background="white">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-gray-600">
            View more photos from past years on our{' '}
            <a
              href="https://www.corvettesofdurham.ca/gallery-2014--2015--2016--2017--2018.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-corvette-red hover:underline"
            >
              complete gallery archive
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
