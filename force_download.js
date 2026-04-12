const https = require('https');
const fs = require('fs');
const path = require('path');

const TIMEOUT_MS = 60000;

function fetchWithRetry(url, outputPath, maxRetries = 20) {
  return new Promise((resolve, reject) => {
    let attempt = 0;

    function makeRequest() {
      attempt++;
      console.log(`[Attempt ${attempt}/${maxRetries}] Fetching ${path.basename(outputPath)}...`);

      const req = https.get(url, (res) => {
        if (res.statusCode === 302 || res.statusCode === 301) {
          const loc = res.headers.location;
          if (loc && loc.includes('default.jpeg')) {
            console.log(`[Generating] ${path.basename(outputPath)} is still being generated. Waiting 5s...`);
            if (attempt >= maxRetries) return reject(new Error('Max retries reached'));
            setTimeout(makeRequest, 5000);
            return;
          } else if (loc) {
            console.log(`[Redirect] Follow to actual image: ${loc}`);
            const imgReq = https.get(loc, (imgRes) => {
              if (imgRes.statusCode === 200) {
                const file = fs.createWriteStream(outputPath);
                imgRes.pipe(file);
                file.on('finish', () => {
                  file.close();
                  console.log(`[Success] Downloaded ${path.basename(outputPath)}`);
                  resolve();
                });
              } else {
                console.log(`[Fail] Failed to download from redirect: ${imgRes.statusCode}`);
                if (attempt >= maxRetries) return reject(new Error('Max retries reached'));
                setTimeout(makeRequest, 5000);
              }
            });
            imgReq.on('error', (err) => {
              console.log(`[Error] Error downloading redirect: ${err.message}`);
              if (attempt >= maxRetries) return reject(err);
              setTimeout(makeRequest, 5000);
            });
            return;
          }
        } else if (res.statusCode === 200) {
          const file = fs.createWriteStream(outputPath);
          res.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`[Success] Downloaded ${path.basename(outputPath)} directly`);
            resolve();
          });
        } else {
           console.log(`[Fail] Unexpected status code ${res.statusCode} for ${path.basename(outputPath)}`);
           if (attempt >= maxRetries) return reject(new Error(`Status ${res.statusCode}`));
           setTimeout(makeRequest, 5000);
        }
      });

      req.on('error', (err) => {
        console.error(`[Error] Request failed: ${err.message}`);
        if (attempt >= maxRetries) return reject(err);
        setTimeout(makeRequest, 5000);
      });

      req.setTimeout(TIMEOUT_MS, () => {
        req.destroy();
        console.log(`[Timeout] Request timed out for ${path.basename(outputPath)}`);
        if (attempt >= maxRetries) return reject(new Error('Timeout'));
        setTimeout(makeRequest, 5000);
      });
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

async function main() {
  const publicDir = path.join(__dirname, 'public', 'images');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Download sequentially to avoid rate limits or overwhelming the proxy
  for (const img of images) {
    const url = `https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(img.prompt)}&image_size=landscape_16_9`;
    const outputPath = path.join(publicDir, img.file);
    try {
      await fetchWithRetry(url, outputPath);
    } catch (err) {
      console.error(`Failed to download ${img.file} completely: ${err.message}`);
    }
  }
  console.log("All downloads finished.");
}

main();
