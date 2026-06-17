const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

function svgRect(w, h, bg, label, textColor = '#fff') {
  const fontSize = Math.max(14, Math.floor(Math.min(w, h) / 8));
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="${bg}"/>
  <text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle"
    font-family="Arial,sans-serif" font-size="${fontSize}px" fill="${textColor}">${label}</text>
</svg>`;
}

function write(relPath, content) {
  const abs = path.join(root, relPath);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  if (!fs.existsSync(abs)) {
    fs.writeFileSync(abs, content);
    console.log('created', relPath);
  } else {
    console.log('skip   ', relPath, '(exists)');
  }
}

// images
const imgPairs = [
  ['hero-solar.svg',   '#0e1a3d', 'Hero Solar Energy',   1800, 900],
  ['hero-stats.svg',   '#1a2e52', 'Hero Statistics',      1800, 900],
  ['hero-modules.svg', '#122040', 'Hero Modules',         1800, 900],
  ['solar-panels.svg', '#1c3a6b', 'Solar Panels Array',   1600, 900],
  ['factory.svg',      '#2a3f5f', 'Manufacturing Plant',  1800, 900],
  ['about.svg',        '#0e1a3d', 'About Engineer',       1100, 900],
  ['climate.svg',      '#154360', 'Climate Contribution', 1200, 700],
  ['capacity-bg.svg',  '#0e1a3d', 'Capacity Background',  1800, 900],
];
for (const [name, bg, label, w, h] of imgPairs) {
  write(`src/assets/images/${name}`, svgRect(w, h, bg, label));
}

// video readme
write('src/assets/videos/README.md', '# Videos\nPlace solar-hero.mp4 here.\n');

// products
const productItems = [
  ['aero-series.svg',  '#1a3c5e', 'AERO SERIES'],
  ['terra-series.svg', '#1e4d2b', 'TERRA SERIES'],
  ['orbit-series.svg', '#3b1f5e', 'ORBIT SERIES'],
];
for (const [name, bg, label] of productItems) {
  write(`src/assets/products/${name}`, svgRect(900, 700, bg, label));
}

// projects
const projectItems = [
  ['palm-grove.svg',   '#1a3c5e', 'Palm Grove Villas'],
  ['arcadia-tech.svg', '#1e4d2b', 'Arcadia Tech Park'],
  ['metrofab.svg',     '#3b1f5e', 'MetroFab Plant'],
  ['thar-solar.svg',   '#4d3b1a', 'Thar Solar Block'],
  ['hillcrest.svg',    '#1a3c5e', 'Hillcrest Community'],
  ['bluebay-mall.svg', '#1e4d2b', 'Bluebay Mall'],
];
for (const [name, bg, label] of projectItems) {
  write(`src/assets/projects/${name}`, svgRect(900, 600, bg, label));
}

// blog
const blogItems = [
  ['solar-rooftop-basics.svg', '#0e1a3d', 'Solar Rooftop Basics'],
  ['module-efficiency.svg',    '#1e4d2b', 'Module Efficiency'],
  ['commercial-finance.svg',   '#3b1f5e', 'Commercial Finance'],
];
for (const [name, bg, label] of blogItems) {
  write(`src/assets/blog/${name}`, svgRect(900, 600, bg, label));
}

// team
const teamItems = [
  ['anika-rao.svg',    '#2c4b6e', 'Anika Rao'],
  ['vikram-sethi.svg', '#1e4d2b', 'Vikram Sethi'],
  ['nisha-kapoor.svg', '#3b1f5e', 'Nisha Kapoor'],
  ['kabir-mehta.svg',  '#4d3b1a', 'Kabir Mehta'],
];
for (const [name, bg, label] of teamItems) {
  write(`src/assets/team/${name}`, svgRect(500, 600, bg, label));
}

// gallery
const galleryColors = ['#0e1a3d','#1a3c5e','#1e4d2b','#3b1f5e','#4d3b1a','#154360','#1c3a6b','#2a3f5f'];
for (let i = 1; i <= 8; i++) {
  write(`src/assets/gallery/gallery-${i}.svg`, svgRect(900, 600, galleryColors[i-1], `Gallery ${i}`));
}

// logos
const logoNames = ['powergrid','sunlab','ecobank','gridworks','voltedge','renewhub','brightops','helioqa','terracert'];
for (const name of logoNames) {
  write(`src/assets/logos/${name}.svg`, svgRect(180, 80, '#0e1a3d', name));
}
write('src/assets/logos/aes-logo.svg', svgRect(200, 200, '#0e1a3d', 'AES', '#ffb100'));

// certifications
const certNames = ['iec','bis','iso','mnre','ul','tuv','ce','almm','rohs','reach','mcs'];
for (const name of certNames) {
  write(`src/assets/certifications/${name}.svg`, svgRect(180, 100, '#0e1a3d', name.toUpperCase(), '#ffb100'));
}

// flags
const flagItems = [
  ['india','#FF9933','IN'],['usa','#3C3B6E','US'],['uae','#00732F','AE'],
  ['australia','#00008B','AU'],['saudi-arabia','#006C35','SA'],
  ['qatar','#8D1B3D','QA'],['germany','#000','DE'],
  ['canada','#FF0000','CA'],['indonesia','#CE1126','ID'],
  ['oman','#DB161B','OM'],['japan','#BC002D','JP'],['kenya','#006600','KE'],
];
for (const [name, bg, label] of flagItems) {
  write(`src/assets/flags/${name}.svg`, svgRect(80, 60, bg, label));
}

// public logo (used by Logo.jsx at /images/aes-logo.jpeg path — we keep SVG)
write('public/images/aes-logo.svg', svgRect(200, 200, '#0e1a3d', 'AES', '#ffb100'));

// pdfs readme
write('src/assets/pdfs/README.md', '# PDFs\nPlace product-catalogue.pdf, installation-guide.pdf, company-profile.pdf here.\n');

console.log('\nDone.');
