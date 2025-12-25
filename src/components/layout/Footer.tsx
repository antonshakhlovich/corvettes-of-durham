import Link from 'next/link';
import { getClubInfo } from '@/lib/content';

export default function Footer() {
  const club = getClubInfo();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Club Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              {club.name}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {club.tagline} in {club.location}. Established {club.established}.
            </p>
          </div>

          {/* Meeting Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Meetings
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {club.meetings.frequency} meetings on the {club.meetings.day}
              <br />
              at {club.meetings.time}
              <br />
              {club.meetings.venue}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Contact Us
            </h3>
            <a
              href={`mailto:${club.email}`}
              className="text-corvette-red hover:text-corvette-yellow transition-colors text-sm"
            >
              {club.email}
            </a>
            <div className="mt-4 flex gap-4">
              {club.affiliations.map((aff) => (
                aff.url ? (
                  <a
                    key={aff.name}
                    href={aff.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {aff.name}
                  </a>
                ) : (
                  <span key={aff.name} className="text-gray-400 text-sm">
                    {aff.name}
                  </span>
                )
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} {club.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/code-of-ethics"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Code of Ethics
            </Link>
            <Link
              href="/in-memoriam"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              In Memoriam
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
