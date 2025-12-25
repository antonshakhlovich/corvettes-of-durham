---
stepsCompleted: [1, 2, 3, 4, 7, 8, 9, 10, 11]
inputDocuments: []
documentCounts:
  briefs: 0
  research: 0
  brainstorming: 0
  projectDocs: 0
workflowType: 'prd'
lastStep: 11
status: 'complete'
project_name: 'corvettes-of-durham'
user_name: 'Anton'
date: '2025-12-25'
completedAt: '2025-12-25'
---

# Product Requirements Document - corvettes-of-durham

**Author:** Anton
**Date:** 2025-12-25

## Executive Summary

**Corvettes of Durham Website Rebuild** is a strategic initiative to modernize the web presence of a long-standing Corvette enthusiast club in Durham Region, Ontario. The current website, built on GoDaddy Website Builder 7.0, suffers from expired SSL certificates, no mobile responsiveness, and an outdated design that undermines the club's credibility and charitable accomplishments.

This project delivers a fully functional, modern website as a **proof-of-value pitch** — deployed and live before any formal engagement. The goal: demonstrate undeniable value to open a conversation about a mutually beneficial exchange — web development expertise in return for guidance on purchasing a Corvette.

**The Value Proposition:**
- **For the Club:** A professional, secure, mobile-friendly website that properly showcases their 25+ year history, charitable contributions ($52,600+ to Lakeridge Health), and community events
- **For Anton:** Access to a network of experienced Corvette enthusiasts who can guide the purchase of his ideal vehicle

### What Makes This Special

This isn't a cold pitch with promises — it's a working demo. By presenting a live, functional rebuild of their actual website, this project eliminates all skepticism and friction from the conversation. The club sees their content transformed instantly, making the value undeniable and the decision to engage effortless.

## Project Classification

**Technical Type:** Web Application (Next.js)
**Domain:** General (Community/Club website)
**Complexity:** Low-Medium
**Project Context:** Greenfield — new codebase, migrating existing content

**Tech Stack:**
- **Framework:** Next.js 16+ (App Router)
- **Hosting:** Vercel
- **Styling:** Tailwind CSS
- **Future Backend:** Vercel Functions (when needed)
- **Forms:** Vercel Forms or Formspree (contact/membership inquiries)

**Design Direction:** Clean & professional — light backgrounds, elegant typography, subtle automotive accents without being garish. Mobile-first, accessible, fast.

## Success Criteria

### User Success (The Club)

- **Immediate Impact:** Club members see their website and think "this is us, but *better*"
- **Credibility Boost:** Site looks professional enough to show sponsors and potential members
- **Mobile Works:** Members can finally check the site on their phones
- **Easy to Find:** Loads fast, SSL works, Google doesn't flag it as insecure

### Business Success (Your Pitch)

- **Primary Goal:** Club responds to your email wanting to learn more
- **Secondary Goal:** They see you as a long-term partner, not a one-time fixer
- **Metric:** Response within 1 week of sending the email

### Technical Success

- **Lighthouse Score:** 90+ on Performance, Accessibility, SEO
- **Mobile-First:** Fully responsive, works on all devices
- **Fast Deploy:** Live on Vercel with custom subdomain
- **Zero Maintenance Burden:** Static site, no databases, nothing to break

## Product Scope

### MVP (Tomorrow's Pitch)

All existing pages, modernized:

- ✅ **Home** — Hero, about section, charity highlights, meeting info
- ✅ **Executive** — Leadership/board members
- ✅ **Gallery** — Photo gallery (2014-2018 images migrated)
- ✅ **Newsletters** — Archive of newsletters
- ✅ **Club Sponsors** — Sponsor logos and links
- ✅ **Code of Ethics** — Club ethics document
- ✅ **In Memoriam** — Memorial page
- ✅ **Membership** — Info + link to membership form/PDF
- ✅ **Contact** — Email link, meeting details

**Technical MVP:**
- Mobile-responsive design
- Shared layout/navigation component
- Deployed to Vercel, live URL

### Post-Pitch Enhancements (If They Engage)

- Membership inquiry form (Vercel Forms)
- Events calendar
- Dynamic content updates

### Vision (Long-Term Maintenance)

- Member-only area
- Event registration
- Photo upload by members
- Newsletter email integration

## User Journeys

### Journey 1: Dave — The Curious Corvette Owner

Dave just bought his first Corvette (a 2015 C7 Stingray) and moved to Ajax last year. He's searching "Corvette clubs near Durham Ontario" and lands on the site. The homepage immediately tells him this is a legit, established club — not some abandoned project. He sees the charity work, the meeting schedule, and photos of real people with real cars. He clicks "Membership," scans the info, and fires off an email to corvettesofdurham@outlook.com. Within a week, he's at his first Wednesday meeting.

**Reveals requirements:** Clear homepage messaging, visible meeting info, easy contact access, credibility signals (charity, history).

### Journey 2: Linda — The Long-Time Member

Linda has been in the club for 12 years and helps organize events. She visits the site to grab the latest newsletter PDF to forward to a friend. She also wants to check the Code of Ethics before the next meeting because a new member asked about it. The site loads quickly, the navigation is obvious, and she finds what she needs in under 30 seconds.

**Reveals requirements:** Newsletter archive, clear navigation, fast loading, all content pages accessible.

### Journey 3: Mike — The Potential Sponsor (Auto Detailing Shop)

Mike owns a mobile detailing business in Whitby and wants to reach Corvette owners. He finds the Club Sponsors page, sees other local businesses, and notes the contact email. The professional look of the site makes the club seem worth partnering with. He sends an inquiry about sponsorship options.

**Reveals requirements:** Sponsors page with logos, contact info prominent, professional design that reflects well on partners.

### Journey 4: Anonymous — Mobile Visitor at a Car Show

Someone meets a club member at a car show and gets told "check out our website." They pull it up on their phone right there. The site loads, looks great on mobile, and they can see the next meeting date immediately. They bookmark it for later.

**Reveals requirements:** Mobile-responsive, fast load on cellular, key info visible without scrolling.

### Journey Requirements Summary

| Capability | Journeys |
|------------|----------|
| Clear homepage with club identity & credibility | 1, 3, 4 |
| Meeting info prominently displayed | 1, 4 |
| Easy contact (email link) | 1, 3 |
| Membership information | 1 |
| Newsletter archive | 2 |
| Sponsors page with logos | 3 |
| Code of Ethics page | 2 |
| Mobile-responsive design | 4 |
| Fast page load | 2, 4 |
| Professional visual design | 1, 3 |

## Web App Specific Requirements

### Project-Type Overview

This is a **static-first website** built on Next.js App Router, designed for a community organization with future extensibility in mind. The architecture prioritizes speed, low maintenance, and zero hosting costs while preserving the ability to add dynamic features (member areas, event management) without architectural changes.

### Rendering Strategy

| Route Type | Rendering Mode | Examples |
|------------|----------------|----------|
| Public pages | SSG (Static) | Home, Executive, Gallery, Sponsors, etc. |
| Future: Member area | SSR (Dynamic) | Dashboard, profile, member directory |
| Future: Events | ISR (Revalidating) | Calendar, upcoming cruises |
| Future: Admin | CSR (Client) | Content management, uploads |

**MVP:** All pages use SSG — built at deploy time, served from Vercel's edge CDN.

### Browser Support

- ✅ Chrome (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Edge (Chromium-based)
- ❌ Internet Explorer (not supported)

### Responsive Design Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| Mobile | < 640px | Phones |
| Tablet | 640px - 1024px | Tablets, small laptops |
| Desktop | > 1024px | Laptops, desktops |

Mobile-first approach: base styles for mobile, enhanced for larger screens.

### SEO Requirements

- Semantic HTML5 structure
- Meta tags (title, description) per page
- Open Graph tags for social sharing
- Canonical URLs
- Sitemap.xml generation
- robots.txt configuration

### Accessibility Standards

- WCAG 2.1 Level A compliance (baseline)
- Semantic heading hierarchy (h1 → h2 → h3)
- Alt text on all images
- Keyboard navigation support
- Sufficient color contrast
- Focus indicators on interactive elements

### Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 90+ |
| Lighthouse Accessibility | 90+ |
| Lighthouse SEO | 90+ |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |

### Image Optimization

- Next.js `<Image>` component for automatic optimization
- WebP format with fallbacks
- Lazy loading for below-fold images
- Responsive srcsets for different screen sizes

### Implementation Considerations

- **Component Library:** Tailwind CSS for utility-first styling
- **Layout System:** Shared layout with header/footer, per-page content
- **Navigation:** Responsive nav with mobile hamburger menu
- **Content Source:** Static content in MDX or JSON files (easy for non-technical updates)
- **Deployment:** Vercel with automatic deployments from Git

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**Approach:** Experience MVP
**Rationale:** The goal isn't feature richness — it's immediate impact. The club must look at this and think "wow, our content looks *this* good?" The pitch sells itself through quality, not quantity.

**Resource Requirements:** Solo developer, 1 day

### MVP Feature Set (Phase 1) — Tomorrow's Pitch

**Core Pages (All Existing Content):**
- ✅ Home (hero, about, charity, meeting info)
- ✅ Executive (leadership team)
- ✅ Gallery (photo grid with lightbox)
- ✅ Newsletters (PDF links)
- ✅ Club Sponsors (logos + links)
- ✅ Code of Ethics
- ✅ In Memoriam
- ✅ Membership info

**Technical Must-Haves:**
- ✅ Responsive layout (mobile + desktop)
- ✅ Shared header/footer navigation
- ✅ Contact email link
- ✅ Deployed to Vercel with live URL

**Explicitly Out of Scope for MVP:**
- ❌ Contact form (email link is sufficient)
- ❌ CMS or admin panel
- ❌ Member authentication
- ❌ Event calendar
- ❌ Search functionality

### Phase 2: Post-Pitch Enhancements (If They Engage)

- Membership inquiry form (Vercel Forms)
- Events/calendar page
- Newsletter signup
- Enhanced gallery with categories
- SEO refinements

### Phase 3: Long-Term Vision

- Member-only area with login
- Event registration system
- Photo upload by members
- Admin dashboard for content updates
- Email newsletter integration

### Risk Mitigation

| Risk | Mitigation |
|------|------------|
| **Time pressure** | All pages use same layout — content is the variable, not structure |
| **Content scraping** | Already validated — content is accessible via curl |
| **Image quality** | Use existing images; Next.js will optimize them |
| **Club doesn't respond** | Still a portfolio piece; zero loss |

## Functional Requirements

### Navigation & Layout

- **FR1:** Visitor can navigate between all pages using a persistent header navigation
- **FR2:** Visitor can access the site on mobile devices with a responsive hamburger menu
- **FR3:** Visitor can see consistent branding (logo, club name) on every page
- **FR4:** Visitor can access contact information from any page via footer

### Home Page

- **FR5:** Visitor can view a hero section that communicates club identity
- **FR6:** Visitor can read about the club's history and mission
- **FR7:** Visitor can see charity contribution highlights (Lakeridge Health, Humane Society)
- **FR8:** Visitor can find meeting schedule information (day, time, location pattern)
- **FR9:** Visitor can access the club's contact email

### Executive / Leadership

- **FR10:** Visitor can view the list of club executive members
- **FR11:** Visitor can see role/title for each executive member

### Gallery

- **FR12:** Visitor can browse photos of club events and member vehicles
- **FR13:** Visitor can view photos in a grid layout
- **FR14:** Visitor can click a photo to view it in larger format (lightbox)

### Newsletters

- **FR15:** Visitor can view a list of past newsletters
- **FR16:** Visitor can download/view newsletter PDFs

### Club Sponsors

- **FR17:** Visitor can view a list of club sponsors
- **FR18:** Visitor can see sponsor logos
- **FR19:** Visitor can click sponsor logos to visit sponsor websites

### Code of Ethics

- **FR20:** Visitor can read the club's Code of Ethics document

### In Memoriam

- **FR21:** Visitor can view memorial information for deceased members

### Membership

- **FR22:** Visitor can read membership information and benefits
- **FR23:** Visitor can access membership application (PDF download or email link)

### Contact & Communication

- **FR24:** Visitor can send an email to the club via email link (mailto)

## Non-Functional Requirements

### Performance

| Metric | Requirement |
|--------|-------------|
| Lighthouse Performance Score | ≥ 90 |
| First Contentful Paint (FCP) | < 1.5 seconds |
| Largest Contentful Paint (LCP) | < 2.5 seconds |
| Time to Interactive (TTI) | < 3 seconds |
| Cumulative Layout Shift (CLS) | < 0.1 |

**Rationale:** Fast loading is critical for mobile users at car shows and for making a professional impression.

### Security

| Requirement | Implementation |
|-------------|----------------|
| HTTPS/TLS encryption | Automatic via Vercel |
| No sensitive data storage | No forms collecting personal data in MVP |
| Secure external links | All external links open in new tab with `rel="noopener"` |

**Rationale:** Minimal attack surface for static site. SSL certificate (unlike current site) establishes trust.

### Accessibility

| Requirement | Standard |
|-------------|----------|
| WCAG Compliance Level | 2.1 Level A (baseline) |
| Lighthouse Accessibility Score | ≥ 90 |
| Keyboard Navigation | All interactive elements accessible |
| Screen Reader Support | Semantic HTML, ARIA labels where needed |
| Color Contrast | Minimum 4.5:1 for normal text |
| Text Sizing | Readable at 200% zoom |

**Rationale:** Club members skew older; accessible design benefits everyone and demonstrates professionalism.

### Browser & Device Compatibility

| Requirement | Specification |
|-------------|---------------|
| Mobile Devices | iOS Safari, Chrome; Android Chrome |
| Desktop Browsers | Chrome, Safari, Firefox, Edge (last 2 versions) |
| Minimum Viewport | 320px width |
| Maximum Viewport | No limit (responsive scaling) |

**Rationale:** Must work on phones at car shows and desktop at home.

