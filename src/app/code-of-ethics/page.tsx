import type { Metadata } from 'next';
import { PageHeader, Section, Card } from '@/components/ui';
import { getCodeOfEthics } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Code of Ethics',
  description: 'The Code of Ethics that guides Corvettes of Durham members and club operations.',
};

export default function CodeOfEthicsPage() {
  const codeOfEthics = getCodeOfEthics();

  return (
    <>
      <PageHeader
        title="Code of Ethics"
        subtitle="The principles that guide our club"
      />

      {/* Members Are Expected To */}
      <Section
        title="Members are Expected to"
        background="white"
      >
        <Card className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {codeOfEthics.memberExpectations.map((expectation, index) => (
              <li key={index} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-corvette-red/10 rounded-full flex items-center justify-center">
                  <span className="text-corvette-red font-semibold text-sm">
                    {index + 1}
                  </span>
                </span>
                <p className="text-gray-700 leading-relaxed pt-1">
                  {expectation}
                </p>
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      {/* Club Promises Members */}
      <Section
        title="The Club Promises its Members to"
        background="gray"
      >
        <Card className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {codeOfEthics.clubPromises.map((promise, index) => (
              <li key={index} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-corvette-red/10 rounded-full flex items-center justify-center">
                  <span className="text-corvette-red font-semibold text-sm">
                    {index + 1}
                  </span>
                </span>
                <p className="text-gray-700 leading-relaxed pt-1">
                  {promise}
                </p>
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      {/* Adoption Date */}
      <Section background="white">
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            This Code of Ethics was adopted on{' '}
            <span className="font-semibold text-gray-700">
              {codeOfEthics.adoptedDate}
            </span>
          </p>
        </div>
      </Section>
    </>
  );
}
