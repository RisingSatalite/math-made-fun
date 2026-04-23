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
  // Helper: convert "someRouteName" or "some-route" into "Some Route"
  const prettify = (raw) => {
    if (!raw) return '';
    const spaced = raw
      .replace(/[-_]/g, ' ')
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .trim();
    return spaced
      .split(/\s+/)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
  };

  // Group routes by their top-level section
  const sections = routes.reduce((acc, route) => {
    const parts = route.split('/').filter(Boolean);
    const section = parts[0] || 'root';
    const name = prettify(parts[parts.length - 1]);
    acc[section] = acc[section] || [];
    acc[section].push({ path: route, name });
    return acc;
  }, {});

  const sectionEntries = Object.entries(sections).sort((a, b) => a[0].localeCompare(b[0]));

  return (
    <main className="min-h-screen py-10 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">Site Map</h1>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">{routes.length} routes grouped by section</p>

        <div className="space-y-6">
          {sectionEntries.map(([section, items]) => (
            <section key={section} className="bg-white/60 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{prettify(section)}</h2>
                <span className="text-sm text-gray-600 dark:text-gray-300">{items.length} items</span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {items.map(({ path, name }) => (
                  <a
                    key={path}
                    href={`/${path}`}
                    className="block p-3 rounded-md bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition transform hover:-translate-y-0.5 text-gray-900 dark:text-gray-100 wrap-break-word"
                  >
                    <div className="text-sm font-medium">{name || `/${path}`}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 wrap-break-word">/{path}</div>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}