import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import VisitorTracker from '@/components/VisitorTracker';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://devaltec.vercel.app'),
  title: {
    default: 'devAltec | Full-Stack Engineering & Digital Solutions Architecture',
    template: '%s | devAltec — Olamilekan Muhayad Olasunkanmi'
  },
  description:
    'Official engineering portfolio of Olamilekan Muhayad Olasunkanmi (Altec / Simisola16) — Full-Stack Software Engineer & Digital Solutions Architect at devAltec. Specializing in institutional compliance portals, real-time sports engines, 3D marketplaces, and document automation.',
  keywords: [
    'devAltec',
    'Olamilekan Muhayad Olasunkanmi',
    'Altec',
    'Simisola16',
    'Full-Stack Software Engineer',
    'Digital Solutions Architect',
    'React Developer Nigeria',
    'Next.js Developer',
    'Node.js REST API',
    'TypeScript Engineer',
    'HCPT Compliance Suite',
    'Skouted Youth League',
    'AtlasAutos',
    'Aptech ADSE'
  ],
  authors: [{ name: 'Olamilekan Muhayad Olasunkanmi', url: 'https://github.com/Simisola16' }],
  creator: 'Olamilekan Muhayad Olasunkanmi',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://devaltec.vercel.app',
    title: 'devAltec — Build. Innovate. Scale. | Olamilekan Muhayad Olasunkanmi',
    description:
      'High-performance full-stack web platforms, institutional portals, real-time sports systems, and automated digital workflows engineered by Olamilekan Muhayad Olasunkanmi.',
    siteName: 'devAltec',
    images: [
      {
        url: '/devaltec-logo.png',
        width: 1536,
        height: 1024,
        alt: 'devAltec — Build. Innovate. Scale. Full-Stack Engineer & Digital Solutions Architect'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'devAltec — Full-Stack Engineering & Architecture',
    description:
      'Bespoke digital platforms, compliance suites, real-time systems, and document processing engines by Olamilekan Muhayad Olasunkanmi.',
    images: ['/devaltec-logo.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://devaltec.vercel.app/#person',
        name: 'Olamilekan Muhayad Olasunkanmi',
        alternateName: ['Altec', 'Muhayad', 'Simisola16'],
        jobTitle: 'Full-Stack Software Engineer & Digital Solutions Architect',
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'Aptech Computer Education',
          programName: 'Advanced Diploma in Software Engineering (ADSE)'
        },
        url: 'https://devaltec.vercel.app',
        sameAs: ['https://github.com/Simisola16']
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://devaltec.vercel.app/#organization',
        name: 'devAltec',
        founder: {
          '@id': 'https://devaltec.vercel.app/#person'
        },
        slogan: 'Build. Innovate. Scale.',
        url: 'https://devaltec.vercel.app',
        logo: 'https://devaltec.vercel.app/devaltec-logo.png',
        description:
          'Software development and digital solutions architecture firm specializing in enterprise web applications, compliance platforms, and automated business workflows.'
      }
    ]
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#07090e] text-slate-100 bg-cyber-grid selection:bg-cyan-500/25 selection:text-cyan-200">
        <VisitorTracker />
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
