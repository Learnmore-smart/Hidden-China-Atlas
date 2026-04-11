const fs = require('fs');
const https = require('https');
const path = require('path');

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 302) {
        downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
        return;
      }
      const stream = fs.createWriteStream(filepath);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
};

const main = async () => {
  const images = [
    { name: 'hero.jpg', url: 'https://picsum.photos/seed/hero/1920/1080' },
    { name: 'pingtan.jpg', url: 'https://picsum.photos/seed/pingtan/800/600' },
    { name: 'gannan.jpg', url: 'https://picsum.photos/seed/gannan/800/600' },
    { name: 'hongcun.jpg', url: 'https://picsum.photos/seed/hongcun/800/600' },
    { name: 'zhoushan.jpg', url: 'https://picsum.photos/seed/zhoushan/800/600' },
    { name: 'lijiang.jpg', url: 'https://picsum.photos/seed/lijiang/800/600' },
    { name: 'hulunbuir.jpg', url: 'https://picsum.photos/seed/hulunbuir/800/600' },
    { name: 'xidi.jpg', url: 'https://picsum.photos/seed/xidi/800/600' },
    { name: 'sansha.jpg', url: 'https://picsum.photos/seed/sansha/800/600' },
    { name: 'langmusi.jpg', url: 'https://picsum.photos/seed/langmusi/800/600' },
    { name: 'fenghuang.jpg', url: 'https://picsum.photos/seed/fenghuang/800/600' },
    { name: 'yueyang.jpg', url: 'https://picsum.photos/seed/yueyang/800/600' },
    { name: 'wuyuan.jpg', url: 'https://picsum.photos/seed/wuyuan/800/600' },
    { name: 'smart_planner.jpg', url: 'https://picsum.photos/seed/smart/800/600' }
  ];

  for (const img of images) {
    console.log(`Downloading ${img.name}...`);
    await downloadImage(img.url, path.join(__dirname, 'public', 'images', img.name));
  }
  console.log('Done!');
};

main();
