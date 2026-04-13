const https = require('https');
const fs = require('fs');
const path = require('path');

const fetchImage = (prompt, filename) => {
  return new Promise((resolve, reject) => {
    const url = `https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=landscape_16_9`;
    
    const check = () => {
      console.log(`Checking ${filename}...`);
      https.get(url, (res) => {
        const loc = res.headers.location;
        if (res.statusCode === 302 && loc && loc.includes('default.jpeg')) {
          console.log(`${filename} still generating, waiting 5s...`);
          setTimeout(check, 5000);
        } else if (res.statusCode === 302 && loc && !loc.includes('default.jpeg')) {
          console.log(`${filename} generated at ${loc}! Downloading...`);
          https.get(loc, (imgRes) => {
            const file = fs.createWriteStream(path.join(__dirname, 'public', 'images', filename));
            imgRes.pipe(file);
            file.on('finish', () => {
              file.close();
              resolve();
            });
          }).on('error', reject);
        } else if (res.statusCode === 200) {
          console.log(`${filename} returned 200 directly!`);
          const file = fs.createWriteStream(path.join(__dirname, 'public', 'images', filename));
          res.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve();
          });
        } else {
          console.log(`Unexpected response for ${filename}: ${res.statusCode} ${loc}`);
          setTimeout(check, 5000);
        }
      }).on('error', (err) => {
        console.error(`Error checking ${filename}:`, err);
        setTimeout(check, 5000);
      });
    };
    
    check();
  });
};

const main = async () => {
  const images = [
    { prompt: 'pingtan island beach stone houses landscape photography high quality', file: 'pingtan.jpg' },
    { prompt: 'gannan tibetan grassland monastery landscape photography high quality', file: 'gannan.jpg' },
  ];
  
  await Promise.all(images.map(img => fetchImage(img.prompt, img.file)));
  console.log("Done");
};

main();
