import Image from 'next/image';
import { cn } from '@/lib/utils';

interface PersonCardProps {
  name: string;
  role: string;
  image?: string;
  note?: string;
  dates?: string;
  className?: string;
  variant?: 'executive' | 'memorial';
}

export default function PersonCard({
  name,
  role,
  image,
  note,
  dates,
  className,
  variant = 'executive',
}: PersonCardProps) {
  const isMemorial = variant === 'memorial';

  return (
    <div
      className={cn(
        'bg-white rounded-xl shadow-md p-6 text-center',
        isMemorial && 'border-l-4 border-corvette-red',
        className
      )}
    >
      {/* Avatar */}
      <div className={cn(
        'w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden flex items-center justify-center',
        isMemorial ? 'bg-gray-100' : 'bg-corvette-red/10'
      )}>
        {image ? (
          <Image
            src={image}
            alt={name}
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className={cn(
            'text-3xl',
            isMemorial ? 'text-gray-400' : 'text-corvette-red'
          )}>
            {isMemorial ? '🕊️' : '👤'}
          </span>
        )}
      </div>

      {/* Name */}
      <h3 className="font-semibold text-lg text-gray-900 mb-1">
        {name}
      </h3>

      {/* Role / Dates */}
      {dates ? (
        <p className="text-gray-600 text-sm mb-2">{dates}</p>
      ) : (
        <p className="text-corvette-red font-medium text-sm mb-2">{role}</p>
      )}

      {/* Note */}
      {note && (
        <p className="text-gray-500 text-sm italic">{note}</p>
      )}
    </div>
  );
}
