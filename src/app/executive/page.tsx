import type { Metadata } from 'next';
import { PageHeader, Section, PersonCard } from '@/components/ui';
import { getExecutive, getClubInfo } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Executive Team',
  description: 'Meet the Executive Directors and Officers of Corvettes of Durham.',
};

export default function ExecutivePage() {
  const executive = getExecutive();
  const club = getClubInfo();

  return (
    <>
      <PageHeader
        title="Executive Team"
        subtitle="Meet the dedicated volunteers who lead our club"
      />

      {/* Contact Info */}
      <Section background="white">
        <div className="text-center mb-8">
          <p className="text-gray-600 mb-2">
            For inquiries, please contact us at:
          </p>
          <a
            href={`mailto:${club.email}`}
            className="text-corvette-red hover:underline text-lg font-medium"
          >
            {club.email}
          </a>
        </div>
      </Section>

      {/* Executive Directors */}
      <Section
        title="Executive Directors"
        subtitle="Our elected leadership team"
        background="gray"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {executive.directors.map((person) => (
            <PersonCard
              key={person.role}
              name={person.name}
              role={person.role}
              variant="executive"
            />
          ))}
        </div>
      </Section>

      {/* Officers */}
      <Section
        title="Officers"
        subtitle="Committee chairs and coordinators"
        background="white"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {executive.officers.map((person) => (
            <PersonCard
              key={person.role}
              name={person.name}
              role={person.role}
              variant="executive"
            />
          ))}
        </div>
      </Section>
    </>
  );
}
