# Remove PDF resume link and phone number from portfolio

## Goal
Strip all references to the downloadable PDF resume and the phone number from the public-facing portfolio.

## Changes

### 1. Header navigation (`src/routes/index.tsx`)
- Remove the "Resume ↓" anchor that links to `/Piotr_Kazimierski_Resume.pdf` in the sticky header.

### 2. Contact section (`src/routes/index.tsx`)
- Remove the phone number `<a>` button (`tel:` link).
- Remove the "Download CV (PDF)" anchor that links to the resume PDF.
- Keep the email contact button.

### 3. JSON-LD schema (`src/routes/index.tsx`)
- Remove the `telephone` field from the `Person` structured data.

### 4. Data source (`src/data/resume.ts`)
- Remove the `phone` property from the `profile` object since it will no longer be used anywhere on the site.

## Outcome
The portfolio will display email contact only, with no phone number or PDF download references, while keeping all other content intact.
