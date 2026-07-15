const https = require('https');
const { URL } = require('url');
const fs = require('fs');
const visited = new Set();
const pending = ['https://ecraftmedia.com/'];
const pages = [];
function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let body = '';
      res.on('data', d => body += d);
      res.on('end', () => resolve({url, body, status: res.statusCode}));
    }).on('error', reject);
  });
}
function extractLinks(html, base) {
  const re = /href=(?:"([^"]*)"|'([^']*)'|([^\s>]+))/gi;
  const links = [];
  let m;
  while ((m = re.exec(html)) !== null) {
    const raw = m[1] || m[2] || m[3];
    if (!raw) continue;
    try {
      const full = new URL(raw, base).href;
      links.push(full);
    } catch (e) {}
  }
  return links;
}
(async () => {
  while (pending.length) {
    const url = pending.shift();
    if (visited.has(url)) continue;
    visited.add(url);
    try {
      const {body, status} = await fetchPage(url);
      console.log('fetched', url, status);
      const titleMatch = body.match(/<title>([^<]*)<\/title>/i);
      const title = titleMatch ? titleMatch[1].trim() : '';
      pages.push({url, title, status});
      const links = extractLinks(body, url);
      for (const link of links) {
        if (!link.startsWith('https://ecraftmedia.com')) continue;
        const norm = link.replace(/#.*$/, '');
        if (!visited.has(norm) && !pending.includes(norm)) pending.push(norm);
      }
    } catch (err) {
      console.error('error', url, err.message);
      pages.push({url, title:'', status:'error', error:err.message});
    }
  }
  fs.writeFileSync('crawl-pages.json', JSON.stringify(pages, null, 2));
  console.log('Done', pages.length, 'pages');
})();
