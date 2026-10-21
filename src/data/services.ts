export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  techStack: string[];
  verifiedReference?: string;
}

export const SERVICES: Service[] = [
  {
    id: 'fullstack-web-apps',
    title: 'Full-Stack Web Applications',
    tagline: 'End-to-end digital platforms built with modern TypeScript, React, and Node.js.',
    description:
      'We design and engineer bespoke web applications tailored to your specific business operations. From interactive user dashboards to multi-tier enterprise systems, every layer is built for speed, security, and long-term maintainability.',
    deliverables: [
      'Responsive, accessible web interfaces optimized for mobile and desktop',
      'Robust backend APIs with strict input validation and error handling',
      'Secure authentication, session management, and role-based permissions',
      'Production deployment on modern cloud platforms with continuous delivery'
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express.js', 'Tailwind CSS'],
    verifiedReference: 'Demonstrated in HCPT, Skouted League, and SmartCity portals'
  },
  {
    id: 'compliance-certification',
    title: 'Compliance & Institutional Portals',
    tagline: 'Digitizing applicant intake, multi-tier approvals, and document audits.',
    description:
      'Transform complex, manual, paperwork-heavy compliance processes into streamlined digital portals. We build systems that segregate applicant roles, auditor workflows, review queues, and administrative sign-offs.',
    deliverables: [
      'Multi-stage applicant intake pipelines with document verification',
      'Auditor inspection workspaces with conditional approval flows',
      'Cryptographic document stamping and tamper-evident audit logs',
      'Automated applicant status dispatch via email and real-time alerts'
    ],
    techStack: ['React', 'Supabase', 'Node.js', 'JWT', 'Socket.io', 'AWS S3'],
    verifiedReference: 'Demonstrated in HCPT Compliance Suite'
  },
  {
    id: 'realtime-sports-systems',
    title: 'Sports & Tournament Platforms',
    tagline: 'Zero-latency match centers, league standings, and athlete scouting archives.',
    description:
      'Purpose-built platforms for sports leagues, clubs, and scouting tournaments. We engineer live match centers that broadcast scores and events in real-time, compute league standings automatically, and maintain permanent player statistics.',
    deliverables: [
      'Real-time live score centers with minute-by-minute match tickers',
      'Automated tournament brackets, group tables, and goal differential math',
      'Verified player scouting profiles with verified career stats and match logs',
      'Exportable match summaries and social scorecard graphics'
    ],
    techStack: ['Socket.io', 'React', 'Node.js', 'Express', 'Tailwind CSS', 'jsPDF'],
    verifiedReference: 'Demonstrated in Skouted Youth League platform'
  },
  {
    id: 'document-pdf-automation',
    title: 'Document & PDF Automation Engines',
    tagline: 'Serverless generation of certificates, invoices, and compliance documentation.',
    description:
      'Eliminate manual document assembly. We engineer automated pipelines that convert dynamic database records into print-perfect, cryptographic PDF certificates, commercial invoices, and regulatory compliance reports.',
    deliverables: [
      'Dynamic vector PDF rendering using pdf-lib and fontkit',
      'QR verification codes and embedded cryptographic security watermarks',
      'Automated mathematical accounting (taxes, discounts, number-to-words currency)',
      'Direct cloud storage archiving and email attachment dispatch'
    ],
    techStack: ['pdf-lib', 'Puppeteer', 'Node.js', 'Express', 'Cloudinary', 'Resend'],
    verifiedReference: 'Demonstrated in VC Invoice, HDI Invoice, and HCPT Certificate Generators'
  },
  {
    id: 'database-api-architecture',
    title: 'REST APIs & Database Architecture',
    tagline: 'Scalable data models, high-throughput endpoints, and relational integrity.',
    description:
      'A powerful digital product requires rock-solid backend infrastructure. We design normalized SQL schemas, scalable MongoDB collections, and clean RESTful endpoints that keep your data organized, secure, and fast.',
    deliverables: [
      'REST API design with structured error handling and schema contracts',
      'PostgreSQL & MongoDB schema design and migration workflows',
      'Role-based access control (RBAC) and row-level security policies',
      'Query optimization, database indexing, and performance tuning'
    ],
    techStack: ['PostgreSQL', 'MongoDB', 'Supabase', 'Express.js', 'Zod', 'TypeScript'],
    verifiedReference: 'Demonstrated across 20+ production backend microservices'
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Deployment & DevOps',
    tagline: 'Production-ready hosting, reverse proxies, custom domains, and SSL.',
    description:
      'Deploy your applications with total confidence. We handle server configuration, reverse proxies, environment secrets management, and automated continuous deployment so your team can focus on growth.',
    deliverables: [
      'Deployment on Vercel, Render, or self-hosted Ubuntu Linux VPS environments',
      'Nginx reverse proxy configuration and process management with PM2',
      'Custom domain configuration, DNS records, and automated SSL certificates',
      'Environment security audits, rate-limiting, and uptime monitoring'
    ],
    techStack: ['Vercel', 'Render', 'Ubuntu VPS', 'Nginx', 'GitHub Actions', 'SSL/TLS'],
    verifiedReference: 'Production deployments managing live web traffic'
  }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    phase: 'Discovery & Requirements',
    title: 'Uncovering the Core Problem',
    description:
      'We begin by analyzing your business goals, target audience, technical constraints, and operational bottlenecks. We define exactly what problem the software will solve and the concrete success metrics.'
  },
  {
    number: '02',
    phase: 'Architecture & Technical Planning',
    title: 'Designing the Foundation',
    description:
      'Before writing code, we map out database schemas, API contracts, component architecture, security protocols, and third-party integrations. This eliminates costly architectural rework later.'
  },
  {
    number: '03',
    phase: 'Interface Design & Engineering',
    title: 'Building with Precision',
    description:
      'We build the application iteratively using TypeScript, React, and modular backend services. You receive regular progress updates and testable previews as features are engineered and verified.'
  },
  {
    number: '04',
    phase: 'Testing & Quality Assurance',
    title: 'Hardening the System',
    description:
      'Every route, component, and API endpoint undergoes rigorous testing across mobile and desktop devices. We verify form validation, error states, load performance, accessibility, and edge-case behaviors.'
  },
  {
    number: '05',
    phase: 'Deployment & Ongoing Support',
    title: 'Launch & Seamless Handover',
    description:
      'We configure production servers, custom domains, SSL certificates, and CI/CD pipelines. We provide comprehensive documentation, handover walkthroughs, and reliable ongoing technical maintenance.'
  }
];
