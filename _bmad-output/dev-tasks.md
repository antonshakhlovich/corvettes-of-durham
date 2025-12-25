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
**Status:** `[ ]`

**Acceptance Criteria:**
- [ ] Create Next.js 16+ project with App Router
- [ ] Configure TypeScript
- [ ] Set up Tailwind CSS with custom theme
- [ ] Configure ESLint and Prettier
- [ ] Create folder structure per architecture doc
- [ ] Verify `npm run dev` works

**Command:**
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

---

### T1.2 - Configure Tailwind Theme
**Priority:** P0 (Blocker)  
**Estimate:** 10 min  
**Status:** `[ ]`  
**Depends On:** T1.1

**Acceptance Criteria:**
- [ ] Add Corvette color palette (see UX doc)
- [ ] Configure typography scale
- [ ] Set up container sizes
- [ ] Add custom font (if using)

---

### T1.3 - Set Up Content Layer
**Priority:** P0 (Blocker)  
**Estimate:** 10 min  
**Status:** `[ ]`  
**Depends On:** T1.1

**Acceptance Criteria:**
- [ ] Copy `content/` folder to `public/content/` (images, PDFs)
- [ ] Create `src/lib/content.ts` to load JSON data
- [ ] Create TypeScript types for site content
- [ ] Verify images load from `/content/images/`

---

## Phase 2: Core Components

### T2.1 - Create Layout Component
**Priority:** P0 (Blocker)  
**Estimate:** 20 min  
**Status:** `[ ]`  
**Depends On:** T1.2

**Acceptance Criteria:**
- [ ] Header with club logo and navigation
- [ ] Mobile hamburger menu
- [ ] Footer with contact info and copyright
- [ ] Responsive container wrapper
- [ ] **VALIDATE:** Navigation items match original site menu

**Original Menu Items:**
- Home
- Executive
- Newsletters
- Gallery
- Club Sponsors
- Code of Ethics
- In Memoriam

---

### T2.2 - Create Reusable UI Components
**Priority:** P1  
**Estimate:** 30 min  
**Status:** `[ ]`  
**Depends On:** T1.2

**Components to Create:**
- [ ] `Button` - Primary/Secondary variants
- [ ] `Card` - For sponsors, executive members
- [ ] `PageHeader` - Consistent page titles
- [ ] `Section` - Content sections with optional background
- [ ] `PersonCard` - For executive/in memoriam
- [ ] `SponsorLogo` - Clickable sponsor images

---

## Phase 3: Page Implementation

### T3.1 - Home Page
**Priority:** P0  
**Estimate:** 30 min  
**Status:** `[ ]`  
**Depends On:** T2.1, T2.2

**Acceptance Criteria:**
- [ ] Hero section with club banner image
- [ ] Club description paragraph
- [ ] Charity highlights (Lakeridge Health, Humane Society)
- [ ] Quick links to key pages
- [ ] **VALIDATE:** Text matches `content/data/site-content.json` → `club` section
- [ ] **VALIDATE:** Charity donation amount ($52,600) is displayed

**Content Source:** `site-content.json` → `club`, `charities`

---

### T3.2 - Executive Page
**Priority:** P1  
**Estimate:** 25 min  
**Status:** `[ ]`  
**Depends On:** T2.2

**Acceptance Criteria:**
- [ ] Display Executive Directors (President, VP, Treasurer, Secretary)
- [ ] Display Officers (all roles from JSON)
- [ ] Contact email prominently displayed
- [ ] Photos if available (executive-1.jpg, etc.)
- [ ] **VALIDATE:** All names match `site-content.json` → `executive`

**Content Source:** `site-content.json` → `executive`

---

### T3.3 - Newsletters Page
**Priority:** P1  
**Estimate:** 20 min  
**Status:** `[ ]`  
**Depends On:** T2.2

**Acceptance Criteria:**
- [ ] Grid/list of newsletter PDFs (Jan-Nov 2025)
- [ ] Each links to PDF in `/content/pdfs/newsletters/`
- [ ] Show month/year for each
- [ ] Optional: PDF preview thumbnail
- [ ] **VALIDATE:** All 11 newsletters are listed

**Content Source:** `site-content.json` → `newsletters`

---

### T3.4 - Gallery Page
**Priority:** P2  
**Estimate:** 20 min  
**Status:** `[ ]`  
**Depends On:** T2.2

**Acceptance Criteria:**
- [ ] Display gallery images in responsive grid
- [ ] Lightbox/modal for full-size view (optional for MVP)
- [ ] Alt text for accessibility
- [ ] **VALIDATE:** Images load correctly

**Content Source:** `content/images/gallery/`

---

### T3.5 - Club Sponsors Page
**Priority:** P1  
**Estimate:** 25 min  
**Status:** `[ ]`  
**Depends On:** T2.2

**Acceptance Criteria:**
- [ ] Separate sections for Gold and Silver sponsors
- [ ] Sponsor logos with links to their websites
- [ ] Graceful handling of sponsors without logos
- [ ] **VALIDATE:** All sponsor names and URLs match JSON

**Content Source:** `site-content.json` → `sponsors`

---

### T3.6 - Code of Ethics Page
**Priority:** P1  
**Estimate:** 15 min  
**Status:** `[ ]`  
**Depends On:** T2.2

**Acceptance Criteria:**
- [ ] "Members are Expected to" section with bullet points
- [ ] "Club Promises Members" section with bullet points
- [ ] Show adoption date (January 12, 2015)
- [ ] **VALIDATE:** All bullet points match JSON exactly

**Content Source:** `site-content.json` → `codeOfEthics`

---

### T3.7 - In Memoriam Page
**Priority:** P1  
**Estimate:** 20 min  
**Status:** `[ ]`  
**Depends On:** T2.2

**Acceptance Criteria:**
- [ ] Respectful layout for deceased members
- [ ] Name and dates for each person
- [ ] Special notes where applicable (e.g., Brian Lindow's VP role)
- [ ] **VALIDATE:** All 16 names and dates match JSON

**Content Source:** `site-content.json` → `inMemoriam`

---

### T3.8 - Membership Info Section
**Priority:** P2  
**Estimate:** 10 min  
**Status:** `[ ]`  
**Depends On:** T3.1

**Acceptance Criteria:**
- [ ] Link to 2026 membership form PDF
- [ ] Contact email for inquiries
- [ ] Can be part of Home page or separate section

**Content Source:** `site-content.json` → `membership`

---

## Phase 4: Polish & Optimization

### T4.1 - SEO & Metadata
**Priority:** P1  
**Estimate:** 15 min  
**Status:** `[ ]`  
**Depends On:** All T3.x tasks

**Acceptance Criteria:**
- [ ] Page titles for all routes
- [ ] Meta descriptions
- [ ] Open Graph tags
- [ ] Favicon (use Corvette emblem)

---

### T4.2 - Performance Optimization
**Priority:** P1  
**Estimate:** 15 min  
**Status:** `[ ]`  
**Depends On:** All T3.x tasks

**Acceptance Criteria:**
- [ ] Next.js Image component for all images
- [ ] Lazy loading for below-fold content
- [ ] Lighthouse Performance score > 90

---

### T4.3 - Accessibility Check
**Priority:** P1  
**Estimate:** 15 min  
**Status:** `[ ]`  
**Depends On:** All T3.x tasks

**Acceptance Criteria:**
- [ ] All images have alt text
- [ ] Color contrast meets WCAG AA
- [ ] Keyboard navigation works
- [ ] Lighthouse Accessibility score > 90

---

## Phase 5: Deployment

### T5.1 - Deploy to Vercel
**Priority:** P0  
**Estimate:** 10 min  
**Status:** `[ ]`  
**Depends On:** T4.1, T4.2

**Acceptance Criteria:**
- [ ] Push to GitHub repository
- [ ] Connect to Vercel
- [ ] Successful production build
- [ ] Custom domain (optional, can use .vercel.app for pitch)
- [ ] Share link with club

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
