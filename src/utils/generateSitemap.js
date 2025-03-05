const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://evolve2digital.com'; // Cambia esto a tu dominio real en producción

// Lista manual de posts - mantener actualizada
const posts = [
  'ai-solutions',
  'digital-evolution',
  'e2d-transformation'
];

// Lista de páginas principales
const pages = [
  '',           // home
  '/about',     // about us
  '/services',  // services
  '/contact',   // contact
  '/team',      // team
  '/blog',      // blog main page
];

function generateSitemap() {
  const blogPosts = posts.map(postId => `/blog/${postId}`);
  const allPaths = [...pages, ...blogPosts];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPaths.map(path => `  <url>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${path === '' ? '1.0' : path.startsWith('/blog/') ? '0.6' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  // Asegurarse de que el directorio public existe
  const publicDir = path.join(__dirname, '../../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Escribir el sitemap
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  console.log(`Sitemap generated at ${sitemapPath}`);
}

try {
  generateSitemap();
} catch (error) {
  console.error('Error generating sitemap:', error);
}