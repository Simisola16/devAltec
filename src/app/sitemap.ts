import { MetadataRoute } from 'next';
import { PROJECTS } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://devaltec.vercel.app';
  const stableDate = '2026-10-21T12:00:00.000Z';

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: stableDate,
      changeFrequency: 'weekly',
      priority: 1.0
    },
    {
      url: `${baseUrl}/work`,
      lastModified: stableDate,
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/services`,
      lastModified: stableDate,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/about`,
      lastModified: stableDate,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: stableDate,
      changeFrequency: 'monthly',
      priority: 0.8
    }
  ];

  const projectRoutes: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: stableDate,
    changeFrequency: 'monthly',
    priority: 0.85
  }));

  return [...staticRoutes, ...projectRoutes];
}
