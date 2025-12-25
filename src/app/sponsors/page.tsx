import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHeader, Section } from '@/components/ui';
import { getSponsors, getClubInfo } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Club Sponsors',
  description: 'Thank you to our generous sponsors who support Corvettes of Durham.',
};

interface Sponsor {
  name: string;
  url?: string | null;
  image?: string | null;
}

export default function SponsorsPage() {
  const sponsors = getSponsors() as { gold: Sponsor[]; silver: Sponsor[] };
  const club = getClubInfo();

  const renderSponsorCard = (sponsor: Sponsor, tier: 'gold' | 'silver') => {
    const isGold = tier === 'gold';
    const imageSrc = sponsor.image ? `/content/images/sponsors/${sponsor.image}` : null;
    
    const content = (
      <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        {/* Accent bar */}
        <div className={`absolute top-0 left-0 right-0 h-1.5 ${isGold ? 'bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400' : 'bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300'} rounded-t-2xl`} />
        
        <div className="flex flex-col items-center">
          {imageSrc ? (
            <div className="relative w-full h-48 mb-4">
              <Image
                src={imageSrc}
                alt={`${sponsor.name} logo`}
                fill
                className="object-contain"
              />
            </div>
          ) : (
            <div className="w-full h-48 mb-4 flex items-center justify-center">
              <span className="text-gray-800 font-semibold text-center text-lg">
                {sponsor.name}
              </span>
            </div>
          )}
          
          {/* Subtle tier badge */}
          <span className={`inline-flex items-center gap-1.5 text-sm font-medium ${isGold ? 'text-amber-600 bg-amber-50' : 'text-gray-600 bg-gray-100'} px-3 py-1.5 rounded-full`}>
            <span className={`w-2 h-2 ${isGold ? 'bg-amber-500' : 'bg-gray-400'} rounded-full`} />
            {isGold ? 'Gold Partner' : 'Silver Partner'}
          </span>
        </div>
        
        {/* Hover overlay for linked sponsors */}
        {sponsor.url && (
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        )}
      </div>
    );

    if (sponsor.url) {
      return (
        <a
          key={sponsor.name}
          href={sponsor.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${sponsor.name} website`}
          className="block focus:outline-none focus:ring-2 focus:ring-corvette-red focus:ring-offset-2 rounded-2xl"
        >
          {content}
        </a>
      );
    }

    return <div key={sponsor.name}>{content}</div>;
  };

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
        background="white"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsors.gold.map((sponsor) => renderSponsorCard(sponsor, 'gold'))}
        </div>
      </Section>

      {/* Silver Sponsors */}
      <Section
        title="Silver Sponsors"
        subtitle="Valued club supporters"
        background="gray"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsors.silver.map((sponsor) => renderSponsorCard(sponsor, 'silver'))}
        </div>
      </Section>

      {/* Thank You */}
      <Section background="white">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Become a Sponsor
          </h2>
          <p className="text-gray-600 mb-6">
            Interested in supporting {club.name}? We offer various sponsorship opportunities
            for businesses in Durham Region.
          </p>
          <p className="text-gray-600">
            Contact us at{' '}
            <a
              href={`mailto:${club.email}`}
              className="text-corvette-red hover:underline"
            >
              {club.email}
            </a>
          </p>
        </div>
      </Section>
    </>
  );
}
