# Corvettes of Durham - Development Task List

> **Project Goal:** Rebuild the Corvettes of Durham club website as a modern Next.js application  
> **Timeline:** 1-day build (MVP)  
> **Source:** https://www.corvettesofdurham.ca/

---

## ⚠️ CRITICAL VALIDATION RULE

**Before marking ANY task complete, developers MUST:**
1. Compare the implemented page/component against the original website
2. Verify all content matches the scraped data in `content/data/site-content.json`
3. Ensure visual parity with modern improvements (not pixel-perfect, but content-complete)
4. Test on mobile viewport (375px) and desktop (1280px+)

---

## Task Status Legend

- `[ ]` Not Started
- `[~]` In Progress  
- `[x]` Complete
- `[!]` Blocked

---

## Phase 1: Project Setup

### T1.1 - Initialize Next.js Project
**Priority:** P0 (Blocker)  
**Estimate:** 15 min  
**Status:** `[x]` ✅

**Acceptance Criteria:**
- [x] Create Next.js 16+ project with App Router
- [x] Configure TypeScript
- [x] Set up Tailwind CSS with custom theme
- [x] Configure ESLint and Prettier
- [x] Create folder structure per architecture doc
- [x] Verify `npm run dev` works

**Command:**
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

---

### T1.2 - Configure Tailwind Theme
**Priority:** P0 (Blocker)  
**Estimate:** 10 min  
**Status:** `[x]` ✅  
**Depends On:** T1.1

**Acceptance Criteria:**
- [x] Add Corvette color palette (see UX doc)
- [x] Configure typography scale
- [x] Set up container sizes
- [x] Add custom font (if using)

---

### T1.3 - Set Up Content Layer
**Priority:** P0 (Blocker)  
**Estimate:** 10 min  
**Status:** `[x]` ✅  
**Depends On:** T1.1

**Acceptance Criteria:**
- [x] Copy `content/` folder to `public/content/` (images, PDFs)
- [x] Create `src/lib/content.ts` to load JSON data
- [x] Create TypeScript types for site content
- [x] Verify images load from `/content/images/`

---

## Phase 2: Core Components

### T2.1 - Create Layout Component
**Priority:** P0 (Blocker)  
**Estimate:** 20 min  
**Status:** `[x]` ✅  
**Depends On:** T1.2

**Acceptance Criteria:**
- [x] Header with club logo and navigation
- [x] Mobile hamburger menu
- [x] Footer with contact info and copyright
- [x] Responsive container wrapper
- [x] **VALIDATE:** Navigation items match original site menu

**Original Menu Items:**
- Home
- Executive
- Newsletters
- Gallery
- Club Sponsors
- Code of Ethics
- In Memoriam
- Membership 2026 *(added as external link)*

---

### T2.2 - Create Reusable UI Components
**Priority:** P1  
**Estimate:** 30 min  
**Status:** `[x]` ✅  
**Depends On:** T1.2

**Components to Create:**
- [x] `Button` - Primary/Secondary variants
- [x] `Card` - For sponsors, executive members
- [x] `PageHeader` - Consistent page titles
- [x] `Section` - Content sections with optional background
- [x] `PersonCard` - For executive/in memoriam
- [x] `SponsorLogo` - Clickable sponsor images
- [x] `Gallery` - Modern lightbox gallery *(bonus)*

---

## Phase 3: Page Implementation

### T3.1 - Home Page
**Priority:** P0  
**Estimate:** 30 min  
**Status:** `[x]` ✅  
**Depends On:** T2.1, T2.2

**Acceptance Criteria:**
- [x] Hero section with club banner image
- [x] Club description paragraph
- [x] Charity highlights (Lakeridge Health, Humane Society)
- [x] Quick links to key pages
- [x] **VALIDATE:** Text matches `content/data/site-content.json` → `club` section
- [x] **VALIDATE:** Charity donation amount ($52,600) is displayed

**Content Source:** `site-content.json` → `club`, `charities`

---

### T3.2 - Executive Page
**Priority:** P1  
**Estimate:** 25 min  
**Status:** `[x]` ✅  
**Depends On:** T2.2

**Acceptance Criteria:**
- [x] Display Executive Directors (President, VP, Treasurer, Secretary)
- [x] Display Officers (all roles from JSON)
- [x] Contact email prominently displayed
- [x] Photos if available (executive-1.jpg, etc.)
- [x] **VALIDATE:** All names match `site-content.json` → `executive`

**Content Source:** `site-content.json` → `executive`

---

### T3.3 - Newsletters Page
**Priority:** P1  
**Estimate:** 20 min  
**Status:** `[x]` ✅  
**Depends On:** T2.2

**Acceptance Criteria:**
- [x] Grid/list of newsletter PDFs (Jan-Nov 2025)
- [x] Each links to PDF in `/content/pdfs/newsletters/`
- [x] Show month/year for each
- [x] Optional: PDF preview thumbnail
- [x] **VALIDATE:** All 11 newsletters are listed

**Content Source:** `site-content.json` → `newsletters`

---

### T3.4 - Gallery Page
**Priority:** P2  
**Estimate:** 20 min  
**Status:** `[x]` ✅  
**Depends On:** T2.2

**Acceptance Criteria:**
- [x] Display gallery images in responsive grid
- [x] Lightbox/modal for full-size view *(implemented with modern Gallery component)*
- [x] Alt text for accessibility
- [x] **VALIDATE:** Images load correctly

**Content Source:** Remote images from nebula.wsimg.com CDN (Motorama 2025)

---

### T3.5 - Club Sponsors Page
**Priority:** P1  
**Estimate:** 25 min  
**Status:** `[x]` ✅  
**Depends On:** T2.2

**Acceptance Criteria:**
- [x] Separate sections for Gold and Silver sponsors
- [x] Sponsor logos with links to their websites
- [x] Graceful handling of sponsors without logos
- [x] **VALIDATE:** All sponsor names and URLs match JSON
- [x] Material Design card layout *(bonus)*

**Content Source:** `site-content.json` → `sponsors`

---

### T3.6 - Code of Ethics Page
**Priority:** P1  
**Estimate:** 15 min  
**Status:** `[x]` ✅  
**Depends On:** T2.2

**Acceptance Criteria:**
- [x] "Members are Expected to" section with bullet points
- [x] "Club Promises Members" section with bullet points
- [x] Show adoption date (January 12, 2015)
- [x] **VALIDATE:** All bullet points match JSON exactly

**Content Source:** `site-content.json` → `codeOfEthics`

---

### T3.7 - In Memoriam Page
**Priority:** P1  
**Estimate:** 20 min  
**Status:** `[x]` ✅  
**Depends On:** T2.2

**Acceptance Criteria:**
- [x] Respectful layout for deceased members
- [x] Name and dates for each person
- [x] Special notes where applicable (e.g., Brian Lindow's VP role)
- [x] **VALIDATE:** All 16 names and dates match JSON
- [x] Photos for all 16 members *(bonus - scraped from original)*
- [x] Sorted by date, most recent first *(bonus)*

**Content Source:** `site-content.json` → `inMemoriam`

---

### T3.8 - Membership Info Section
**Priority:** P2  
**Estimate:** 10 min  
**Status:** `[x]` ✅  
**Depends On:** T3.1

**Acceptance Criteria:**
- [x] Link to 2026 membership form PDF
- [x] Contact email for inquiries
- [x] Can be part of Home page or separate section
- [x] Header nav link to external PDF *(bonus)*

**Content Source:** `site-content.json` → `membership`

---

## Phase 4: Polish & Optimization

### T4.1 - SEO & Metadata
**Priority:** P1  
**Estimate:** 15 min  
**Status:** `[x]` ✅  
**Depends On:** All T3.x tasks

**Acceptance Criteria:**
- [x] Page titles for all routes
- [x] Meta descriptions
- [x] Open Graph tags
- [x] Favicon (SVG Corvette emblem)
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Custom 404 page

---

### T4.2 - Performance Optimization
**Priority:** P1  
**Estimate:** 15 min  
**Status:** `[x]` ✅  
**Depends On:** All T3.x tasks

**Acceptance Criteria:**
- [x] Next.js Image component for all images
- [x] Lazy loading for below-fold content
- [x] Lighthouse Performance score > 90

---

### T4.3 - Accessibility Check
**Priority:** P1  
**Estimate:** 15 min  
**Status:** `[x]` ✅  
**Depends On:** All T3.x tasks

**Acceptance Criteria:**
- [x] All images have alt text
- [x] Color contrast meets WCAG AA
- [x] Keyboard navigation works
- [x] Lighthouse Accessibility score > 90

---

## Phase 5: Deployment

### T5.1 - Deploy to Vercel
**Priority:** P0  
**Estimate:** 10 min  
**Status:** `[x]` ✅  
**Depends On:** T4.1, T4.2

**Acceptance Criteria:**
- [x] Push to GitHub repository
- [x] Connect to Vercel
- [x] Successful production build
- [x] Custom domain (optional, can use .vercel.app for pitch)
- [x] Share link with club
- [x] Auto-deploy on push to main branch

**Repository:** `git@github.com:antonshakhlovich/corvettes-of-durham.git`

---

## ✅ Completion Summary

**All 15 core tasks completed!**

| Phase | Tasks | Status |
|-------|-------|--------|
| Phase 1: Setup | T1.1, T1.2, T1.3 | ✅ Complete |
| Phase 2: Components | T2.1, T2.2 | ✅ Complete |
| Phase 3: Pages | T3.1 - T3.8 | ✅ Complete |
| Phase 4: Polish | T4.1, T4.2, T4.3 | ✅ Complete |
| Phase 5: Deploy | T5.1 | ✅ Complete |

### Bonus Features Delivered
- Modern lightbox gallery with keyboard navigation
- Mobile swipe-ready thumbnail strip
- Material Design sponsor cards
- In Memoriam photos for all 16 members
- External "Membership 2026" nav link
- Remote image hosting via nebula.wsimg.com CDN

---

## Quick Reference: File Locations

| Content Type | Location |
|--------------|----------|
| Structured Data | `content/data/site-content.json` |
| Home Images | `content/images/misc/` |
| Executive Photos | `content/images/executive/` |
| Gallery Images | `content/images/gallery/` |
| Sponsor Logos | `content/images/sponsors/` |
| Newsletters | `content/pdfs/newsletters/` |
| Membership Form | `content/pdfs/2026-membership-form.pdf` |

---

## Task Dependencies Graph

```
T1.1 ─┬─► T1.2 ─┬─► T2.1 ─┬─► T3.1 (Home)
      │         │         ├─► T3.2 (Executive)
      │         │         ├─► T3.3 (Newsletters)
      │         │         ├─► T3.4 (Gallery)
      │         │         ├─► T3.5 (Sponsors)
      │         │         ├─► T3.6 (Code of Ethics)
      │         │         └─► T3.7 (In Memoriam)
      │         │
      │         └─► T2.2 ──────┘
      │
      └─► T1.3 (Content Layer)

All T3.x ─► T4.x (Polish) ─► T5.1 (Deploy)
```

---

*Last Updated: December 25, 2025*
