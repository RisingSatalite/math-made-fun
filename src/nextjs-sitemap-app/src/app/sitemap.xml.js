import { getRoutes } from '../lib/generateSitemap';

export const dynamic = 'force-dynamic';

export default async function Sitemap() {
  const routes = await getRoutes();

  const xmlRoutes = routes
    .map((route) => {
      return `
        <url>
          <loc>${`https://yourdomain.com/${route}`}</loc>
          <changefreq>weekly</changefreq>
          <priority>0.5</priority>
        </url>
      `;
    })
    .join('');

  const xmlSitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image/1.1">
    ${xmlRoutes}
  </urlset>`;

  return new Response(xmlSitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}