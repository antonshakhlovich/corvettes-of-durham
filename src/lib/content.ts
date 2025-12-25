import type { SiteContent } from '@/types/content';
import siteContentData from '../../public/content/data/site-content.json';

/**
 * Get the full site content object
 * This data is loaded at build time for SSG
 */
export function getSiteContent(): SiteContent {
  return siteContentData as SiteContent;
}

/**
 * Get club information
 */
export function getClubInfo() {
  return getSiteContent().club;
}

/**
 * Get charities information
 */
export function getCharities() {
  return getSiteContent().charities;
}

/**
 * Get executive team
 */
export function getExecutive() {
  return getSiteContent().executive;
}

/**
 * Get code of ethics
 */
export function getCodeOfEthics() {
  return getSiteContent().codeOfEthics;
}

/**
 * Get in memoriam list
 */
export function getInMemoriam() {
  return getSiteContent().inMemoriam;
}

/**
 * Get sponsors by tier
 */
export function getSponsors() {
  return getSiteContent().sponsors;
}

/**
 * Get newsletters sorted by date (newest first)
 */
export function getNewsletters() {
  const newsletters = getSiteContent().newsletters;
  // Sort by year and month (newest first)
  const monthOrder = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  return [...newsletters].sort((a, b) => {
    if (a.year !== b.year) return b.year - a.year;
    return monthOrder.indexOf(b.month) - monthOrder.indexOf(a.month);
  });
}

/**
 * Get membership info
 */
export function getMembership() {
  return getSiteContent().membership;
}

/**
 * Get club activities
 */
export function getActivities() {
  return getSiteContent().activities;
}
