# Corvettes of Durham - Architecture Document

> **Version:** 1.0  
> **Created:** December 25, 2025  
> **Stack:** Next.js 14+ (App Router) | TypeScript | Tailwind CSS | Vercel

---

## ⚠️ CRITICAL: Content Validation

**All content displayed on the site MUST match the original website.**
- **Validation Source:** https://www.corvettesofdurham.ca/
- **Data Source:** `content/data/site-content.json`
- **Test:** Before deploying, verify each page against the original

---

## 1. Technology Stack

| Layer | Technology | Version | Purpose |
|-------|------------|---------|---------|
| Framework | Next.js | 14.x+ | React framework with App Router |
| Language | TypeScript | 5.x | Type safety |
| Styling | Tailwind CSS | 3.x | Utility-first CSS |
| Hosting | Vercel | - | Edge deployment, CDN |
| Images | Next/Image | - | Optimized image loading |

### 1.1 Why This Stack?

- **Next.js App Router:** SSG for fast static pages, easy file-based routing
- **TypeScript:** Catches content-related bugs at build time
- **Tailwind:** Rapid development, consistent styling
- **Vercel:** Zero-config deployment, preview URLs for sharing

---

## 2. Project Structure

```
corvettes-of-durham/
├── public/
│   └── content/                    # Scraped content (copied from /content)
│       ├── data/
│       │   └── site-content.json   # Main data source
│       ├── images/
│       │   ├── executive/
│       │   ├── gallery/
│       │   ├── misc/
│       │   └── sponsors/
│       └── pdfs/
│           ├── newsletters/
│           └── 2026-membership-form.pdf
│
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── layout.tsx              # Root layout (header, footer)
│   │   ├── page.tsx                # Home page
│   │   ├── executive/
│   │   │   └── page.tsx
│   │   ├── newsletters/
│   │   │   └── page.tsx
│   │   ├── gallery/
│   │   │   └── page.tsx
│   │   ├── sponsors/
│   │   │   └── page.tsx
│   │   ├── code-of-ethics/
│   │   │   └── page.tsx
│   │   └── in-memoriam/
│   │       └── page.tsx
│   │
│   ├── components/                 # Reusable components
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── MobileMenu.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── PageHeader.tsx
│   │   │   ├── Section.tsx
│   │   │   └── PersonCard.tsx
│   │   └── features/
│   │       ├── SponsorGrid.tsx
│   │       ├── NewsletterList.tsx
│   │       ├── ExecutiveTeam.tsx
│   │       └── MemorialList.tsx
│   │
│   ├── lib/                        # Utilities and data loading
│   │   ├── content.ts              # Load and type site content
│   │   └── utils.ts                # Helper functions
│   │
│   └── types/                      # TypeScript types
│       └── content.ts              # Content data types
│
├── tailwind.config.ts              # Tailwind configuration
├── next.config.js                  # Next.js configuration
├── tsconfig.json                   # TypeScript configuration
└── package.json
```

---

## 3. Data Architecture

### 3.1 Content Loading Strategy

All site content comes from a single JSON file. This is loaded at build time (SSG).

```typescript
// src/lib/content.ts
import siteContent from '@/public/content/data/site-content.json';
import type { SiteContent } from '@/types/content';

export function getSiteContent(): SiteContent {
  return siteContent as SiteContent;
}

// Usage in page:
export default function ExecutivePage() {
  const content = getSiteContent();
  return <ExecutiveTeam data={content.executive} />;
}
```

### 3.2 Type Definitions

```typescript
// src/types/content.ts
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
  meetings: {
    frequency: string;
    day: string;
    time: string;
    venue: string;
  };
  affiliations: Affiliation[];
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
```

---

## 4. Routing Architecture

### 4.1 Route Map

| Route | Page | Data Source |
|-------|------|-------------|
| `/` | Home | `club`, `charities` |
| `/executive` | Executive Team | `executive` |
| `/newsletters` | Newsletter Archive | `newsletters` |
| `/gallery` | Photo Gallery | Image files |
| `/sponsors` | Club Sponsors | `sponsors` |
| `/code-of-ethics` | Code of Ethics | `codeOfEthics` |
| `/in-memoriam` | Memorial | `inMemoriam` |

### 4.2 Static Generation

All pages use Static Site Generation (SSG) - no server-side rendering needed.

```typescript
// All pages are statically generated by default in App Router
// No special configuration needed
```

---

## 5. Component Architecture

### 5.1 Component Hierarchy

```
RootLayout
├── Header
│   ├── Logo
│   ├── Navigation (desktop)
│   └── MobileMenu (mobile)
├── {Page Content}
│   ├── PageHeader
│   └── Sections...
└── Footer
    ├── ContactInfo
    └── Copyright
```

### 5.2 Component Patterns

**Server Components (default):**
- All page components
- Data-loading components
- Static UI components

**Client Components (use 'use client'):**
- MobileMenu (state for open/close)
- Any interactive components
- Lightbox/Modal (if implemented)

### 5.3 Props Pattern

```typescript
// Feature components receive typed data
interface ExecutiveTeamProps {
  data: Executive;
}

export function ExecutiveTeam({ data }: ExecutiveTeamProps) {
  return (
    <div>
      <Section title="Executive Directors">
        {data.directors.map((person) => (
          <PersonCard key={person.role} {...person} />
        ))}
      </Section>
    </div>
  );
}
```

---

## 6. Image Architecture

### 6.1 Image Locations

| Category | Path | Usage |
|----------|------|-------|
| Hero/General | `/content/images/misc/` | Home page, general |
| Executive | `/content/images/executive/` | Team photos |
| Gallery | `/content/images/gallery/` | Photo gallery |
| Sponsors | `/content/images/sponsors/` | Sponsor logos |

### 6.2 Image Component Usage

```typescript
import Image from 'next/image';

// For known dimensions (preferred)
<Image
  src="/content/images/misc/home-hero.jpg"
  alt="Club gathering"
  width={1200}
  height={600}
  className="object-cover"
/>

// For responsive containers
<div className="relative aspect-video">
  <Image
    src="/content/images/gallery/gallery-1.jpg"
    alt="Gallery image"
    fill
    className="object-cover"
  />
</div>
```

### 6.3 Image Optimization

Next.js automatically:
- Converts to WebP/AVIF
- Lazy loads images below fold
- Generates multiple sizes for srcset

---

## 7. Styling Architecture

### 7.1 Tailwind Configuration

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
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

### 7.2 Style Organization

- **Tailwind utilities:** Primary styling method
- **CSS Modules:** Avoid unless absolutely necessary
- **Inline styles:** Never use
- **Global CSS:** Only for resets (handled by Tailwind)

---

## 8. Performance Architecture

### 8.1 Build Output

```
Route (app)                    Size     First Load JS
┌ ○ /                          5.2 kB        89 kB
├ ○ /code-of-ethics            2.1 kB        86 kB
├ ○ /executive                 2.8 kB        87 kB
├ ○ /gallery                   3.5 kB        87 kB
├ ○ /in-memoriam               2.3 kB        86 kB
├ ○ /newsletters               2.4 kB        86 kB
└ ○ /sponsors                  2.6 kB        87 kB

○ (Static) prerendered as static content
```

### 8.2 Performance Targets

| Metric | Target | How |
|--------|--------|-----|
| LCP | < 2.5s | Priority loading for hero image |
| FCP | < 1.5s | Minimal JS, SSG |
| CLS | < 0.1 | Fixed image dimensions |
| Lighthouse | > 90 | All optimizations applied |

### 8.3 Optimization Checklist

- [ ] Use `next/image` for all images
- [ ] Add `priority` to above-fold images
- [ ] Specify `width` and `height` or use `fill` with container
- [ ] Lazy load PDFs (only load on click)
- [ ] No unused JavaScript imports

---

## 9. Deployment Architecture

### 9.1 Vercel Deployment Flow

```
GitHub Push → Vercel Build → Static Files → Edge CDN → User
```

### 9.2 Environment

- **Production:** Main branch auto-deploys
- **Preview:** PR branches get preview URLs
- **No environment variables needed** (all static content)

### 9.3 Build Command

```bash
npm run build
```

### 9.4 Output

Static HTML + optimized assets, served from edge.

---

## 10. File Naming Conventions

### 10.1 Files

| Type | Convention | Example |
|------|------------|---------|
| Pages | `page.tsx` | `app/executive/page.tsx` |
| Layouts | `layout.tsx` | `app/layout.tsx` |
| Components | PascalCase | `PersonCard.tsx` |
| Utilities | camelCase | `content.ts` |
| Types | camelCase + `.ts` | `content.ts` |

### 10.2 Component Exports

```typescript
// Named export for components
export function PersonCard() { ... }

// Default export for pages
export default function ExecutivePage() { ... }
```

---

## 11. Error Handling

### 11.1 404 Page

```typescript
// src/app/not-found.tsx
export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold">Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link href="/" className="text-corvette-red hover:underline">
        Return Home
      </Link>
    </div>
  );
}
```

### 11.2 Error Boundary

```typescript
// src/app/error.tsx
'use client';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold">Something went wrong</h1>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
```

---

## 12. Security Considerations

### 12.1 Content Safety

- All content is static (no user input)
- No API routes needed
- No authentication required
- PDFs served directly from `/public`

### 12.2 External Links

```typescript
// Always use rel="noopener noreferrer" for external links
<a 
  href={sponsor.url} 
  target="_blank" 
  rel="noopener noreferrer"
>
  {sponsor.name}
</a>
```

---

## 13. Quick Reference: Key Files

| Purpose | Location |
|---------|----------|
| Site content data | `public/content/data/site-content.json` |
| Root layout | `src/app/layout.tsx` |
| Home page | `src/app/page.tsx` |
| Content loader | `src/lib/content.ts` |
| TypeScript types | `src/types/content.ts` |
| Tailwind config | `tailwind.config.ts` |
| Header component | `src/components/layout/Header.tsx` |
| Footer component | `src/components/layout/Footer.tsx` |

---

*This architecture document defines the technical structure. Follow it precisely to ensure consistency across developers.*
