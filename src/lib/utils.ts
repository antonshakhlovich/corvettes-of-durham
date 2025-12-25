import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind CSS classes with conflict resolution
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a currency amount
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Get the path to a newsletter PDF
 */
export function getNewsletterPath(filename: string): string {
  return `/content/pdfs/newsletters/${filename}`;
}

/**
 * Get the path to the membership form PDF
 */
export function getMembershipFormPath(filename: string): string {
  return `/content/pdfs/${filename}`;
}

/**
 * Get the path to an image in a specific category
 */
export function getImagePath(category: string, filename: string): string {
  return `/content/images/${category}/${filename}`;
}
