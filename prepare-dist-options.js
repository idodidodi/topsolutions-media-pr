import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');
const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');

// Copy 404.html for GitHub Pages SPA support
fs.writeFileSync(path.join(distDir, '404.html'), indexHtml);

// Create .nojekyll for GitHub Pages
fs.writeFileSync(path.join(distDir, '.nojekyll'), '');

['option1', 'option2', 'option3'].forEach((opt) => {
  const optDir = path.join(distDir, opt);
  if (!fs.existsSync(optDir)) {
    fs.mkdirSync(optDir, { recursive: true });
  }
  // Replace ./assets with ../assets for 1 level deeper subfolder
  const subHtml = indexHtml
    .replace(/href="\.\/assets\//g, 'href="../assets/')
    .replace(/src="\.\/assets\//g, 'src="../assets/')
    .replace(/href="\.\/favicon/g, 'href="../favicon');
  fs.writeFileSync(path.join(optDir, 'index.html'), subHtml);
  console.log(`Created ${opt}/index.html`);
});
