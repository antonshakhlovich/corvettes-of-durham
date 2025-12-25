import type { Metadata } from 'next';
import { PageHeader, Section, Card } from '@/components/ui';
import { getNewsletters } from '@/lib/content';
import { getNewsletterPath } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Newsletters',
  description: 'Read our monthly newsletters to stay up to date with club activities and events.',
};

export default function NewslettersPage() {
  const newsletters = getNewsletters();

  return (
    <>
      <PageHeader
        title="Newsletters"
        subtitle="Stay informed with our monthly club updates"
      />

      <Section background="gray">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {newsletters.map((newsletter) => (
            <a
              key={newsletter.file}
              href={getNewsletterPath(newsletter.file)}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card 
                className="h-full flex flex-col items-center justify-center text-center py-8 group-hover:border-corvette-red border-2 border-transparent transition-colors"
                hover
              >
                {/* PDF Icon */}
                <div className="w-16 h-16 mb-4 bg-corvette-red/10 rounded-lg flex items-center justify-center group-hover:bg-corvette-red/20 transition-colors">
                  <svg 
                    className="w-8 h-8 text-corvette-red" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </div>
                
                {/* Month/Year */}
                <h3 className="font-semibold text-gray-900 group-hover:text-corvette-red transition-colors">
                  {newsletter.month}
                </h3>
                <p className="text-gray-500 text-sm">{newsletter.year}</p>
              </Card>
            </a>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          Click any newsletter to open as PDF
        </p>
      </Section>
    </>
  );
}
