import Image from 'next/image';
import { cn } from '@/lib/utils';

interface SponsorLogoProps {
  name: string;
  url?: string;
  image?: string;
  tier: 'gold' | 'silver';
  className?: string;
}

export default function SponsorLogo({
  name,
  url,
  image,
  tier,
  className,
}: SponsorLogoProps) {
  const content = (
    <div
      className={cn(
        'bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center min-h-[140px] transition-all duration-200',
        url && 'hover:shadow-lg hover:scale-105 cursor-pointer',
        tier === 'gold' && 'border-2 border-corvette-yellow',
        className
      )}
    >
      {image ? (
        <Image
          src={image}
          alt={`${name} logo`}
          width={160}
          height={80}
          className="max-h-20 w-auto object-contain"
        />
      ) : (
        <span className="text-gray-700 font-medium text-center">{name}</span>
      )}
      {tier === 'gold' && (
        <span className="mt-2 text-xs font-semibold text-corvette-yellow uppercase tracking-wide">
          Gold Sponsor
        </span>
      )}
    </div>
  );

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${name} website`}
      >
        {content}
      </a>
    );
  }

  return content;
}
