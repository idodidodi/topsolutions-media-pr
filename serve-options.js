import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, 'dist');

function createOptionServer(port, optionNumber) {
  const server = http.createServer((req, res) => {
    let reqPath = req.url.split('?')[0];
    if (reqPath === '/' || reqPath === '') {
      reqPath = '/index.html';
    }

    const filePath = path.join(distDir, reqPath);

    fs.readFile(filePath, (err, data) => {
      if (err) {
        // Fallback to index.html for SPA routing
        fs.readFile(path.join(distDir, 'index.html'), 'utf8', (err2, html) => {
          if (err2) {
            res.writeHead(404);
            res.end('Not found');
            return;
          }
          // Inject forced option and standalone mode
          const modifiedHtml = html.replace(
            '<script type="module"',
            `<script>window.__FORCED_OPTION__ = "${optionNumber}";</script><script type="module"`
          );
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(modifiedHtml);
        });
        return;
      }

      const ext = path.extname(filePath);
      const mimeTypes = {
        '.html': 'text/html',
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.svg': 'image/svg+xml',
        '.ico': 'image/x-icon',
        '.json': 'application/json',
      };
      const contentType = mimeTypes[ext] || 'application/octet-stream';

      if (ext === '.html') {
        const html = data.toString('utf8');
        const modifiedHtml = html.replace(
          '<script type="module"',
          `<script>window.__FORCED_OPTION__ = "${optionNumber}";</script><script type="module"`
        );
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(modifiedHtml);
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
      }
    });
  });

  server.listen(port, () => {
    console.log(`Option ${optionNumber} running on http://localhost:${port}`);
  });
}

createOptionServer(5001, '1');
createOptionServer(5002, '2');
createOptionServer(5003, '3');
