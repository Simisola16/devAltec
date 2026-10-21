export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; highlight?: boolean; context?: string }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Development',
    description: 'Engineering responsive, state-driven interfaces with accessible architecture and modern component systems.',
    skills: [
      { name: 'React.js', highlight: true, context: 'Used in HCPT, Skouted League, AtlasAutos, VC Invoice' },
      { name: 'Next.js (App Router)', highlight: true, context: 'Server-side rendering, API routes, Turbopack' },
      { name: 'TypeScript', highlight: true, context: 'Strict typing, Zod schema validation, API contracts' },
      { name: 'JavaScript ES6+', highlight: true, context: 'Async/await, DOM APIs, Canvas, WebSockets' },
      { name: 'Vite', highlight: false, context: 'Fast modern build tooling for SPAs' },
      { name: 'Tailwind CSS', highlight: true, context: 'Utility-first architecture, modern v4, custom theme tokens' },
      { name: 'Three.js & React Three Fiber', highlight: false, context: '3D interactive vehicle showroom in AtlasAutos' },
      { name: 'HTML5 & Semantic Web', highlight: false, context: 'Accessible, SEO-compliant document structure' },
      { name: 'Modern CSS3 & PostCSS', highlight: false, context: 'Custom glassmorphism, responsive grids, keyframes' }
    ]
  },
  {
    title: 'Backend & APIs',
    description: 'Constructing resilient RESTful APIs, real-time WebSocket pipelines, and automated document generation engines.',
    skills: [
      { name: 'Node.js', highlight: true, context: 'Microservices, batch processors, real-time servers' },
      { name: 'Express.js', highlight: true, context: 'High-throughput REST APIs, middleware pipelines' },
      { name: 'RESTful API Architecture', highlight: true, context: 'Idempotent routing, structured error responses' },
      { name: 'Real-Time WebSockets (Socket.io)', highlight: true, context: 'Zero-latency score broadcasts & audit alerts' },
      { name: 'Authentication & RBAC', highlight: true, context: 'JWT, Supabase Auth, role-separated permission gates' },
      { name: 'PDF Processing (pdf-lib, fontkit)', highlight: true, context: 'Dynamic stamped certificate & invoice generation' },
      { name: 'Headless Automation (Puppeteer)', highlight: false, context: 'Automated document rendering & scraping pipelines' },
      { name: 'Email Delivery (Resend, Nodemailer)', highlight: false, context: 'Automated transactional notification triggers' }
    ]
  },
  {
    title: 'Databases & Storage',
    description: 'Designing normalized schemas, relational structures, and scalable cloud document stores.',
    skills: [
      { name: 'PostgreSQL', highlight: true, context: 'Relational design, indexing, foreign key constraints' },
      { name: 'Supabase', highlight: true, context: 'Managed Postgres, Row-Level Security, instant REST APIs' },
      { name: 'MongoDB & Mongoose', highlight: true, context: 'Document schemas, aggregation pipelines, flexible models' },
      { name: 'SQL Schema Design', highlight: true, context: 'Entity relationship modeling, transaction integrity' },
      { name: 'Cloudinary & AWS S3', highlight: false, context: 'Object storage for compliance documents & vehicle galleries' }
    ]
  },
  {
    title: 'DevOps & Cloud',
    description: 'Automating deployment pipelines, reverse proxies, server environments, and domain security.',
    skills: [
      { name: 'Vercel', highlight: true, context: 'Edge deployment, continuous preview environments' },
      { name: 'Render', highlight: true, context: 'Node.js API hosting, persistent worker environments' },
      { name: 'Ubuntu VPS Environments', highlight: false, context: 'Linux server management, process managers (PM2)' },
      { name: 'Nginx Reverse Proxy', highlight: false, context: 'Load balancing, SSL termination, path routing' },
      { name: 'Git & GitHub Actions', highlight: true, context: 'Version control, automated CI testing, deploy hooks' },
      { name: 'SSL & DNS Configuration', highlight: false, context: 'Domain propagation, custom SSL certificates, CDN routing' }
    ]
  },
  {
    title: 'Design & Engineering Tools',
    description: 'Disciplined workflows combining product design, API exploration, and sprint delivery.',
    skills: [
      { name: 'Figma', highlight: false, context: 'UI wireframing, component tokens, responsive design systems' },
      { name: 'Postman', highlight: false, context: 'API endpoint testing, contract validation, environment variables' },
      { name: 'Visual Studio Code', highlight: false, context: 'Daily IDE with TypeScript language server integration' },
      { name: 'Agile & Scrum Workflows', highlight: false, context: 'Sprint planning, milestone tracking, iterative delivery' }
    ]
  }
];

export const PHILOSOPHY_PRINCIPLES = [
  {
    number: '01',
    title: 'Production-First Engineering',
    description:
      'Software should never be treated as merely a proof-of-concept. Every component, API route, and database schema is crafted with security, mobile responsiveness, fault tolerance, and practical deployment requirements in mind from day one.'
  },
  {
    number: '02',
    title: 'Full-Lifecycle Ownership',
    description:
      'True engineering connects the whole pipeline: translating business requirements into intuitive UI design, architecting robust backend services, structuring clean data models, orchestrating cloud deployments, and ensuring long-term maintainability.'
  },
  {
    number: '03',
    title: 'User-Centered Performance',
    description:
      'A platform is only as good as the experience it delivers to real humans. We prioritize sub-second load times, accessible interfaces, low-bandwidth resilience, and frictionless workflows that turn complicated operations into effortless interactions.'
  },
  {
    number: '04',
    title: 'Maintainable Architecture',
    description:
      'We avoid brittle shortcuts. Systems are built with clear modular boundaries, strictly typed contracts, sensible relational schemas, predictable state management, and an architecture deliberately tailored to actual business scale.'
  }
];
