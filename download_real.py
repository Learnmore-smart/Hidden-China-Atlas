import urllib.request
import urllib.parse
import time
import os

# Set up proxy if needed
proxy_url = os.environ.get('https_proxy') or 'http://127.0.0.1:18080'
proxy = urllib.request.ProxyHandler({'http': proxy_url, 'https': proxy_url})
opener = urllib.request.build_opener(proxy)
urllib.request.install_opener(opener)

def download_image(prompt, filename):
    url = f"https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt={urllib.parse.quote(prompt)}&image_size=landscape_16_9"
    filepath = os.path.join("public", "images", filename)
    print(f"Fetching {filename}...")
    
    # Try 10 times max per image to avoid infinite loops
    for _ in range(15):
        try:
            class NoRedirect(urllib.request.HTTPRedirectHandler):
                def redirect_request(self, req, fp, code, msg, headers, newurl):
                    return None # Do not redirect automatically
            
            opener_noredir = urllib.request.build_opener(proxy, NoRedirect())
            req = urllib.request.Request(url)
            
            response = opener_noredir.open(req)
            # If 200, download
            with open(filepath, 'wb') as f:
                f.write(response.read())
            print(f"Downloaded {filename} directly.")
            return
            
        except urllib.error.HTTPError as e:
            if e.code == 302:
                loc = e.headers.get('Location')
                if 'default.jpeg' in loc:
                    print(f"Generating {filename}... waiting 5s")
                    time.sleep(5)
                else:
                    print(f"Ready! Downloading {filename} from {loc}")
                    # Download the actual location
                    req2 = urllib.request.Request(loc)
                    with opener.open(req2) as resp2, open(filepath, 'wb') as f:
                        f.write(resp2.read())
                    return
            else:
                print(f"HTTP Error {e.code} for {filename}")
                time.sleep(5)
        except Exception as e:
            print(f"Error: {e}")
            time.sleep(5)

images = [
    {"prompt": "pingtan island beach stone houses landscape photography high quality", "file": "pingtan.jpg"},
    {"prompt": "gannan tibetan grassland monastery landscape photography high quality", "file": "gannan.jpg"},
    {"prompt": "hongcun ancient village water reflection huizhou architecture landscape photography high quality", "file": "hongcun.jpg"},
    {"prompt": "zhoushan islands fishing village beach sea landscape photography high quality", "file": "zhoushan.jpg"},
    {"prompt": "lijiang ancient town naxi architecture mountain landscape photography high quality", "file": "lijiang.jpg"},
    {"prompt": "hulunbuir grassland mongolian yurts nature landscape photography high quality", "file": "hulunbuir.jpg"},
    {"prompt": "xidi ancient village huizhou architecture landscape photography high quality", "file": "xidi.jpg"},
    {"prompt": "sansha town fujian traditional coastal fishing village sea landscape photography high quality", "file": "sansha.jpg"},
    {"prompt": "langmusi tibetan monastery town nature landscape photography high quality", "file": "langmusi.jpg"},
    {"prompt": "fenghuang ancient town miao architecture river landscape photography night view high quality", "file": "fenghuang.jpg"},
    {"prompt": "yueyang tower dongting lake ancient chinese architecture landscape photography high quality", "file": "yueyang.jpg"},
    {"prompt": "wuyuan rural china ancient village huizhou architecture rape flower fields landscape photography high quality", "file": "wuyuan.jpg"},
    {"prompt": "beautiful hidden china landscape nature travel photography high quality", "file": "hero.jpg"}
]

for img in images:
    download_image(img["prompt"], img["file"])

print("All done!")
