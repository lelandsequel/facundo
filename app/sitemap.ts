import { MetadataRoute } from 'next';
import { services, locations } from '@/lib/pseo-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://facunoconstruction.com';

  // Core pages
  const routes = [
    '',
    '/about',
    '/contact',
    '/gallery',
    '/services',
    '/locations',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Service pages
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // pSEO Location pages (Cross-product)
  const pseoRoutes = services.flatMap((service) =>
    locations.map((location) => ({
      url: `${baseUrl}/services/${service.slug}/${location.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  return [...routes, ...serviceRoutes, ...pseoRoutes];
}


