# Task: Scrape Website Content

**Status:** Not Started  
**Priority:** P0 (Blocker for development)  
**Estimated Time:** 30-45 minutes  
**Assignee:** Developer

---

## Objective

Extract all content (text, images, PDFs) from the current Corvettes of Durham website to use as source data for the new site build.

---

## Prerequisites

- `curl` with `-k` flag (bypass expired SSL)
- Target site: `https://www.corvettesofdurham.ca/`

---

## Pages to Scrape

| Page | URL | Content Type |
|------|-----|--------------|
| Home | `/` or `/history.html` | Text, images |
| Executive | `/executive.html` | Text, images |
| Gallery | `/gallery-2014--2015--2016--2017--2018.html` | Images (many) |
| Newsletters | `/newsletters.html` | PDF links |
| Club Sponsors | `/club-sponsors.html` | Logos, links |
| Code of Ethics | `/code-of-ethics.html` | Text |
| In Memoriam | `/memorium.html` | Text, images |

---

## Output Structure

Create the following folder structure in the project:

```
/content/
  /data/
    home.json
    executive.json
    gallery.json
    newsletters.json
    sponsors.json
    code-of-ethics.json
    memoriam.json
  /images/
    /logo/
    /gallery/
    /sponsors/
    /executive/
  /pdfs/
    /newsletters/
    membership-form.pdf
```

---

## Extraction Checklist

### Home Page (`/` or `/history.html`)
- [ ] Club name and tagline
- [ ] About text (history, established 2000)
- [ ] Charity information (Lakeridge Health $52,600+, Humane Society)
- [ ] Meeting schedule (3rd Wednesday, 5:30pm)
- [ ] Contact email (corvettesofdurham@outlook.com)
- [ ] Hero/header images
- [ ] Club logo

### Executive Page (`/executive.html`)
- [ ] List of executive members
- [ ] Names and roles/titles
- [ ] Photos (if any)

### Gallery Page (`/gallery-2014--2015--2016--2017--2018.html`)
- [ ] All gallery images (download to `/images/gallery/`)
- [ ] Image captions/descriptions (if any)
- [ ] Note: May have multiple pages or years

### Newsletters Page (`/newsletters.html`)
- [ ] List of newsletter titles/dates
- [ ] PDF download URLs
- [ ] Download PDFs to `/pdfs/newsletters/`

### Club Sponsors Page (`/club-sponsors.html`)
- [ ] Sponsor names
- [ ] Sponsor logos (download to `/images/sponsors/`)
- [ ] Sponsor website URLs

### Code of Ethics Page (`/code-of-ethics.html`)
- [ ] Full ethics document text

### In Memoriam Page (`/memorium.html`)
- [ ] Memorial entries (names, dates, text)
- [ ] Memorial photos (if any)

### Membership
- [ ] Membership info text
- [ ] Membership form PDF (from home page link)
- [ ] Download to `/pdfs/membership-form.pdf`

---

## Scraping Commands Reference

```bash
# Base command to fetch a page
curl -k -sL "https://www.corvettesofdurham.ca/PAGE.html"

# Extract all image URLs from a page
curl -k -sL "https://www.corvettesofdurham.ca/PAGE.html" | grep -oE 'src="[^"]*"' | grep -E '\.(jpg|jpeg|png|gif|webp)'

# Download an image
curl -k -sL -o filename.jpg "IMAGE_URL"

# Extract text content (strip HTML)
curl -k -sL "https://www.corvettesofdurham.ca/PAGE.html" | sed 's/<[^>]*>//g' | tr -s ' \n'
```

---

## JSON Data Format

Each page should output a JSON file with structured content:

```json
// Example: home.json
{
  "clubName": "Corvettes of Durham",
  "established": 2000,
  "about": "Corvettes of Durham was established in 2000...",
  "charities": [
    {
      "name": "Oshawa Cancer Care Centre (Lakeridge Health)",
      "donated": "$52,600+"
    },
    {
      "name": "Humane Society of Durham Region",
      "donated": null
    }
  ],
  "meetings": {
    "schedule": "Every third Wednesday",
    "time": "5:30 PM",
    "location": "Various locations"
  },
  "contact": {
    "email": "corvettesofdurham@outlook.com"
  }
}
```

---

## Acceptance Criteria

- [ ] All pages scraped and content extracted
- [ ] All images downloaded and organized by folder
- [ ] All PDFs downloaded
- [ ] JSON files created with structured data
- [ ] Content verified against original site
- [ ] No broken image references

---

## Notes

- Current site has expired SSL — use `curl -k` to bypass
- Images are hosted on `nebula.wsimg.com` (GoDaddy CDN)
- Some content may be duplicated across pages
- Gallery may have many images — prioritize quality over quantity for MVP
