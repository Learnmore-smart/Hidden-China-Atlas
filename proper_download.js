const https = require('https');
const fs = require('fs');
const path = require('path');

const proxyUrl = process.env.https_proxy || 'http://127.0.0.1:18080';
const { HttpsProxyAgent } = require('https-proxy-agent');
let agent = null;
if (proxyUrl) {
    agent = new HttpsProxyAgent(proxyUrl);
}

function fetchImage(prompt, filename) {
  const url = `https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=landscape_16_9`;
  const outputPath = path.join(__dirname, 'public', 'images', filename);
  
  return new Promise((resolve, reject) => {
    let attempt = 0;
    
    function makeRequest() {
      attempt++;
      console.log(`[${filename}] Attempt ${attempt}`);
      
      const req = https.request(url, { agent, method: 'GET' }, (res) => {
        if (res.statusCode === 302 || res.statusCode === 301) {
          const loc = res.headers.location;
          if (loc && loc.includes('default.jpeg')) {
            console.log(`[${filename}] Generating... (location: ${loc}) waiting 5s`);
            setTimeout(makeRequest, 5000);
          } else if (loc) {
            console.log(`[${filename}] Ready! Redirecting to: ${loc}`);
            // Download actual image
            https.get(loc, { agent }, (imgRes) => {
              if (imgRes.statusCode === 200) {
                const file = fs.createWriteStream(outputPath);
                imgRes.pipe(file);
                file.on('finish', () => {
                  file.close();
                  console.log(`[${filename}] Success!`);
                  resolve();
                });
              } else {
                 console.log(`[${filename}] Failed to get image from loc, status: ${imgRes.statusCode}`);
                 setTimeout(makeRequest, 5000);
              }
            }).on('error', (err) => {
               console.log(`[${filename}] Error fetching loc: ${err.message}`);
               setTimeout(makeRequest, 5000);
            });
          } else {
             console.log(`[${filename}] 302 but no location header!`);
             setTimeout(makeRequest, 5000);
          }
        } else if (res.statusCode === 200) {
          console.log(`[${filename}] Got 200 directly! Downloading...`);
          const file = fs.createWriteStream(outputPath);
          res.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`[${filename}] Success!`);
            resolve();
          });
        } else {
          console.log(`[${filename}] Unexpected status code: ${res.statusCode}`);
          setTimeout(makeRequest, 5000);
        }
      });
      
      req.on('error', (err) => {
         console.log(`[${filename}] Request error: ${err.message}`);
         setTimeout(makeRequest, 5000);
      });
      
      req.end();
    }
    
    makeRequest();
  });
}

const images = [
  { prompt: 'pingtan island beach stone houses landscape photography high quality', file: 'pingtan.jpg' },
  { prompt: 'gannan tibetan grassland monastery landscape photography high quality', file: 'gannan.jpg' },
  { prompt: 'hongcun ancient village water reflection huizhou architecture landscape photography high quality', file: 'hongcun.jpg' },
  { prompt: 'zhoushan islands fishing village beach sea landscape photography high quality', file: 'zhoushan.jpg' },
  { prompt: 'lijiang ancient town naxi architecture mountain landscape photography high quality', file: 'lijiang.jpg' },
  { prompt: 'hulunbuir grassland mongolian yurts nature landscape photography high quality', file: 'hulunbuir.jpg' },
  { prompt: 'xidi ancient village huizhou architecture landscape photography high quality', file: 'xidi.jpg' },
  { prompt: 'sansha town fujian traditional coastal fishing village sea landscape photography high quality', file: 'sansha.jpg' },
  { prompt: 'langmusi tibetan monastery town nature landscape photography high quality', file: 'langmusi.jpg' },
  { prompt: 'fenghuang ancient town miao architecture river landscape photography night view high quality', file: 'fenghuang.jpg' },
  { prompt: 'yueyang tower dongting lake ancient chinese architecture landscape photography high quality', file: 'yueyang.jpg' },
  { prompt: 'wuyuan rural china ancient village huizhou architecture rape flower fields landscape photography high quality', file: 'wuyuan.jpg' },
  { prompt: 'beautiful hidden china landscape nature travel photography high quality', file: 'hero.jpg' }
];

async function run() {
  const promises = images.map(img => fetchImage(img.prompt, img.file));
  await Promise.all(promises);
}

run();
