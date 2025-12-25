import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHeader, Section, Card } from '@/components/ui';
import { getSponsors, getClubInfo } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Club Sponsors',
  description: 'Thank you to our generous sponsors who support Corvettes of Durham.',
};

// Map sponsor names to their logo images
const sponsorLogos: Record<string, string> = {
  'Detail Matters Auto Salon': '/content/images/sponsors/sponsor-1.jpg',
  'Suburban Motors': '/content/images/sponsors/sponsor-2.jpg',
  'Schlegel Villages': '/content/images/sponsors/sponsor-3.jpg',
  'MMF Insurance': '/content/images/sponsors/sponsor-4.jpg',
  'The Auto Loft': '/content/images/sponsors/sponsor-5.jpg',
  'Flashfire Coatings': '/content/images/sponsors/sponsor-6.jpg',
  'TFX International': '/content/images/sponsors/sponsor-7.jpg',
  'Trim Tech Interiors': '/content/images/sponsors/sponsor-8.jpg',
};

export default function SponsorsPage() {
  const sponsors = getSponsors();
  const club = getClubInfo();

  return (
    <>
      <PageHeader
        title="Club Sponsors"
        subtitle="Thank you to the businesses who support our club"
      />

      {/* Gold Sponsors */}
      <Section
        title="Gold Sponsors"
        subtitle="Our premier partners"
        background="gray"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sponsors.gold.map((sponsor) => {
            const logoSrc = sponsorLogos[sponsor.name];
            
            const content = (
              <Card 
                className="h-full flex flex-col items-center justify-center text-center py-8 border-2 border-corvette-yellow hover:shadow-lg transition-all"
                hover
              >
                {logoSrc ? (
                  <div className="relative w-full h-20 mb-4">
                    <Image
                      src={logoSrc}
                      alt={`${sponsor.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-full h-20 mb-4 flex items-center justify-center">
                    <span className="text-gray-700 font-medium text-center px-4">
                      {sponsor.name}
                    </span>
                  </div>
                )}
                <span className="text-xs font-semibold text-corvette-yellow uppercase tracking-wide">
                  Gold Sponsor
                </span>
              </Card>
            );

            if (sponsor.url) {
              return (
                <a
                  key={sponsor.name}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${sponsor.name} website`}
                  className="block"
                >
                  {content}
                </a>
              );
            }

            return <div key={sponsor.name}>{content}</div>;
          })}
        </div>
      </Section>

      {/* Silver Sponsors */}
      <Section
        title="Silver Sponsors"
        subtitle="Our valued supporters"
        background="white"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {sponsors.silver.map((sponsor) => {
            const content = (
              <Card 
                className="h-full flex flex-col items-center justify-center text-center py-8 border-2 border-gray-200 hover:border-gray-300 transition-all"
                hover
              >
                <div className="w-full h-16 mb-4 flex items-center justify-center">
                  <span className="text-gray-700 font-medium text-center px-4">
                    {sponsor.name}
                  </span>
                </div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Silver Sponsor
                </span>
              </Card>
            );

            if (sponsor.url) {
              return (
                <a
                  key={sponsor.name}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${sponsor.name} website`}
                  className="block"
                >
                  {content}
                </a>
              );
            }

            return <div key={sponsor.name}>{content}</div>;
          })}
        </div>
      </Section>

      {/* Become a Sponsor CTA */}
      <Section background="dark">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Interested in Becoming a Sponsor?
          </h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Partner with Corvettes of Durham and reach a dedicated community of 
            automotive enthusiasts in the Durham Region.
          </p>
          <a
            href={`mailto:${club.email}?subject=Sponsorship Inquiry`}
            className="inline-flex items-center justify-center bg-corvette-red hover:bg-corvette-red-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Contact Us About Sponsorship
          </a>
        </div>
      </Section>
    </>
  );
}
