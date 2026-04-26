# Sterling Legal Partners — Next.js Website

A premium, production-ready legal consulting website built with Next.js 14 (App Router) + Tailwind CSS.

---

## 📁 Project Structure

```
sterling-legal/
├── app/
│   ├── layout.tsx          # Root layout (fonts, Navbar, Footer)
│   ├── globals.css         # Global styles + Tailwind
│   ├── page.tsx            # Home (/)
│   ├── about/
│   │   └── page.tsx        # About (/about)
│   ├── services/
│   │   └── page.tsx        # Services (/services)
│   ├── team/
│   │   └── page.tsx        # Team (/team)
│   └── contact/
│       └── page.tsx        # Contact (/contact)
├── components/
│   ├── Navbar.tsx          # Sticky nav with mobile hamburger
│   └── Footer.tsx          # Full footer with CTA bar
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── tsconfig.json
```

---

## 🚀 Local Development

### Prerequisites
- Node.js 18.17+ 
- npm or yarn

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🌐 Deploy to Vercel (Recommended)

### Option 1: GitHub + Vercel (Easiest)

1. Push this project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Sterling Legal Partners"
   git remote add origin https://github.com/yourusername/sterling-legal.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click **"New Project"** → Import your GitHub repository

4. Vercel auto-detects Next.js — click **"Deploy"**

5. Your site will be live at `https://sterling-legal-xxx.vercel.app` in ~60 seconds

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel

# Follow prompts, then for production:
vercel --prod
```

### Option 3: Build & Deploy Manually

```bash
# Build for production
npm run build

# Start production server locally
npm run start
```

---

## 🎨 Customisation Guide

### Colors (tailwind.config.js)
```js
navy: { DEFAULT: '#0A1628', ... }
gold: { DEFAULT: '#C9A84C', ... }
```

### Fonts (app/layout.tsx)
Uses Google Fonts:
- **Playfair Display** — headings
- **Inter** — body text

### Content
- **Home**: `app/page.tsx` — testimonials, stats, service previews
- **About**: `app/about/page.tsx` — story, values, why choose us
- **Services**: `app/services/page.tsx` — 6 service cards
- **Team**: `app/team/page.tsx` — 6 team member cards
- **Contact**: `app/contact/page.tsx` — form + contact info

### Team Photos
Replace the `placehold.co` URLs in `app/team/page.tsx` with real image URLs or local `/public/` images.

### Contact Form
The form currently uses client-side state. To make it functional, connect to:
- **Resend** or **Nodemailer** via a Next.js API Route (`app/api/contact/route.ts`)
- **Formspree** (drop-in HTML form handler)
- **EmailJS** (client-side email)

---

## 📦 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 14.2.5 | React framework (App Router) |
| React | 18 | UI library |
| Tailwind CSS | 3.4.1 | Utility-first CSS |
| TypeScript | 5 | Type safety |
| Google Fonts | — | Playfair Display + Inter |

**Zero external UI dependencies** — pure Next.js + Tailwind only.

---

## ✅ Features Checklist

- [x] 5 pages: Home, About, Services, Team, Contact
- [x] Sticky navbar with active page highlighting
- [x] Mobile hamburger menu with smooth animation
- [x] Scroll-aware navbar (transparent → solid)
- [x] Hero sections on every page
- [x] 6 service cards with icons and area lists
- [x] 6 team cards with hover overlay + LinkedIn
- [x] Contact form with validation + success state
- [x] Google Maps embed (Canary Wharf)
- [x] Stats section (20+ years, 500+ clients, 98% rate, 50+ attorneys)
- [x] 3 testimonials with star ratings
- [x] Premium footer with CTA bar
- [x] Fully responsive (mobile + tablet + desktop)
- [x] Navy (#0A1628) + Gold (#C9A84C) brand palette
- [x] Playfair Display headings + Inter body
- [x] Smooth hover animations throughout
- [x] Custom gold scrollbar
- [x] SEO metadata in layout.tsx
