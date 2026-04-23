// app/sitemap/page.js
import fs from 'fs';
import path from 'path';

const appDirPath = path.join(process.cwd(), 'src/app');

async function getRoutes(dir = appDirPath, base = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let routes = [];

  for (const entry of entries) {
    if (
      entry.name.startsWith('_') ||
      entry.name === 'api' ||
      entry.name === 'layout.js' ||
      (entry.name.includes('[') && entry.name.includes(']'))
    ) continue;

    const fullPath = path.join(dir, entry.name);
    const routePath = path.join(base, entry.name);

    if (entry.isDirectory()) {
      const hasPage =
        fs.existsSync(path.join(fullPath, 'page.js')) ||
        fs.existsSync(path.join(fullPath, 'page.jsx'));

      if (hasPage) {
        routes.push(routePath.replace(/\\/g, '/'));
      }

      const subRoutes = await getRoutes(fullPath, routePath);
      routes = routes.concat(subRoutes);
    }
  }

  return routes;
}

export default async function SiteMapPage() {
  const routes = await getRoutes();
  return (
    <main className="min-h-screen py-10 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">Site Map</h1>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">{routes.length} routes</p>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {routes.map((route) => (
            <a
              key={route}
              href={`/${route}`}
              className="block p-4 rounded-lg bg-white/80 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transform transition hover:-translate-y-0.5 text-gray-900 dark:text-gray-100 wrap-break-word"
            >
              <span className="text-sm font-medium">{`/${route}`}</span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
