# Corvettes of Durham - Implementation Guide

> **Version:** 1.0  
> **Created:** December 25, 2025  
> **Purpose:** Step-by-step guide for developers implementing features

---

## ⚠️ MANDATORY VALIDATION REQUIREMENT

### Before Marking ANY Task Complete:

1. **Open the original website:** https://www.corvettesofdurham.ca/
2. **Compare side-by-side** with your implementation
3. **Verify content parity:**
   - All text matches
   - All names/dates are correct
   - All links work
   - Images display properly
4. **Test responsiveness:** 375px mobile, 1280px desktop
5. **Run Lighthouse:** Scores should be 90+

**This is not optional. The client will compare our work to their existing site.**

---

## 1. Getting Started

### 1.1 Prerequisites

- Node.js 18+ installed
- Git configured
- VS Code (recommended) with ESLint/Prettier extensions

### 1.2 Initial Setup

```bash
# Clone the repository
cd /path/to/corvettes-of-durham

# Create Next.js project
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# If asked about overwriting, say YES (we want the Next.js structure)
```

### 1.3 Post-Setup Tasks

```bash
# Copy scraped content to public folder
cp -r content public/

# Verify content is accessible
ls public/content/data/site-content.json

# Start dev server
npm run dev
```

---

## 2. Configuration Files

### 2.1 Tailwind Config

Replace `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        corvette: {
          red: '#C10001',
          yellow: '#F7E733',
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

### 2.2 TypeScript Types

Create `src/types/content.ts`:

```typescript
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
```

### 2.3 Content Loader

Create `src/lib/content.ts`:

```typescript
import type { SiteContent } from '@/types/content';
import contentData from '../../public/content/data/site-content.json';

export function getSiteContent(): SiteContent {
  return contentData as SiteContent;
}

// Helper to get specific sections
export function getClubInfo() {
  return getSiteContent().club;
}

export function getExecutive() {
  return getSiteContent().executive;
}

export function getSponsors() {
  return getSiteContent().sponsors;
}

export function getNewsletters() {
  return getSiteContent().newsletters;
}

export function getCodeOfEthics() {
  return getSiteContent().codeOfEthics;
}

export function getMemorials() {
  return getSiteContent().inMemoriam;
}

export function getCharities() {
  return getSiteContent().charities;
}
```

---

## 3. Component Implementation

### 3.1 Folder Structure

Create these folders:

```bash
mkdir -p src/components/layout
mkdir -p src/components/ui
mkdir -p src/components/features
```

### 3.2 Layout Components

**Header (`src/components/layout/Header.tsx`):**

```typescript
import Link from 'next/link';
import Image from 'next/image';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/content/images/misc/corvette-logo-1.jpg"
              alt="Corvettes of Durham"
              width={50}
              height={50}
              className="rounded"
            />
            <span className="font-bold text-lg hidden sm:block">
              Corvettes of Durham
            </span>
          </Link>
          
          <Navigation className="hidden md:flex" />
          <MobileMenu className="md:hidden" />
        </div>
      </div>
    </header>
  );
}
```

**Navigation (`src/components/layout/Navigation.tsx`):**

```typescript
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/executive', label: 'Executive' },
  { href: '/newsletters', label: 'Newsletters' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/code-of-ethics', label: 'Code of Ethics' },
  { href: '/in-memoriam', label: 'In Memoriam' },
];

interface NavigationProps {
  className?: string;
  onItemClick?: () => void;
}

export default function Navigation({ className, onItemClick }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className={className}>
      <ul className="flex items-center gap-6">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onItemClick}
              className={`text-sm font-medium transition-colors hover:text-corvette-red
                ${pathname === item.href 
                  ? 'text-corvette-red' 
                  : 'text-gray-700'
                }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
```

**Footer (`src/components/layout/Footer.tsx`):**

```typescript
import { getClubInfo } from '@/lib/content';

export default function Footer() {
  const club = getClubInfo();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">{club.name}</h3>
            <p className="text-gray-400">{club.tagline}</p>
            <p className="text-gray-400 mt-2">Est. {club.established}</p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Meetings</h3>
            <p className="text-gray-400">{club.meetings.day}</p>
            <p className="text-gray-400">{club.meetings.time}</p>
            <p className="text-gray-400">{club.meetings.venue}</p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <a 
              href={`mailto:${club.email}`}
              className="text-corvette-red hover:underline"
            >
              {club.email}
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} {club.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
```

### 3.3 UI Components

**PageHeader (`src/components/ui/PageHeader.tsx`):**

```typescript
interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
```

**PersonCard (`src/components/ui/PersonCard.tsx`):**

```typescript
import Image from 'next/image';

interface PersonCardProps {
  name: string;
  role: string;
  imageSrc?: string;
  note?: string;
}

export default function PersonCard({ name, role, imageSrc, note }: PersonCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center">
      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={name}
            width={96}
            height={96}
            className="object-cover"
          />
        ) : (
          <span className="text-4xl">🚗</span>
        )}
      </div>
      <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
      <p className="text-corvette-red font-medium">{role}</p>
      {note && (
        <p className="text-sm text-gray-500 mt-2">{note}</p>
      )}
    </div>
  );
}
```

---

## 4. Page Implementation

### 4.1 Root Layout

Update `src/app/layout.tsx`:

```typescript
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Corvettes of Durham',
  description: 'A dedicated group of Corvette enthusiasts in Durham Region, Ontario',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
```

### 4.2 Home Page

Update `src/app/page.tsx`:

```typescript
import Image from 'next/image';
import Link from 'next/link';
import { getClubInfo, getCharities } from '@/lib/content';

export default function HomePage() {
  const club = getClubInfo();
  const charities = getCharities();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px]">
        <Image
          src="/content/images/misc/home-hero.jpg"
          alt="Corvettes of Durham"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {club.name}
            </h1>
            <p className="text-xl md:text-2xl">
              {club.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Our Club</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Corvettes of Durham was established in {club.established} by a dedicated 
            group of Corvette enthusiasts. Our General Meetings are held {club.meetings.frequency.toLowerCase()}, 
            every {club.meetings.day} at {club.meetings.time} at {club.meetings.venue.toLowerCase()}. 
            During the snow-free months we arrange cruises to various locations and 
            also attend car shows and events in Southern Ontario.
          </p>
        </div>
      </section>

      {/* Charities Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Supporting Our Community
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {charities.map((charity) => (
              <div 
                key={charity.name}
                className="bg-white rounded-xl shadow-md p-8 text-center"
              >
                <h3 className="text-xl font-semibold mb-2">{charity.name}</h3>
                <p className="text-corvette-red font-bold text-lg">
                  {charity.totalDonated 
                    ? `$${charity.totalDonated.toLocaleString()} donated`
                    : charity.status
                  }
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Club</h2>
          <p className="text-lg text-gray-700 mb-8">
            Contact us at{' '}
            <a 
              href={`mailto:${club.email}`}
              className="text-corvette-red hover:underline"
            >
              {club.email}
            </a>
          </p>
          <Link
            href="/content/pdfs/2026-membership-form.pdf"
            className="inline-block bg-corvette-red hover:bg-red-700 text-white 
                       font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Download Membership Form
          </Link>
        </div>
      </section>
    </>
  );
}
```

### 4.3 Example: Executive Page

Create `src/app/executive/page.tsx`:

```typescript
import PageHeader from '@/components/ui/PageHeader';
import PersonCard from '@/components/ui/PersonCard';
import { getExecutive, getClubInfo } from '@/lib/content';

export const metadata = {
  title: 'Executive Team | Corvettes of Durham',
};

export default function ExecutivePage() {
  const executive = getExecutive();
  const club = getClubInfo();

  return (
    <>
      <PageHeader 
        title="Executive Team" 
        subtitle="Meet the people who keep our club running"
      />

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Directors */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">
              Executive Directors
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {executive.directors.map((person) => (
                <PersonCard
                  key={person.role}
                  name={person.name}
                  role={person.role}
                />
              ))}
            </div>
          </div>

          {/* Officers */}
          <div>
            <h2 className="text-2xl font-bold text-center mb-8">
              Officers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {executive.officers.map((person) => (
                <PersonCard
                  key={person.role}
                  name={person.name}
                  role={person.role}
                />
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-700">
              Need to reach us? Email{' '}
              <a 
                href={`mailto:${club.email}`}
                className="text-corvette-red hover:underline font-medium"
              >
                {club.email}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
```

---

## 5. Testing Checklist

### 5.1 Per-Page Validation

Use this checklist for every page:

```markdown
## Page: [Page Name]

### Content Validation (compare to original site)
- [ ] All text content matches
- [ ] Names spelled correctly
- [ ] Dates are accurate
- [ ] Numbers are correct (donation amounts, years, etc.)
- [ ] All links work

### Visual Validation
- [ ] Layout is similar to original intent
- [ ] Images display correctly
- [ ] Text is readable
- [ ] Colors match design system

### Responsive Testing
- [ ] Mobile (375px) - content readable, no horizontal scroll
- [ ] Tablet (768px) - layout adapts appropriately
- [ ] Desktop (1280px) - full layout displays correctly

### Accessibility
- [ ] All images have alt text
- [ ] Links are descriptive
- [ ] Can navigate with keyboard
- [ ] Color contrast is sufficient

### Performance
- [ ] Page loads in < 3 seconds
- [ ] No console errors
- [ ] Images are optimized
```

### 5.2 Running Lighthouse

```bash
# In Chrome DevTools:
1. Open the page
2. Open DevTools (F12)
3. Go to "Lighthouse" tab
4. Run audit for Performance, Accessibility, Best Practices, SEO
5. All scores should be 90+
```

---

## 6. Deployment

### 6.1 Pre-Deployment Checklist

- [ ] All pages implemented and validated
- [ ] No TypeScript errors (`npm run build` succeeds)
- [ ] No console errors in browser
- [ ] Lighthouse scores > 90
- [ ] All links work
- [ ] PDFs download correctly

### 6.2 Deploy to Vercel

```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Deploy
vercel

# Or push to GitHub and connect to Vercel dashboard
git add .
git commit -m "Initial deployment"
git push origin main
```

### 6.3 Post-Deployment Validation

1. Visit production URL
2. Test all pages again
3. Verify PDFs are accessible
4. Test on real mobile device
5. Share link with stakeholders

---

## 7. Common Issues & Solutions

### Issue: JSON import error

```typescript
// Add to tsconfig.json
{
  "compilerOptions": {
    "resolveJsonModule": true
  }
}
```

### Issue: Images not loading

```bash
# Verify images are in correct location
ls public/content/images/

# Ensure paths start with /content/ not /public/content/
```

### Issue: Type errors with content

```typescript
// Make sure types match JSON structure exactly
// Check for optional fields (use ?)
interface Sponsor {
  name: string;
  url?: string;  // Optional
}
```

### Issue: Mobile menu not working

```typescript
// Make sure component has 'use client' directive
'use client';

import { useState } from 'react';
```

---

## 8. Quick Reference Commands

```bash
# Development
npm run dev           # Start dev server
npm run build         # Production build
npm run start         # Serve production build
npm run lint          # Run ESLint

# Git
git add .
git commit -m "message"
git push origin main

# Deployment
vercel                # Deploy to Vercel
vercel --prod        # Deploy to production
```

---

*Follow this guide precisely. When in doubt, check the original website and the data in `site-content.json`.*
