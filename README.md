# devAltec — Official Portfolio & Engineering Showcase

> **Build • Innovate • Scale**  
> Production-ready, full-stack software engineering portfolio for **devAltec**, featuring **Olamilekan Muhayad Olasunkanmi** (Altec / Muhayad) — Full-Stack Software Engineer & Digital Solutions Architect.  
> **Contact**: [olamilekanmuhayad@yahoo.com](mailto:olamilekanmuhayad@yahoo.com) • WhatsApp / Call: [+234 808 574 2261](https://wa.me/2348085742261) (08085742261)

---

## ⚡ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Monogram Systems
- **Animations & Effects**: Modern CSS GPU transforms, backdrop glassmorphism, responsive cyber-mesh gradients
- **Deployment Targets**: [Vercel](https://vercel.com/) (Recommended), [Render](https://render.com/), or Ubuntu VPS with Nginx

---

## 🚀 Key Features

1. **Brand Architecture**:
   - Distinct corporate brand identity (**devAltec**) paired with authentic professional representation for **Olamilekan Muhayad Olasunkanmi**.
   - Custom scalable SVG monogram and wordmark (`DevAltecLogo.tsx`) based on the brand mark.
   - High-contrast, dark technology aesthetic with deep charcoal palettes (`#080a0f`, `#0d1117`), obsidian surfaces, and electric cyan / cobalt gradients (`#00f0ff`, `#3b82f6`).

2. **Audited Real-World Case Studies**:
   - 7 in-depth case studies with verified architectures, problems, solutions, tech stacks, live demos, and GitHub repository links:
     - **HCPT Compliance Suite**: Institutional compliance & dynamic PDF certificate engine.
     - **Skouted Youth League**: Real-time sports tournament management with live event broadcasts.
     - **AtlasAutos**: Interactive 3D WebGL vehicle showroom & inventory filtering ([https://atlasautos-one.vercel.app](https://atlasautos-one.vercel.app)).
     - **Oluwo of Iwo Land Royal Portal**: High-traffic civic archive optimized for low-bandwidth environments.
     - **SmartCity 2026**: Modern municipal portal and citizen utility directory.
     - **VC Invoice Automation**: Invoicing platform with PDF export and accounting workflows.
     - **Telu Football Club**: Official sports platform and academy fixtures system.

3. **Complete Page Ecosystem**:
   - `/` — Hero with verified proof metrics, technical biography, engineering philosophy, skills matrix, featured work, service offerings, and working process.
   - `/work` — Filterable project directory with dynamic category tabs (All, Enterprise / SaaS, Real-Time Systems, 3D / WebGL, Civic / Portal, Sports Tech).
   - `/work/[slug]` — Deep-dive case study layouts with architectural highlights, deliverables, and call-to-action blocks.
   - `/services` — 6 structured enterprise service packages with clear business deliverables.
   - `/about` — Extended biography, technical foundation (Aptech ADSE), and engineering principles.
   - `/contact` — Client intake form with client-side & server-side validation, error handling, and receipt generation.
   - `404` — Custom-designed not-found page with quick navigation back to safe zones.

4. **Production Intake Workflow**:
   - Server-side route handler at `/api/contact` enforcing strict input validation.
   - Generates unique tracking IDs (e.g., `inq_1792605...`) and provides real feedback states.
   - Easily connectable to Resend, SendGrid, or Supabase via environment variables.

5. **SEO & Accessibility**:
   - Dynamic `sitemap.ts` and `robots.ts` auto-generating XML sitemaps for search engines.
   - Open Graph and Twitter card metadata for high-impact social previews.
   - Semantic HTML5, accessible color contrast ratios, keyboard focus indicators, and screen-reader labels.

---

## 🛠️ Getting Started

### 1. Prerequisites
- **Node.js**: v18.17.0 or higher (Node 20+ recommended)
- **Package Manager**: `npm` (v9+) or `pnpm`

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/Simisola16/altech.git
cd altech
npm install
```

### 3. Running Locally
Start the development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Type Checking & Production Build
Validate types and compile the optimized production bundle:
```bash
npm run build
```

To test the production build locally:
```bash
npm run start
```

---

## 🌐 Deployment Guidelines

### Option A: Vercel (Recommended)
1. Push your repository to GitHub.
2. Visit [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your repository (`Simisola16/altech` or your designated repo name).
4. Vercel automatically detects Next.js:
   - **Framework Preset**: Next.js
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
5. *(Optional)* Add any environment variables in the Vercel dashboard:
   - `RESEND_API_KEY`: *(Optional, for sending email notifications on form submit)*
   - `CONTACT_NOTIFICATION_EMAIL`: *(Your receiving email, e.g. `contact@devaltec.com`)*
6. Click **Deploy**.

### Option B: Ubuntu VPS with Nginx & PM2
1. Pull the repository onto your server.
2. Run `npm install && npm run build`.
3. Start the application with PM2:
   ```bash
   pm2 start npm --name "devaltec-web" -- start -- -p 3000
   ```
4. Configure Nginx reverse proxy to forward requests from port 80/443 to `http://127.0.0.1:3000`.

---

## 📁 Project Structure

```
├── public/
│   ├── devaltec-logo.png     # Brand asset logo reference
│   └── favicon.svg           # High-resolution vector favicon
├── src/
│   ├── app/
│   │   ├── api/contact/      # Server-side contact intake API
│   │   ├── about/            # About page route
│   │   ├── contact/          # Contact page route
│   │   ├── services/         # Services catalogue route
│   │   ├── work/             # Filterable portfolio directory
│   │   │   └── [slug]/       # Dynamic case study route
│   │   ├── globals.css       # Design tokens, cyber-grid & utilities
│   │   ├── layout.tsx        # Root layout with Navbar, Footer & SEO
│   │   ├── not-found.tsx     # Custom 404 handler
│   │   ├── page.tsx          # Master landing page
│   │   ├── robots.ts         # Robots.txt generator
│   │   └── sitemap.ts        # Dynamic XML sitemap
│   ├── components/
│   │   ├── ContactForm.tsx   # Validated client inquiry form
│   │   ├── DevAltecLogo.tsx  # Crisp SVG monogram & wordmark
│   │   ├── Footer.tsx        # High-contrast site footer
│   │   ├── GithubIcon.tsx    # Standalone SVG GitHub icon
│   │   ├── Navbar.tsx        # Glassmorphic header with mobile drawer
│   │   └── ProjectCard.tsx   # Interactive project showcase card
│   └── data/
│       ├── projects.ts       # Audited project case studies & metadata
│       ├── services.ts       # Service packages & 5-step engineering process
│       └── skills.ts         # Verified technical skills & philosophies
├── GITHUB_AUDIT_REPORT.md    # Comprehensive 56-repo GitHub audit
├── package.json
└── tsconfig.json
```

---

## 🛡️ License
Copyright © 2026 devAltec. Built by **Olamilekan Muhayad Olasunkanmi**. All rights reserved.
