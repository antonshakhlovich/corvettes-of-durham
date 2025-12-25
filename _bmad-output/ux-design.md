# Corvettes of Durham - UX Design Document

> **Version:** 1.0  
> **Created:** December 25, 2025  
> **Purpose:** Ensure visual and interaction consistency across all developers

---

## ⚠️ MANDATORY VALIDATION RULE

**Every visual implementation MUST be compared against the original website:**
- **Source:** https://www.corvettesofdurham.ca/
- **Method:** Open original site side-by-side during development
- **Goal:** Content parity with modern, professional presentation

---

## 1. Design Philosophy

### 1.1 Core Principles

| Principle | Description |
|-----------|-------------|
| **Clean & Professional** | Not dark/aggressive like some car sites. Friendly, welcoming. |
| **Content-First** | Text and images are the focus, not flashy effects |
| **Accessible** | Readable by all ages (club has older members) |
| **Mobile-Friendly** | Many will access on phones at car shows |
| **Fast** | No unnecessary animations or heavy assets |

### 1.2 What We're NOT Doing

- ❌ Dark mode or racing themes
- ❌ Complex animations
- ❌ Parallax scrolling
- ❌ Video backgrounds
- ❌ Aggressive styling (flames, racing stripes, etc.)

---

## 2. Color Palette

### 2.1 Primary Colors

Based on Corvette heritage while maintaining readability:

| Name | Hex | Usage |
|------|-----|-------|
| **Corvette Red** | `#C10001` | Primary accent, CTAs, links on hover |
| **Racing Yellow** | `#F7E733` | Secondary accent, highlights (use sparingly) |
| **Deep Black** | `#1A1A1A` | Text, headers |
| **Pure White** | `#FFFFFF` | Backgrounds, cards |

### 2.2 Neutral Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Gray 900** | `#111827` | Primary text |
| **Gray 700** | `#374151` | Secondary text |
| **Gray 400** | `#9CA3AF` | Muted text, borders |
| **Gray 100** | `#F3F4F6` | Section backgrounds |
| **Gray 50** | `#F9FAFB` | Subtle backgrounds |

### 2.3 Semantic Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Success** | `#10B981` | Positive states |
| **Warning** | `#F59E0B` | Caution |
| **Error** | `#EF4444` | Errors |
| **Info** | `#3B82F6` | Informational |

### 2.4 Tailwind Config

```javascript
// tailwind.config.js - colors section
colors: {
  corvette: {
    red: '#C10001',
    yellow: '#F7E733',
  },
  // Use Tailwind's default gray scale
}
```

---

## 3. Typography

### 3.1 Font Stack

**Primary Font:** System font stack (fast, no external loading)

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
             'Helvetica Neue', Arial, sans-serif;
```

### 3.2 Type Scale

| Element | Size (Desktop) | Size (Mobile) | Weight | Line Height |
|---------|---------------|---------------|--------|-------------|
| H1 (Page Title) | 3rem (48px) | 2.25rem (36px) | 700 | 1.2 |
| H2 (Section) | 2.25rem (36px) | 1.875rem (30px) | 600 | 1.3 |
| H3 (Subsection) | 1.5rem (24px) | 1.25rem (20px) | 600 | 1.4 |
| Body | 1rem (16px) | 1rem (16px) | 400 | 1.6 |
| Small | 0.875rem (14px) | 0.875rem (14px) | 400 | 1.5 |
| Caption | 0.75rem (12px) | 0.75rem (12px) | 400 | 1.4 |

### 3.3 Tailwind Classes

```jsx
// Page title
<h1 className="text-4xl md:text-5xl font-bold text-gray-900">

// Section title
<h2 className="text-3xl md:text-4xl font-semibold text-gray-900">

// Body text
<p className="text-base text-gray-700 leading-relaxed">
```

---

## 4. Spacing System

Use Tailwind's default spacing scale. Key values:

| Token | Value | Usage |
|-------|-------|-------|
| `4` | 16px | Base unit, small gaps |
| `6` | 24px | Component internal padding |
| `8` | 32px | Between related elements |
| `12` | 48px | Between sections |
| `16` | 64px | Major section separation |
| `20` | 80px | Page top/bottom padding |

### 4.1 Container

```jsx
// Standard page container
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
```

---

## 5. Component Specifications

### 5.1 Buttons

**Primary Button:**
```jsx
<button className="bg-corvette-red hover:bg-red-700 text-white 
                   font-semibold py-3 px-6 rounded-lg 
                   transition-colors duration-200">
```

**Secondary Button:**
```jsx
<button className="border-2 border-corvette-red text-corvette-red 
                   hover:bg-corvette-red hover:text-white
                   font-semibold py-3 px-6 rounded-lg 
                   transition-colors duration-200">
```

### 5.2 Cards

**Standard Card:**
```jsx
<div className="bg-white rounded-xl shadow-md hover:shadow-lg 
                transition-shadow duration-200 overflow-hidden">
  <div className="p-6">
    {/* content */}
  </div>
</div>
```

**Person Card (Executive/Memorial):**
```jsx
<div className="bg-white rounded-xl shadow-md p-6 text-center">
  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100">
    {/* image or placeholder */}
  </div>
  <h3 className="font-semibold text-lg">{name}</h3>
  <p className="text-corvette-red font-medium">{role}</p>
</div>
```

### 5.3 Navigation

**Desktop Nav:**
- Horizontal layout
- Logo on left, links on right
- Links: `text-gray-700 hover:text-corvette-red`
- Active link: `text-corvette-red font-semibold`

**Mobile Nav:**
- Hamburger icon (3 horizontal lines)
- Full-screen overlay when open
- Links stacked vertically

### 5.4 Page Header

Each page should have a consistent header:

```jsx
<header className="bg-gray-50 py-12 md:py-16">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
      {pageTitle}
    </h1>
    {subtitle && (
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
  </div>
</header>
```

---

## 6. Layout Patterns

### 6.1 Page Structure

```
┌─────────────────────────────────────┐
│            Header / Nav              │
├─────────────────────────────────────┤
│          Page Title Section          │
├─────────────────────────────────────┤
│                                      │
│          Main Content                │
│                                      │
├─────────────────────────────────────┤
│              Footer                  │
└─────────────────────────────────────┘
```

### 6.2 Grid Layouts

**3-Column Grid (Sponsors, Executive):**
```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
```

**2-Column Grid (Content + Sidebar):**
```jsx
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  <div className="lg:col-span-2">{/* main */}</div>
  <div>{/* sidebar */}</div>
</div>
```

**Newsletter Grid:**
```jsx
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
```

---

## 7. Imagery

### 7.1 Image Treatment

- **Hero Images:** Full-width, max-height 500px, object-cover
- **Card Images:** Aspect ratio 16:9 or 4:3
- **Profile Photos:** Square or circular crop
- **Sponsor Logos:** Contain within bounds, don't stretch

### 7.2 Next.js Image Usage

```jsx
import Image from 'next/image'

<Image
  src="/content/images/misc/home-hero.jpg"
  alt="Corvettes of Durham club gathering"
  width={1200}
  height={600}
  className="object-cover"
  priority // for above-fold images
/>
```

### 7.3 Placeholder for Missing Images

```jsx
<div className="bg-gray-200 flex items-center justify-center">
  <span className="text-gray-400 text-4xl">🚗</span>
</div>
```

---

## 8. Responsive Breakpoints

Use Tailwind's default breakpoints:

| Breakpoint | Min Width | Usage |
|------------|-----------|-------|
| `sm` | 640px | Large phones, small tablets |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large monitors |

**Mobile-First Approach:**
```jsx
// Always start with mobile, add breakpoints for larger screens
<div className="text-sm md:text-base lg:text-lg">
```

---

## 9. Accessibility Requirements

### 9.1 Color Contrast

- Text on white: minimum 4.5:1 ratio
- Large text (18px+): minimum 3:1 ratio
- Never rely on color alone to convey information

### 9.2 Interactive Elements

- All buttons/links: visible focus state
- Focus outline: `focus:ring-2 focus:ring-corvette-red focus:ring-offset-2`
- Touch targets: minimum 44x44px

### 9.3 Images

- All images MUST have descriptive `alt` text
- Decorative images: `alt=""`
- Complex images: provide text description nearby

### 9.4 Forms (Future)

- Labels for all inputs
- Error messages associated with fields
- Clear validation feedback

---

## 10. Animation & Transitions

### 10.1 Allowed Animations

- Hover state changes (color, shadow): `transition-all duration-200`
- Mobile menu open/close: slide or fade
- Image hover zoom: `hover:scale-105 transition-transform duration-300`

### 10.2 Performance Rules

- No animations on page load
- Use `transform` and `opacity` only (GPU accelerated)
- Respect `prefers-reduced-motion`

```jsx
<div className="motion-safe:transition-transform motion-safe:hover:scale-105">
```

---

## 11. Reference: Original Site Screenshots

When implementing, compare against these key visual elements from the original:

| Page | Key Elements to Preserve |
|------|-------------------------|
| Home | Main club description, charity info, navigation links |
| Executive | Role hierarchy (Directors vs Officers), contact info |
| Newsletters | Chronological list, download functionality |
| Sponsors | Gold/Silver tier separation, logo display |
| Code of Ethics | Two-column structure (Member Expectations / Club Promises) |
| In Memoriam | Respectful listing with dates, special notes |

---

## 12. Quick Reference Card

### Colors
- Primary: `bg-corvette-red` / `text-corvette-red` (#C10001)
- Secondary: `bg-corvette-yellow` (#F7E733)
- Text: `text-gray-900` (headings), `text-gray-700` (body)

### Spacing
- Section padding: `py-12 md:py-16`
- Card padding: `p-6`
- Grid gap: `gap-6` or `gap-8`

### Typography
- H1: `text-4xl md:text-5xl font-bold`
- H2: `text-3xl md:text-4xl font-semibold`
- Body: `text-base text-gray-700 leading-relaxed`

### Container
```jsx
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
```

---

*This document is the single source of truth for visual design decisions. All developers MUST follow these specifications.*
