export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  tagline: string;
  category: 'enterprise' | 'sports' | 'marketplace' | 'civic' | 'fintech';
  categoryLabel: string;
  featured: boolean;
  verifiedRole: string;
  timeline: string;
  liveUrl?: string;
  githubUrl?: string;
  backendGithubUrl?: string;
  status: 'Live Production' | 'Verified Active Demo' | 'Completed';
  summary: string;
  challenge: string;
  solution: string;
  architecture: string[];
  keyFeatures: string[];
  technologies: {
    frontend: string[];
    backend: string[];
    database: string[];
    devops: string[];
  };
  metrics?: { label: string; value: string }[];
}

export const PROJECTS: CaseStudy[] = [
  {
    slug: 'hcpt',
    title: 'HCPT Compliance Suite',
    client: 'Halal Certification Processing Technologies (HCPT)',
    tagline: 'Institutional certification and document compliance platform with automated verification workflows.',
    category: 'enterprise',
    categoryLabel: 'Enterprise & Compliance',
    featured: true,
    verifiedRole: 'Lead Full-Stack Architect',
    timeline: 'Production System',
    liveUrl: 'https://hcpt-flax.vercel.app',
    githubUrl: 'https://github.com/Simisola16/hcpt',
    backendGithubUrl: 'https://github.com/Simisola16/hfa-portal-backend',
    status: 'Live Production',
    summary:
      'A comprehensive institutional portal engineered to digitize candidate verification, compliance reviews, multi-tier administrative approvals, and tamper-resistant digital certificate issuance.',
    challenge:
      'Manual Halal certification involved complex paper audits, slow multi-stage review queues between applicants and compliance inspectors, and high risks of document forgery. The client needed a secure, role-separated system that could generate stamped, verifiable PDF certificates dynamically.',
    solution:
      'Architected a multi-app ecosystem comprising an applicant portal, auditor review dashboard, and Node.js microservice backend. Implemented server-side PDF generation using pdf-lib and fontkit, dynamic QR-verification watermarks, cryptographic signatures, and role-based permissions separating applicants from compliance officers.',
    architecture: [
      'Split-service architecture: high-speed client portal on React/Vite paired with Express & Supabase/MongoDB backend.',
      'Dynamic PDF processing pipeline utilizing pdf-lib, @pdf-lib/fontkit, and @pdfsmaller/pdf-encrypt-lite for cryptographic certificate stamping.',
      'Real-time status propagation using Socket.io to notify applicants immediately when compliance stages advance.',
      'Cloud storage orchestration across AWS S3 and Cloudinary for compliance audit uploads and tamper-evident document storage.'
    ],
    keyFeatures: [
      'Multi-stage application intake with real-time field validation and document upload',
      'Auditor review workbench with document inspection and conditional sign-off',
      'Dynamic cryptographic PDF certificate rendering with embedded QR verification',
      'Role-based access control (RBAC) separating applicants, inspectors, and chief auditors',
      'Real-time socket event broadcasting for instant audit status alerts',
      'Automated email notifications via Resend for document approval triggers'
    ],
    technologies: {
      frontend: ['React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Hook Form', 'Zod', 'Lucide Icons'],
      backend: ['Node.js', 'Express.js', 'Socket.io', 'pdf-lib', '@pdf-lib/fontkit', 'Puppeteer', 'Resend', 'JWT'],
      database: ['MongoDB / Mongoose', 'Supabase (PostgreSQL)'],
      devops: ['Vercel', 'AWS S3', 'Cloudinary', 'GitHub Actions']
    },
    metrics: [
      { label: 'Document Issuance', value: 'Instant dynamic PDF generation' },
      { label: 'Security Model', value: 'Role-based access control & QR verification' },
      { label: 'Stack Integrity', value: 'TypeScript & Zod end-to-end' }
    ]
  },
  {
    slug: 'skouted-youth-league',
    title: 'Skouted Youth League Platform',
    client: 'Skouted Youth League Nigeria',
    tagline: 'Youth football scouting, zero-latency match center, and tournament operations system.',
    category: 'sports',
    categoryLabel: 'Sports & Scouting',
    featured: true,
    verifiedRole: 'Full-Stack Developer & Database Architect',
    timeline: 'Production System',
    liveUrl: 'https://skoutedyouthleague.vercel.app',
    githubUrl: 'https://github.com/Simisola16/skoutedLeague',
    backendGithubUrl: 'https://github.com/Simisola16/skoutedyouthleague-backend',
    status: 'Live Production',
    summary:
      'A dedicated football competition and scouting platform built to organize live match broadcasts, tournament brackets, team management, and talent performance archives for Nigeria youth football ecosystem.',
    challenge:
      'Youth tournaments suffered from fragmented match tracking, lack of centralized verified statistics for scouts, and delayed score reporting that degraded fan and talent scout engagement.',
    solution:
      'Engineered a mobile-first live match center powered by Socket.io for zero-latency score updates, yellow/red card events, and match commentary. Designed a relational tournament schema modeling groups, knockout brackets, team rosters, and verified player metrics.',
    architecture: [
      'Event-driven live match engine using Socket.io room broadcasting to push score changes to all active viewers with minimal overhead.',
      'Node.js/Express REST API with Mongoose schema modeling players, matches, lineups, substitutions, and standings.',
      'Automated standing calculators computing goal differences, head-to-head records, and group rankings upon full-time match whistle.',
      'Client-side image and PDF summary generation using html-to-image and jsPDF for shareable match reports.'
    ],
    keyFeatures: [
      'Live Match Center with minute-by-minute event feed and score ticker',
      'Automated group standings, goal differential tables, and tournament brackets',
      'Comprehensive player scouting profiles with verified appearances, goals, and cards',
      'Team roster management with coach, staff, and formation administration',
      'One-click export of official match sheets and social match summaries'
    ],
    technologies: {
      frontend: ['React', 'Vite', 'Tailwind CSS', 'Socket.io Client', 'Lucide Icons', 'jsPDF', 'Canvas Confetti'],
      backend: ['Node.js', 'Express.js', 'Socket.io', 'Mongoose', 'Cloudinary', 'Resend', 'Node-cron'],
      database: ['MongoDB Atlas'],
      devops: ['Vercel', 'Render', 'Cloudinary']
    },
    metrics: [
      { label: 'Latency', value: 'Sub-second real-time Socket.io events' },
      { label: 'Roster System', value: 'Full player registry & verified stats' },
      { label: 'Format', value: 'Mobile-first tournament operations' }
    ]
  },
  {
    slug: 'atlasautos',
    title: 'AtlasAutos Marketplace',
    client: 'AtlasAutos Dealership Network',
    tagline: 'Automotive inventory and interactive 3D vehicle discovery platform.',
    category: 'marketplace',
    categoryLabel: 'Marketplaces & 3D',
    featured: true,
    verifiedRole: 'Frontend & Application Developer',
    timeline: 'Active Application',
    liveUrl: 'https://atlasautos-one.vercel.app',
    githubUrl: 'https://github.com/Simisola16/atlasautos',
    backendGithubUrl: 'https://github.com/Simisola16/atlasautos-backend',
    status: 'Verified Active Demo',
    summary:
      'A digital dealership and vehicle discovery platform featuring high-fidelity 3D vehicle rendering, parametric inventory filtering, and lead inquiry routing.',
    challenge:
      'Online auto buyers in emerging markets frequently encounter static, uninspiring vehicle catalogs without tactile inspection tools, causing low buyer intent and high drop-off.',
    solution:
      'Integrated Three.js and React Three Fiber to build an interactive 3D vehicle inspection showroom directly in the browser. Backed the frontend with an expressive filtering engine allowing users to filter by make, model, year, transmission, fuel type, and price range.',
    architecture: [
      'WebGL rendering pipeline using @react-three/fiber and @react-three/drei with custom camera controls and optimized lighting models.',
      'State-driven parametric search filter coordinating URL query parameters with backend PostgreSQL & MongoDB queries.',
      'Dual-database setup utilizing PostgreSQL (pg) for transactional inquiries and MongoDB for dynamic vehicle metadata.',
      'Multi-image carousel with Swiper and GSAP smooth animations for vehicle walkarounds.'
    ],
    keyFeatures: [
      'Interactive 3D vehicle showcase with 360-degree orbit and lighting controls',
      'Multi-attribute inventory filter (make, model, year, mileage, transmission, budget)',
      'High-resolution photo galleries with responsive lightbox modal inspection',
      'Direct buyer-to-dealer inquiry workflow with automated seller notification dispatch',
      'Optimized asset delivery ensuring smooth 60fps WebGL rendering across devices'
    ],
    technologies: {
      frontend: ['React', 'Three.js', '@react-three/fiber', '@react-three/drei', 'GSAP', 'Tailwind CSS', 'Swiper', 'Lucide Icons'],
      backend: ['Node.js', 'Express.js', 'PostgreSQL (pg)', 'MongoDB / Mongoose', 'Multer', 'Cloudinary', 'Socket.io'],
      database: ['PostgreSQL', 'MongoDB'],
      devops: ['Vercel', 'Render', 'Cloudinary']
    },
    metrics: [
      { label: 'Rendering', value: 'Real-time WebGL 3D inspection' },
      { label: 'Inventory Filter', value: '6-parameter dynamic search engine' },
      { label: 'Data Model', value: 'Relational + Document hybrid storage' }
    ]
  },
  {
    slug: 'smartcity-portal',
    title: 'SmartCity Civic Portal & AI Platform',
    client: 'SmartCity Initiative',
    tagline: 'Next-generation municipal digital services and citizen engagement platform powered by generative AI.',
    category: 'civic',
    categoryLabel: 'Civic & AI Systems',
    featured: true,
    verifiedRole: 'Full-Stack Software Engineer',
    timeline: 'Active Application',
    liveUrl: 'https://smartcity26.vercel.app',
    githubUrl: 'https://github.com/Simisola16/smartcity26',
    backendGithubUrl: 'https://github.com/Simisola16/smartcitybackend',
    status: 'Live Production',
    summary:
      'An intelligent municipal services platform connecting citizens with municipal services, automated inquiry triage using Google Gemini AI, and secure administrative reporting.',
    challenge:
      'Municipal authorities face severe administrative backlogs handling citizen service requests, tax inquiries, and urban maintenance reports via disjointed manual channels.',
    solution:
      'Architected a TypeScript-first web platform combining a modern public portal with a hardened Express backend integrating Google GenAI (@google/genai) for intelligent request triage and citizen guidance.',
    architecture: [
      'AI integration layer leveraging Google GenAI SDK for semantic intent classification and automated guidance response generation.',
      'Strict TypeScript contracts across client and server with zod schema verification.',
      'Security-hardened backend incorporating Helmet HTTP headers, CORS whitelisting, and JWT-authenticated municipal admin dashboards.'
    ],
    keyFeatures: [
      'Intelligent citizen inquiry assistant powered by Google Gemini',
      'Civic services directory with categorized application pathways',
      'Administrative ticket management dashboard for municipal officers',
      'Real-time status updates via Resend email transactional triggers',
      'Responsive, high-contrast accessible interface designed for civic compliance'
    ],
    technologies: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS v4', 'Motion (Framer Motion)', 'Lucide Icons'],
      backend: ['Node.js', 'TypeScript', 'Express.js', '@google/genai', 'Helmet', 'Express-Validator', 'Resend', 'JWT'],
      database: ['MongoDB Atlas'],
      devops: ['Vercel', 'Render']
    },
    metrics: [
      { label: 'AI Engine', value: 'Google Gemini SDK integration' },
      { label: 'Type Safety', value: '100% TypeScript frontend & backend' },
      { label: 'Security', value: 'Helmet + JWT + Input Sanitization' }
    ]
  },
  {
    slug: 'oluwo-of-iwo-land',
    title: 'Oluwo of Iwo Land Official Royal Portal',
    client: 'The Palace of Oluwo of Iwo Land, Osun State',
    tagline: 'Civic information portal, monarchical digital presence, and cultural heritage archive.',
    category: 'civic',
    categoryLabel: 'Civic & Cultural',
    featured: true,
    verifiedRole: 'Lead Frontend Engineer & Site Architect',
    timeline: 'Production Portal',
    liveUrl: 'https://oluwoofiwoland.vercel.app',
    githubUrl: 'https://github.com/Simisola16/-obaabdulrosheedadewaleakanbi',
    status: 'Live Production',
    summary:
      'The official royal digital presence for His Imperial Majesty, the Oluwo of Iwo Land, created to present palace proclamations, historical archives, community notices, and cultural initiatives to the global diaspora.',
    challenge:
      'Palace announcements and cultural heritage materials lacked an organized, permanent digital home accessible to citizens on mobile devices across varying mobile data bandwidths.',
    solution:
      'Developed a mobile-first, high-performance editorial portal engineered with semantic HTML5, clean typography, and optimized asset delivery for lightning-fast loads on 3G and 4G mobile connections.',
    architecture: [
      'Lightweight, zero-bloat frontend architecture optimized for low-bandwidth cellular environments common across Osun State and Nigeria.',
      'Editorial archival structure organizing royal decrees, news releases, cultural treatises, and philanthropic foundations.',
      'High-performance CDN edge caching through Vercel delivering sub-second First Contentful Paint.'
    ],
    keyFeatures: [
      'Official royal decree and palace news archive',
      'Cultural heritage documentary and historical chronicle section',
      'Mobile-optimized photo gallery celebrating royal events and civic programs',
      'Accessible reading typography with fluid font scaling and high contrast',
      'Direct royal press liaison and visitor inquiry pathways'
    ],
    technologies: {
      frontend: ['HTML5', 'Modern CSS3', 'JavaScript ES6+', 'Responsive Grid Systems', 'Google Fonts'],
      backend: ['Static Edge Generation', 'Serverless Functions'],
      database: ['Static Content Architecture'],
      devops: ['Vercel Edge Network', 'Git']
    },
    metrics: [
      { label: 'Performance', value: 'Sub-second load times on mobile 3G/4G' },
      { label: 'Reach', value: 'Global diaspora & local civic readership' },
      { label: 'Design', value: 'Regal, culturally respectful visual identity' }
    ]
  },
  {
    slug: 'vcinvoice-document-suite',
    title: 'VC Invoice & Financial Document Processing Engines',
    client: 'Commercial & Institutional Clients',
    tagline: 'Automated invoice generation, tax computation, and dynamic PDF billing engine.',
    category: 'fintech',
    categoryLabel: 'Document & FinTech',
    featured: true,
    verifiedRole: 'Full-Stack Software Engineer',
    timeline: 'Production Systems',
    liveUrl: 'https://vcinvoice.vercel.app',
    githubUrl: 'https://github.com/Simisola16/vcInvoice',
    backendGithubUrl: 'https://github.com/Simisola16/vcIvoiceBackend',
    status: 'Live Production',
    summary:
      'A suite of specialized invoice engines (VC Invoice & HDI Invoice) built to automate transactional billing, line-item tax calculations, multi-currency number-to-words formatting, and instant PDF rendering.',
    challenge:
      'Small and mid-size enterprises lose hours preparing manual invoices in spreadsheets, leading to calculation discrepancies, unbranded invoices, and delayed customer payments.',
    solution:
      'Engineered an automated invoicing platform with dual rendering pathways: instant client-side canvas preview alongside a high-fidelity serverless PDF compilation microservice using pdf-lib and headless Chromium.',
    architecture: [
      'Dual-mode document rendering: instantaneous client-side UI preview coupled with server-side pdf-lib generation for print-perfect vector output.',
      'Headless Chromium pipeline via Puppeteer and @sparticuz/chromium for pixel-perfect PDF rendering in constrained cloud environments.',
      'Mathematical accounting engine handling tax brackets, discounts, cumulative totals, and algorithmic currency conversion to textual words.'
    ],
    keyFeatures: [
      'Real-time invoice calculation with configurable taxes and itemized discounts',
      'Algorithmic number-to-words currency generator for institutional compliance',
      'Instant vector PDF download with custom branding and digital sign-off stamps',
      'Client invoice history and recurring template storage in MongoDB',
      'Confetti animations and polished micro-interactions on invoice dispatch'
    ],
    technologies: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Lucide Icons', 'Canvas Confetti'],
      backend: ['Node.js', 'Express.js', 'pdf-lib', 'Puppeteer', '@sparticuz/chromium', 'number-to-words'],
      database: ['MongoDB / Mongoose'],
      devops: ['Vercel', 'Render']
    },
    metrics: [
      { label: 'PDF Fidelity', value: '100% vector-sharp digital rendering' },
      { label: 'Generation Speed', value: 'Sub-second serverless compilation' },
      { label: 'Accuracy', value: 'Zero-discrepancy itemized tax math' }
    ]
  },
  {
    slug: 'telu-football-club',
    title: 'Telu Football Club Official Platform',
    client: 'Telu FC',
    tagline: 'Sports club portal, squad roster management, and fixture broadcast system.',
    category: 'sports',
    categoryLabel: 'Sports & Scouting',
    featured: false,
    verifiedRole: 'Full-Stack Web Developer',
    timeline: 'Active Application',
    liveUrl: 'https://telufc.vercel.app',
    githubUrl: 'https://github.com/Simisola16/telufc',
    status: 'Live Production',
    summary:
      'Official web home for Telu Football Club, providing fans, scouts, and players with match schedules, player statistics, match highlights, and club administration.',
    challenge:
      'Local football clubs often lack an authentic digital profile to showcase emerging talent to regional scouts and international academies.',
    solution:
      'Delivered a vibrant sports platform with structured player bios, upcoming fixture calendars, match results, and an academy recruitment pathway.',
    architecture: [
      'Component-driven layout optimized for matchday mobile traffic.',
      'Centralized squad data model allowing quick updates to player statistics and match outcomes.',
      'Integrated contact and scouting inquiry dispatch system.'
    ],
    keyFeatures: [
      'Squad directory with positions, numbers, and bios',
      'Fixture schedule and latest match scorecards',
      'Academy enrollment and trial registration channel',
      'High-energy modern athletic branding'
    ],
    technologies: {
      frontend: ['HTML5', 'Modern CSS3', 'JavaScript ES6+', 'Responsive Grid'],
      backend: ['Vercel Serverless Functions'],
      database: ['Static Structured JSON'],
      devops: ['Vercel']
    }
  }
];
