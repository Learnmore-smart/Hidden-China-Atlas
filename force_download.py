import urllib.request
import urllib.parse
import time
import os
import shutil

proxy_url = os.environ.get('https_proxy') or 'http://127.0.0.1:18080'
proxy = urllib.request.ProxyHandler({'http': proxy_url, 'https': proxy_url})
opener = urllib.request.build_opener(proxy)
urllib.request.install_opener(opener)

images = [
  { "prompt": "pingtan island beach stone houses landscape photography high quality", "file": "pingtan.jpg" },
  { "prompt": "gannan tibetan grassland monastery landscape photography high quality", "file": "gannan.jpg" },
  { "prompt": "hongcun ancient village water reflection huizhou architecture landscape photography high quality", "file": "hongcun.jpg" },
  { "prompt": "zhoushan islands fishing village beach sea landscape photography high quality", "file": "zhoushan.jpg" },
  { "prompt": "lijiang ancient town naxi architecture mountain landscape photography high quality", "file": "lijiang.jpg" },
  { "prompt": "hulunbuir grassland mongolian yurts nature landscape photography high quality", "file": "hulunbuir.jpg" },
  { "prompt": "xidi ancient village huizhou architecture landscape photography high quality", "file": "xidi.jpg" },
  { "prompt": "sansha town fujian traditional coastal fishing village sea landscape photography high quality", "file": "sansha.jpg" },
  { "prompt": "langmusi tibetan monastery town nature landscape photography high quality", "file": "langmusi.jpg" },
  { "prompt": "fenghuang ancient town miao architecture river landscape photography night view high quality", "file": "fenghuang.jpg" },
  { "prompt": "yueyang tower dongting lake ancient chinese architecture landscape photography high quality", "file": "yueyang.jpg" },
  { "prompt": "wuyuan rural china ancient village huizhou architecture rape flower fields landscape photography high quality", "file": "wuyuan.jpg" },
  { "prompt": "beautiful hidden china landscape nature travel photography high quality", "file": "hero.jpg" }
]

def fetch_image(img):
    file_path = os.path.join('public', 'images', img['file'])
    url = f"https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt={urllib.parse.quote(img['prompt'])}&image_size=landscape_16_9"
    
    for attempt in range(20):
        print(f"[{img['file']}] Attempt {attempt+1}")
        try:
            req = urllib.request.Request(url, method='HEAD')
            try:
                urllib.request.urlopen(req, timeout=10)
            except urllib.error.HTTPError as e:
                if e.code in (301, 302):
                    loc = e.headers.get('Location')
                    if loc and 'default.jpeg' in loc:
                        print(f"[{img['file']}] Generating, waiting 3s...")
                        time.sleep(3)
                        continue
                    elif loc:
                        print(f"[{img['file']}] Found real URL, downloading...")
                        req_get = urllib.request.Request(loc)
                        with urllib.request.urlopen(req_get, timeout=30) as response, open(file_path, 'wb') as out_file:
                            shutil.copyfileobj(response, out_file)
                        print(f"[{img['file']}] Success!")
                        return True
            except Exception as inner_e:
                 print(f"[{img['file']}] Inner Error: {inner_e}")
                 time.sleep(3)
                 continue
                 
            # If we get 200 directly
            print(f"[{img['file']}] Got 200 directly, downloading...")
            req_get = urllib.request.Request(url)
            with urllib.request.urlopen(req_get, timeout=30) as response, open(file_path, 'wb') as out_file:
                shutil.copyfileobj(response, out_file)
            print(f"[{img['file']}] Success!")
            return True
            
        except Exception as e:
            print(f"[{img['file']}] Error: {e}")
            time.sleep(3)
            
    print(f"[{img['file']}] FAILED to download after max attempts")
    return False

for img in images:
    fetch_image(img)
    
print("Script finished.")
