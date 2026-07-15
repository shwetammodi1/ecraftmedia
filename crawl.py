import re
import sys
from urllib.parse import urljoin, urlparse
import ssl
import json
import urllib.request

visited = set()
pending = ['https://ecraftmedia.com/']
pages = []

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

while pending:
    url = pending.pop(0)
    if url in visited:
        continue
    visited.add(url)
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, context=ctx, timeout=30) as resp:
            body = resp.read().decode('utf-8', errors='ignore')
            title = ''
            m = re.search(r'<title>([^<]*)</title>', body, re.IGNORECASE)
            if m:
                title = m.group(1).strip()
            pages.append({'url': url, 'title': title, 'status': resp.getcode()})
            for href in re.findall(r'href=["\']([^"\']+)["\']', body, re.IGNORECASE):
                absolute = urljoin(url, href.split('#')[0])
                parsed = urlparse(absolute)
                if parsed.scheme.startswith('http') and parsed.netloc == 'ecraftmedia.com':
                    normalized = absolute.rstrip('/')
                    if normalized and normalized not in visited and normalized not in pending:
                        pending.append(normalized)
    except Exception as e:
        pages.append({'url': url, 'title': '', 'status': 'error', 'error': str(e)})
        print('error', url, e, file=sys.stderr)

with open('crawl-pages.json', 'w', encoding='utf-8') as f:
    json.dump(pages, f, indent=2, ensure_ascii=False)
print('Done', len(pages), 'pages')
