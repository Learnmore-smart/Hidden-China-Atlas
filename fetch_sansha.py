import urllib.request
import json
import time
import os

places = [
    {"query": "Fujian", "file": "sansha.jpg"},
]

proxy_url = os.environ.get('https_proxy') or 'http://127.0.0.1:18080'
proxy = urllib.request.ProxyHandler({'http': proxy_url, 'https': proxy_url})
opener = urllib.request.build_opener(proxy)
urllib.request.install_opener(opener)

def fetch_image(place):
    search_url = f"https://en.wikipedia.org/w/api.php?action=query&titles={urllib.parse.quote(place['query'])}&prop=pageimages&format=json&pithumbsize=1000"
    try:
        req = urllib.request.Request(search_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            pages = data['query']['pages']
            for page_id in pages:
                if 'thumbnail' in pages[page_id]:
                    img_url = pages[page_id]['thumbnail']['source']
                    print(f"Downloading {img_url} for {place['file']}")
                    img_req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
                    with urllib.request.urlopen(img_req) as img_res, open(os.path.join('public', 'images', place['file']), 'wb') as f:
                        f.write(img_res.read())
                    return True
    except Exception as e:
        print(f"Failed for {place['query']}: {e}")
    return False

for p in places:
    fetch_image(p)

