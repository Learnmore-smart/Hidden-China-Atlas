const fs = require('fs');
const path = require('path');

const generateSVG = (text, width, height, bg, fg) => `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${bg}" />
  <text x="50%" y="50%" font-family="sans-serif" font-size="${Math.floor(width/10)}px" fill="${fg}" text-anchor="middle" dominant-baseline="middle">
    ${text}
  </text>
</svg>
`.trim();

const images = [
  { name: 'hero.svg', text: 'Hero Landscape', w: 1920, h: 1080, bg: '#2d3748', fg: '#e2e8f0' },
  { name: 'pingtan.svg', text: 'Pingtan Island', w: 800, h: 600, bg: '#3182ce', fg: '#ebf8ff' },
  { name: 'gannan.svg', text: 'Gannan Tibetan', w: 800, h: 600, bg: '#38a169', fg: '#f0fff4' },
  { name: 'hongcun.svg', text: 'Hongcun Village', w: 800, h: 600, bg: '#718096', fg: '#f7fafc' },
  { name: 'zhoushan.svg', text: 'Zhoushan Islands', w: 800, h: 600, bg: '#2b6cb0', fg: '#ebf8ff' },
  { name: 'lijiang.svg', text: 'Lijiang Ancient Town', w: 800, h: 600, bg: '#c53030', fg: '#fff5f5' },
  { name: 'hulunbuir.svg', text: 'Hulunbuir Grassland', w: 800, h: 600, bg: '#2f855a', fg: '#f0fff4' },
  { name: 'xidi.svg', text: 'Xidi Village', w: 800, h: 600, bg: '#4a5568', fg: '#f7fafc' },
  { name: 'sansha.svg', text: 'Sansha Town', w: 800, h: 600, bg: '#2c5282', fg: '#ebf8ff' },
  { name: 'langmusi.svg', text: 'Langmusi', w: 800, h: 600, bg: '#97266d', fg: '#fff5f5' },
  { name: 'fenghuang.svg', text: 'Fenghuang', w: 800, h: 600, bg: '#805ad5', fg: '#faf5ff' },
  { name: 'yueyang.svg', text: 'Yueyang Tower', w: 800, h: 600, bg: '#b83280', fg: '#fff5f5' },
  { name: 'wuyuan.svg', text: 'Wuyuan', w: 800, h: 600, bg: '#d69e2e', fg: '#fffff0' },
  { name: 'smart_planner.svg', text: 'Smart Planner', w: 800, h: 600, bg: '#285e61', fg: '#e6fffa' }
];

const dir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

images.forEach(img => {
  const svg = generateSVG(img.text, img.w, img.h, img.bg, img.fg);
  fs.writeFileSync(path.join(dir, img.name), svg);
  console.log(`Created ${img.name}`);
});
