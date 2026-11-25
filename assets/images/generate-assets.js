const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname);

// Helper to save SVG
function saveSvg(fileName, content) {
  fs.writeFileSync(path.join(imgDir, fileName), content.trim());
}

// 1. Hero Image: High-end editorial beauty still-life composition
saveSvg('hero-editorial.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 680" fill="none">
  <defs>
    <linearGradient id="heroBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F5F2EB" />
      <stop offset="60%" stop-color="#EFE9DE" />
      <stop offset="100%" stop-color="#DED3C4" />
    </linearGradient>
    <linearGradient id="glass" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#E8E2D7" stop-opacity="0.6" />
    </linearGradient>
    <linearGradient id="amberSerum" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#E2B176" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#C58B43" stop-opacity="0.9" />
    </linearGradient>
    <filter id="softShadow" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#263B34" flood-opacity="0.12"/>
    </filter>
  </defs>

  <!-- Editorial Background Arch -->
  <rect width="800" height="680" rx="24" fill="url(#heroBg)"/>
  
  <!-- Architectural Arch Element -->
  <path d="M120 680 V320 C120 180 230 80 400 80 C570 80 680 180 680 320 V680 Z" fill="#FBF9F5" opacity="0.65"/>
  <circle cx="400" cy="220" r="140" stroke="#A8B5A0" stroke-width="1.5" stroke-dasharray="4 4" fill="none" opacity="0.4"/>

  <!-- Pedestal Platform -->
  <ellipse cx="400" cy="560" rx="260" ry="42" fill="#D2C5B3" opacity="0.5"/>
  <ellipse cx="400" cy="552" rx="240" ry="34" fill="#FFFFFF" opacity="0.9"/>

  <!-- Product 1: Botanical Treatment Jar (Left) -->
  <g transform="translate(210, 410)" filter="url(#softShadow)">
    <rect x="0" y="40" width="130" height="90" rx="14" fill="#FFFFFF"/>
    <rect x="5" y="10" width="120" height="30" rx="6" fill="#263B34"/>
    <rect x="20" y="65" width="90" height="40" rx="4" fill="#F5F2EB" stroke="#DED3C4" stroke-width="1"/>
    <text x="65" y="82" font-family="'Playfair Display', serif" font-size="10" font-weight="600" fill="#263B34" text-anchor="middle">GLOWMEDIX</text>
    <text x="65" y="94" font-family="'Inter', sans-serif" font-size="6" fill="#A8B5A0" text-anchor="middle" letter-spacing="0.1em">CERAMIDE BALM</text>
  </g>

  <!-- Product 2: Luxury Dropper Serum Bottle (Center Hero) -->
  <g transform="translate(350, 240)" filter="url(#softShadow)">
    <!-- Glass Bottle Body -->
    <rect x="15" y="100" width="100" height="190" rx="20" fill="url(#glass)" stroke="#FFFFFF" stroke-width="2"/>
    <rect x="25" y="130" width="80" height="150" rx="12" fill="url(#amberSerum)"/>
    <!-- Dropper Collar -->
    <rect x="45" y="60" width="40" height="40" rx="4" fill="#DED3C4"/>
    <rect x="42" y="70" width="46" height="8" rx="2" fill="#263B34"/>
    <!-- Rubber Bulb -->
    <path d="M52 60 C52 35 78 35 78 60 Z" fill="#263B34"/>
    <!-- Label -->
    <rect x="30" y="160" width="70" height="80" rx="4" fill="#FFFFFF" opacity="0.95"/>
    <text x="65" y="185" font-family="'Playfair Display', serif" font-size="9" font-weight="600" fill="#263B34" text-anchor="middle">PEPTIDE +</text>
    <text x="65" y="197" font-family="'Inter', sans-serif" font-size="6" fill="#A8B5A0" text-anchor="middle" letter-spacing="0.12em">ACTIVE SERUM</text>
    <text x="65" y="215" font-family="'Inter', sans-serif" font-size="6" font-weight="500" fill="#454A45" text-anchor="middle">30ml / 1.0 fl oz</text>
  </g>

  <!-- Product 3: Sleek Hydrating Mist Bottle (Right) -->
  <g transform="translate(490, 310)" filter="url(#softShadow)">
    <rect x="15" y="70" width="75" height="210" rx="14" fill="#263B34"/>
    <rect x="30" y="35" width="45" height="35" rx="3" fill="#DED3C4"/>
    <rect x="38" y="15" width="29" height="20" rx="3" fill="#A8B5A0"/>
    <!-- Gold / Cream Accent Ring -->
    <line x1="15" y1="95" x2="90" y2="95" stroke="#DED3C4" stroke-width="2"/>
    <text x="52" y="150" font-family="'Playfair Display', serif" font-size="9" font-weight="600" fill="#F5F2EB" text-anchor="middle">GLOW ESSENCE</text>
    <text x="52" y="165" font-family="'Inter', sans-serif" font-size="6" fill="#A8B5A0" text-anchor="middle">Centella Asiatica</text>
  </g>

  <!-- Organic Botanical Leaf Branch Accent -->
  <g transform="translate(140, 160)" stroke="#A8B5A0" stroke-width="2" fill="none" opacity="0.75">
    <path d="M0 240 Q60 140 160 80"/>
    <path d="M40 190 Q30 160 55 160 Q70 180 50 200" fill="#A8B5A0" opacity="0.3"/>
    <path d="M90 145 Q85 115 110 115 Q120 135 100 155" fill="#A8B5A0" opacity="0.3"/>
    <path d="M140 98 Q145 70 170 75 Q175 98 150 108" fill="#A8B5A0" opacity="0.3"/>
  </g>

  <!-- Badge Overlay -->
  <g transform="translate(80, 500)">
    <rect width="180" height="64" rx="32" fill="#FFFFFF" filter="url(#softShadow)"/>
    <circle cx="36" cy="32" r="18" fill="#F5F2EB"/>
    <path d="M36 21 C33 26 30 29 30 33 C30 37 32.5 39 36 39 C39.5 39 42 37 42 33 C42 29 39 26 36 21 Z" fill="#263B34"/>
    <text x="66" y="28" font-family="'Inter', sans-serif" font-size="10" font-weight="700" fill="#263B34">100% Curated</text>
    <text x="66" y="44" font-family="'Inter', sans-serif" font-size="9" fill="#454A45">Evidence-Based Skincare</text>
  </g>
</svg>`);

// 2. Categories (5 Categories)
const categories = [
  { slug: 'skincare', title: 'Skincare', icon: 'M30 15 C20 30 15 42 15 54 C15 68 25 78 35 78 C45 78 55 68 55 54 C55 42 50 30 40 15 Z', desc: 'Serums, cleansers, creams & barrier care' },
  { slug: 'korean-beauty', title: 'Korean Beauty', icon: 'M20 40 C20 20 35 15 50 15 C65 15 80 20 80 40 C80 65 50 85 50 85 C50 85 20 65 20 40 Z', desc: 'Gentle hydration, snail mucin, cica & glass skin' },
  { slug: 'haircare', title: 'Haircare', icon: 'M50 15 Q70 30 65 50 Q60 70 75 85 M40 20 Q55 35 48 55 Q42 75 55 85 M30 30 Q40 45 35 60 Q30 75 40 85', desc: 'Scalp health, peptide oils & restorative masks' },
  { slug: 'beauty-tools', title: 'Beauty Tools', icon: 'M35 15 C25 25 25 40 35 50 L65 80 C75 90 90 90 100 80 L70 50 C80 40 80 25 70 15 Z', desc: 'Gua sha stones, red light therapy & microcurrent' },
  { slug: 'wellness', title: 'Wellness', icon: 'M50 20 C50 20 30 40 30 55 C30 68 40 76 50 76 C60 76 70 68 70 55 C70 40 50 20 50 20 Z M50 35 C58 45 60 52 60 55', desc: 'Inner nourishment, ingestible collagen & sleep rituals' }
];

categories.forEach(cat => {
  saveSvg(`cat-${cat.slug}.svg`, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" fill="none">
    <rect width="400" height="300" rx="16" fill="#F5F2EB"/>
    <circle cx="200" cy="130" r="85" fill="#EFE9DE"/>
    <circle cx="200" cy="130" r="65" fill="#FFFFFF" stroke="#DED3C4" stroke-width="1.5"/>
    <g transform="translate(150, 80)" stroke="#263B34" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="${cat.icon}"/>
    </g>
    <text x="200" y="240" font-family="'Playfair Display', serif" font-size="22" font-weight="600" fill="#263B34" text-anchor="middle">${cat.title}</text>
    <text x="200" y="265" font-family="'Inter', sans-serif" font-size="11" fill="#454A45" text-anchor="middle">${cat.desc}</text>
  </svg>`);
});

// 3. Trending Products (6 Real Skincare Essentials)
const products = [
  { id: 'prod-1', name: 'Centella Calming Cleanser', brand: 'GlowMedix Curated', cat: 'Skincare', tag: 'Top Rated Cleanser', color: '#263B34', accent: '#A8B5A0' },
  { id: 'prod-2', name: 'Multi-Molecular Hyaluronic Serum', brand: 'Formulate Botanics', cat: 'Korean Beauty', tag: 'Deep Hydration', color: '#3A5A40', accent: '#DED3C4' },
  { id: 'prod-3', name: 'Ceramide Peptide Barrier Cream', brand: 'Dermal Flora', cat: 'Skincare', tag: 'Barrier Repair', color: '#4A5859', accent: '#F5F2EB' },
  { id: 'prod-4', name: 'Sculpting Rose Quartz Gua Sha', brand: 'Aura Rituals', cat: 'Beauty Tools', tag: 'Facial Sculpting', color: '#C89F9C', accent: '#FFFFFF' },
  { id: 'prod-5', name: 'Ultra-Light Invisible Sunscreen SPF 50+', brand: 'Soleil Shield', cat: 'Skincare', tag: 'No White Cast', color: '#E3B505', accent: '#263B34' },
  { id: 'prod-6', name: 'Rosemary Scalp & Hair Peptide Oil', brand: 'Verdant Locks', cat: 'Haircare', tag: 'Hair Density', color: '#588157', accent: '#DED3C4' }
];

products.forEach(p => {
  saveSvg(`${p.id}.svg`, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 420" fill="none">
    <rect width="400" height="420" rx="16" fill="#FBF9F5"/>
    <rect x="20" y="20" width="360" height="280" rx="12" fill="#F5F2EB"/>
    <!-- Pedestal -->
    <ellipse cx="200" cy="240" rx="110" ry="20" fill="#DED3C4" opacity="0.6"/>
    <!-- Product Silhouette -->
    <g transform="translate(140, 60)">
      <rect x="25" y="50" width="70" height="130" rx="16" fill="${p.color}"/>
      <rect x="35" y="20" width="50" height="30" rx="4" fill="#DED3C4"/>
      <rect x="42" y="75" width="36" height="50" rx="4" fill="#FFFFFF" opacity="0.95"/>
      <line x1="50" y1="92" x2="70" y2="92" stroke="${p.color}" stroke-width="2"/>
      <line x1="46" y1="102" x2="74" y2="102" stroke="#A8B5A0" stroke-width="1.5"/>
    </g>
    <!-- Tag Pill -->
    <g transform="translate(32, 32)">
      <rect width="130" height="26" rx="13" fill="#263B34"/>
      <text x="65" y="17" font-family="'Inter', sans-serif" font-size="9" font-weight="600" fill="#F5F2EB" text-anchor="middle">${p.tag}</text>
    </g>
    <!-- Card Info -->
    <text x="32" y="332" font-family="'Inter', sans-serif" font-size="11" font-weight="600" fill="#A8B5A0" text-transform="uppercase" letter-spacing="0.08em">${p.cat}</text>
    <text x="32" y="358" font-family="'Playfair Display', serif" font-size="18" font-weight="600" fill="#263B34">${p.name}</text>
    <text x="32" y="384" font-family="'Inter', sans-serif" font-size="12" fill="#454A45">${p.brand}</text>
  </svg>`);
});

// 4. Blog Post Thumbnails (6 High Quality Editorial Guides)
const articles = [
  { id: 'article-1', title: 'The 10-Step Korean Skincare Routine Explained Simply', cat: 'Korean Beauty', date: 'May 14, 2026', readTime: '7 min read' },
  { id: 'article-2', title: 'Niacinamide vs. Vitamin C: Which One Does Your Skin Barrier Need?', cat: 'Skincare', date: 'May 12, 2026', readTime: '5 min read' },
  { id: 'article-3', title: 'We Tested 5 Best-Selling Mineral Sunscreens (No White Cast)', cat: 'Product Comparisons', date: 'May 08, 2026', readTime: '9 min read' },
  { id: 'article-4', title: 'How To Actually Use a Gua Sha for Facial Lymphatic Drainage', cat: 'Beauty Tools', date: 'May 04, 2026', readTime: '6 min read' },
  { id: 'article-5', title: 'The Truth About Rosemary Scalp Oils for Hair Regrowth', cat: 'Haircare', date: 'Apr 28, 2026', readTime: '8 min read' },
  { id: 'article-6', title: 'Morning vs. Evening Skincare: The Optimal Routine Order', cat: 'Skincare', date: 'Apr 22, 2026', readTime: '5 min read' }
];

articles.forEach(art => {
  saveSvg(`${art.id}.svg`, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 380" fill="none">
    <rect width="600" height="380" rx="16" fill="#F5F2EB"/>
    <!-- Subtle Botanical Lines -->
    <path d="M400 380 C450 250 520 180 600 120" stroke="#DED3C4" stroke-width="2"/>
    <circle cx="480" cy="180" r="110" fill="#EFE9DE" opacity="0.6"/>
    <!-- Category Pill -->
    <g transform="translate(36, 40)">
      <rect width="140" height="30" rx="15" fill="#263B34"/>
      <text x="70" y="19" font-family="'Inter', sans-serif" font-size="11" font-weight="600" fill="#F5F2EB" text-anchor="middle">${art.cat}</text>
    </g>
    <!-- Article Graphic Shapes -->
    <g transform="translate(380, 80)">
      <circle cx="90" cy="90" r="60" stroke="#A8B5A0" stroke-width="1.5" stroke-dasharray="3 3"/>
      <rect x="70" y="40" width="40" height="100" rx="10" fill="#263B34"/>
      <rect x="76" y="25" width="28" height="15" rx="3" fill="#DED3C4"/>
    </g>
    <!-- Title and Metadata in image -->
    <text x="36" y="220" font-family="'Playfair Display', serif" font-size="24" font-weight="600" fill="#263B34" width="450">
      <tspan x="36" dy="0">${art.title.length > 32 ? art.title.substring(0, 32) + '...' : art.title}</tspan>
    </text>
    <text x="36" y="310" font-family="'Inter', sans-serif" font-size="12" fill="#454A45">${art.date} · ${art.readTime}</text>
  </svg>`);
});

console.log('All editorial SVG assets created successfully.');
