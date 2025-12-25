import type { Metadata } from 'next';
import { PageHeader, Section, PersonCard } from '@/components/ui';
import { getInMemoriam } from '@/lib/content';

export const metadata: Metadata = {
  title: 'In Memoriam',
  description: 'Remembering members of Corvettes of Durham who are no longer with us.',
};

export default function InMemoriamPage() {
  const memorials = getInMemoriam();

  return (
    <>
      <PageHeader
        title="In Memoriam"
        subtitle="Honoring the memory of our departed friends"
      />

      <Section background="gray">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-gray-600 leading-relaxed">
            We remember and honor these members of our Corvettes of Durham family 
            who have passed on. Their passion for Corvettes and friendship will 
            always be remembered.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {memorials.map((person) => (
            <PersonCard
              key={person.name}
              name={person.name}
              role=""
              dates={person.dates}
              note={person.note}
              variant="memorial"
            />
          ))}
        </div>
      </Section>

      {/* Memorial Message */}
      <Section background="white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl mb-6">🕊️</div>
          <p className="text-gray-600 italic text-lg">
            &ldquo;Gone from our sight, but never from our hearts.&rdquo;
          </p>
        </div>
      </Section>
    </>
  );
}
