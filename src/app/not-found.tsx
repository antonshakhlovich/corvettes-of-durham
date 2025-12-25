import Link from 'next/link';
import { Button } from '@/components/ui';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16">
      <div className="text-center">
        {/* 404 Visual */}
        <div className="text-9xl font-bold text-corvette-red mb-4">
          404
        </div>
        
        {/* Message */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. 
          It might have been moved or no longer exists.
        </p>
        
        {/* Actions */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/" variant="primary">
            Back to Home
          </Button>
          <Button href="/executive" variant="outline">
            Meet Our Team
          </Button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Or try one of these pages:</p>
          <nav className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/newsletters" className="text-corvette-red hover:underline">
              Newsletters
            </Link>
            <Link href="/gallery" className="text-corvette-red hover:underline">
              Gallery
            </Link>
            <Link href="/sponsors" className="text-corvette-red hover:underline">
              Sponsors
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
