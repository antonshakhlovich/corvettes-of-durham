import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  containerClassName?: string;
  background?: 'white' | 'gray' | 'dark';
  id?: string;
}

export default function Section({
  children,
  title,
  subtitle,
  className,
  containerClassName,
  background = 'white',
  id,
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900 text-white',
  };

  return (
    <section
      id={id}
      className={cn('py-12 md:py-16', backgrounds[background], className)}
    >
      <div className={cn('max-w-6xl mx-auto px-4 sm:px-6 lg:px-8', containerClassName)}>
        {(title || subtitle) && (
          <div className="text-center mb-10">
            {title && (
              <h2 className={cn(
                'text-3xl md:text-4xl font-semibold mb-4',
                background === 'dark' ? 'text-white' : 'text-gray-900'
              )}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={cn(
                'text-lg max-w-2xl mx-auto',
                background === 'dark' ? 'text-gray-300' : 'text-gray-600'
              )}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
