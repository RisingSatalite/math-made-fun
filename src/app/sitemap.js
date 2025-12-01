import fs from "fs";
import path from "path";

const appDirPath = path.join(process.cwd(), "src/app");

function getRoutes(dir = appDirPath, base = "") {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let routes = [];

  for (const entry of entries) {
    if (
      entry.name.startsWith("_") ||
      entry.name === "api" ||
      entry.name === "layout.js" ||
      (entry.name.includes("[") && entry.name.includes("]"))
    ) continue;

    const fullPath = path.join(dir, entry.name);
    const routePath = path.join(base, entry.name);

    if (entry.isDirectory()) {
      const hasPage =
        fs.existsSync(path.join(fullPath, "page.js")) ||
        fs.existsSync(path.join(fullPath, "page.jsx"));

      if (hasPage) {
        routes.push(routePath.replace(/\\/g, "/"));
      }

      const subRoutes = getRoutes(fullPath, routePath);
      routes = routes.concat(subRoutes);
    }
  }

  return routes;
}

export async function sitemap() {
  const routes = getRoutes();

  return routes.map((route) => ({
    url: `https://math-made-fun.vercel.app/${route}`,
    lastModified: new Date().toISOString(),
  }));
}

export default sitemap;
