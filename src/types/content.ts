// Types for Corvettes of Durham site content
// Matches structure of content/data/site-content.json

export interface SiteContent {
  club: ClubInfo;
  charities: Charity[];
  executive: Executive;
  codeOfEthics: CodeOfEthics;
  inMemoriam: Memorial[];
  sponsors: Sponsors;
  newsletters: Newsletter[];
  membership: MembershipInfo;
  activities: string[];
  meta: MetaInfo;
}

export interface ClubInfo {
  name: string;
  tagline: string;
  established: number;
  email: string;
  location: string;
  meetings: MeetingInfo;
  affiliations: Affiliation[];
}

export interface MeetingInfo {
  frequency: string;
  day: string;
  time: string;
  venue: string;
}

export interface Affiliation {
  name: string;
  url?: string;
  rep?: string;
}

export interface Charity {
  name: string;
  type: string;
  totalDonated?: number;
  status?: string;
}

export interface Executive {
  directors: Person[];
  officers: Person[];
}

export interface Person {
  role: string;
  name: string;
}

export interface CodeOfEthics {
  memberExpectations: string[];
  clubPromises: string[];
  adoptedDate: string;
}

export interface Memorial {
  name: string;
  dates: string;
  note?: string;
  image?: string;
}

export interface Sponsors {
  gold: Sponsor[];
  silver: Sponsor[];
}

export interface Sponsor {
  name: string;
  url?: string;
}

export interface Newsletter {
  month: string;
  year: number;
  file: string;
}

export interface MembershipInfo {
  formFile: string;
  contact: string;
}

export interface MetaInfo {
  scrapedAt: string;
  sourceUrl: string;
  originalPlatform: string;
}

// Navigation items for the site
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Executive', href: '/executive' },
  { label: 'Newsletters', href: '/newsletters' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Club Sponsors', href: '/sponsors' },
  { label: 'Code of Ethics', href: '/code-of-ethics' },
  { label: 'In Memoriam', href: '/in-memoriam' },
  { label: 'Membership 2026', href: '/content/pdfs/2026-membership-form.pdf', external: true },
];
