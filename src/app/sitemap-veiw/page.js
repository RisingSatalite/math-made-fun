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

  // Build a nested tree of sections so subsections can be grouped beside their root
  const root = { children: {} };

  for (const route of routes) {
    const parts = route.split('/').filter(Boolean);
    let node = root;
    let accum = '';
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      accum = accum ? `${accum}/${part}` : part;
      if (!node.children[part]) {
        node.children[part] = {
          key: part,
          fullPath: accum,
          name: prettify(part),
          path: null,
          children: {},
        };
      }
      node = node.children[part];
      if (i === parts.length - 1) node.path = route;
    }
  }

  const topLevel = Object.values(root.children).sort((a, b) => a.key.localeCompare(b.key));

  const renderCard = (node) => (
    <div className="min-w-55 max-w-xs p-3 rounded-md bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 shadow-sm">
      {node.path ? (
        <a href={`/${node.path}`} className="text-sm font-medium text-gray-900 dark:text-gray-100 block">
          {node.name}
        </a>
      ) : (
        <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{node.name}</div>
      )}
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 wrap-break-words">/{node.fullPath}</div>
    </div>
  );

  const renderNode = (node) => {
    const children = Object.values(node.children).sort((a, b) => a.key.localeCompare(b.key));
    return (
      <div key={node.fullPath || node.key} className="flex gap-6 items-start">
        {renderCard(node)}
        {children.length > 0 && (
          <div className="flex gap-6 flex-wrap">
            {children.map((child) => (
              <div key={child.fullPath} className="">
                {renderNode(child)}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <main className="min-h-screen py-10 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">Site Map</h1>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">{routes.length} routes grouped by section</p>

        <div className="space-y-6">
          {topLevel.map((section) => (
            <section key={section.key} className="bg-white/60 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{section.name}</h2>
                <span className="text-sm text-gray-600 dark:text-gray-300">{(function count(node){ return 1 + Object.values(node.children).reduce((s, c) => s + count(c), 0); })(section)} items</span>
              </div>

              <div className="flex gap-6 flex-wrap">
                {renderNode(section)}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}