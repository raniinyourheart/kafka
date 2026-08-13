/* ============================================================
   script.js — Kafka Bintang Timora Tribute
   ============================================================ */

/* ============================================================
   📸 BAGIAN FOTO — Ganti dengan URL gambar asli Kafka
   ============================================================ */

// Placeholder generator (akan diganti dengan gambar asli)
const palette = ['#4B2E83', '#9D4EDD', '#7B61FF', '#050D1A', '#0A0F1F'];

function mulberry32(a) {
  return function() {
    a |= 0;
    a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function generatePlate(seed, w = 480, h = 600) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const g = c.getContext('2d');
  const rnd = mulberry32(seed);
  const grad = g.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, palette[Math.floor(rnd() * 3)]);
  grad.addColorStop(1, '#050D1A');
  g.fillStyle = grad;
  g.fillRect(0, 0, w, h);
  for (let i = 0; i < 6; i++) {
    g.beginPath();
    const r = rnd() * w * 0.4 + w * 0.15;
    g.fillStyle = `rgba(157,78,221,${rnd() * 0.25 + 0.05})`;
    g.arc(rnd() * w, rnd() * h, r, 0, Math.PI * 2);
    g.fill();
  }
  return c.toDataURL();
}

/* ============================================================
   📸 SECTION 1: ABOUT — Foto profil Kafka
   ============================================================ */

const ABOUT_IMAGE = {
  src: 'asset/kafkaaaaaaaaaaaaaaaaaaa.jpg',
  alt: 'Kafka Bintang Timora'
};

/* ============================================================
   📸 SECTION 2: GALLERY — Daftar foto untuk gallery
   ============================================================ */

const GALLERY_IMAGES = [
  { id: 1, title: 'On Stage Performance', src: 'asset/KFkaa1.jpg' },
  { id: 2, title: 'Candid Moment', src: 'asset/kafka-gallery-2.jpg' },
  { id: 3, title: 'Portrait Session', src: 'asset/kafka-gallery-3.jpg' },
  { id: 4, title: 'Behind The Scenes', src: 'asset/kafka-gallery-4.jpg' },
  { id: 5, title: 'Close Up', src: 'asset/kafka-gallery-5.jpg' },
  { id: 6, title: 'In Motion', src: 'asset/kafka-gallery-6.jpg' },
  { id: 7, title: 'Quiet Moment', src: 'asset/kafka-gallery-7.jpg' },
  { id: 8, title: 'Bright Light', src: 'asset/kafkaaaaaaaaaaaaaaaaaaa.jpg' },
  { id: 9, title: 'Fan Cam', src: 'asset/kafka-gallery-9.jpg' },
  { id: 10, title: 'Backstage', src: 'asset/kafka-gallery-10.jpg' }
];

/* ============================================================
   🎬 SECTION 3: VIDEOS — Langsung play saat diklik
   ============================================================ */

const VIDEOS = [
  {
    id: 1,
    title: 'Highlight in his school',
    videoUrl: 'asset/Kafka.mp4',
    poster: 'asset/Kafka.mp4' // 📌 Gambar thumbnail video
  },
  {
    id: 2,
    title: 'Interview Clip',
    videoUrl: 'asset/video-2.mp4',
    poster: 'asset/video-poster-2.jpg'
  },
  {
    id: 3,
    title: 'Live Moment',
    videoUrl: 'asset/video-3.mp4',
    poster: 'asset/video-poster-3.jpg'
  }
];

/* ============================================================
   🎵 SECTION 4: MUSIC — Dengan link MP3 dan cover
   ============================================================ */

const SONGS = [
  {
    id: 1,
    title: 'Penyihir',
    artist: 'Kafka Bintang Timora',
    duration: '2:48',
    cover: 'asset/kafkaa.jpeg', // 📌 Gambar cover lagu
    audio: 'asset/PENYIHIR_musicaldown.com_1785569090.mp3' // 📌 Link file MP3
  },
  {
    id: 2,
    title: 'Judul Lagu 2',
    artist: 'Nama Artis 2',
    duration: '3:12',
    cover: 'asset/cover-2.jpg',
    audio: 'asset/lagu-2.mp3'
  },
  {
    id: 3,
    title: 'Judul Lagu 3',
    artist: 'Nama Artis 3',
    duration: '3:41',
    cover: 'asset/cover-3.jpg',
    audio: 'asset/lagu-3.mp3'
  },
  {
    id: 4,
    title: 'Judul Lagu 4',
    artist: 'Nama Artis 4',
    duration: '2:59',
    cover: 'asset/cover-4.jpg',
    audio: 'asset/lagu-4.mp3'
  },
  {
    id: 5,
    title: 'Judul Lagu 5',
    artist: 'Nama Artis 5',
    duration: '3:05',
    cover: 'asset/cover-5.jpg',
    audio: 'asset/lagu-5.mp3'
  },
  {
    id: 6,
    title: 'Judul Lagu 6',
    artist: 'Nama Artis 6',
    duration: '4:02',
    cover: 'asset/cover-6.jpg',
    audio: 'asset/lagu-6.mp3'
  }
];

/* ============================================================
   📝 SECTION 5: JOURNEY — Dengan foto sesuai link
   ============================================================ */

const JOURNEY_DATA = [
  {
    chapter: 1,
    title: 'Childhood',
    description: 'A quiet beginning, long before any of this — placeholder description.',
    image: 'asset/IMG_20260801_140511.jpg'
  },
  {
    chapter: 2,
    title: 'School Years',
    description: 'Formative years shaped by small, ordinary moments — placeholder description.',
    image: 'asset/@yrycer__musicaldown.com_1785041040.jpeg'
  },
  {
    chapter: 3,
    title: 'Clash of Champions Season 3',
    description: 'A milestone moment worth remembering — placeholder description.',
    image: 'asset/journey-3.jpg'
  },
  {
    chapter: 4,
    title: 'Today',
    description: 'The story continues — placeholder description.',
    image: 'asset/journey-4.jpg'
  }
];

/* ============================================================
   💜 SECTION 6: WHY I ADMIRE
   ============================================================ */

const ADMIRE_DATA = [
  { id: 1, title: 'Dedication', description: 'A visible, consistent effort behind every appearance — placeholder text.' },
  { id: 2, title: 'Authenticity', description: 'A presence that feels genuine rather than performed — placeholder text.' },
  { id: 3, title: 'Growth', description: 'Progress that has been worked for, not simply given — placeholder text.' },
  { id: 4, title: 'Kindness', description: 'Small gestures that leave a lasting impression — placeholder text.' },
  { id: 5, title: 'Craft', description: 'An attention to detail that shows in every small moment — placeholder text.' },
  { id: 6, title: 'Inspiration', description: 'A reason to keep showing up and trying — placeholder text.' }
];

/* ============================================================
   💬 SECTION 7: QUOTES
   ============================================================ */

const QUOTES_DATA = [
  'Some presences simply stay with you.',
  'Consistency is its own kind of talent.',
  'The quiet moments say the most.',
  'Growth looks better lived than announced.',
  'Small kindnesses are rarely small.',
  'Inspiration often arrives quietly.'
];

/* ============================================================
   📰 SECTION 8: POSTS — Dengan foto masing-masing
   ============================================================ */

const POSTS_DATA = [
  {
    id: 1,
    title: 'Latest Update',
    timestamp: '2 days ago',
    image: 'asset/kafkaa.jpeg' // 📌 Foto untuk postingan 1
  },
  {
    id: 2,
    title: 'Behind The Scenes',
    timestamp: '1 week ago',
    image: 'asset/post-2.jpg' // 📌 Foto untuk postingan 2
  },
  {
    id: 3,
    title: 'New Project',
    timestamp: '2 weeks ago',
    image: 'asset/post-3.jpg' // 📌 Foto untuk postingan 3
  },
  {
    id: 4,
    title: 'Special Moment',
    timestamp: 'This month',
    image: 'asset/post-4.jpg' // 📌 Foto untuk postingan 4
  },
  {
    id: 5,
    title: 'Throwback',
    timestamp: 'Recently',
    image: 'asset/post-5.jpg' // 📌 Foto untuk postingan 5
  },
  {
    id: 6,
    title: 'Archive',
    timestamp: 'Archive',
    image: 'asset/post-6.jpg' // 📌 Foto untuk postingan 6
  }
];

/* ============================================================
   ============================================================
   ⚠️ JANGAN UBAH KODE DI BAWAH INI ⚠️
   ============================================================
   ============================================================ */

/* ============================================================
   LOADER
   ============================================================ */

const loader = document.getElementById('loader');
const loaderFill = document.getElementById('loaderFill');
let pct = 0;
document.body.style.overflow = 'hidden';

const loadInt = setInterval(() => {
  pct += Math.random() * 16;
  if (pct >= 100) {
    pct = 100;
    clearInterval(loadInt);
  }
  loaderFill.style.width = pct + '%';
  if (pct === 100) {
    setTimeout(() => {
      loader.classList.add('hide');
      document.body.style.overflow = 'auto';
      playIntro();
    }, 400);
  }
}, 220);

/* ============================================================
   CURSOR
   ============================================================ */

const cursorGlow = document.getElementById('cursorGlow');
const cursorDot = document.getElementById('cursorDot');
let mx = innerWidth / 2, my = innerHeight / 2, gx = mx, gy = my;

addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursorDot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
});

(function loop() {
  gx += (mx - gx) * .08;
  gy += (my - gy) * .08;
  cursorGlow.style.transform = `translate(${gx}px,${gy}px) translate(-50%,-50%)`;
  requestAnimationFrame(loop);
})();

function bindHoverCursor() {
  document.querySelectorAll('a,button,.m-item,.c-item,.t-head,.video-card,.post-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursorDot.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursorDot.classList.remove('hover'));
  });
}

/* ============================================================
   HERO PARALLAX
   ============================================================ */

const hero = document.getElementById('hero');
const parallaxTitle = document.getElementById('parallaxTitle');

hero.addEventListener('mousemove', e => {
  const rx = (e.clientX / innerWidth - .5) * 20;
  const ry = (e.clientY / innerHeight - .5) * 14;
  parallaxTitle.style.transform = `translate(${rx}px,${ry}px)`;
});

/* ============================================================
   ABOUT IMAGE PARALLAX
   ============================================================ */

const aboutImg = document.getElementById('aboutImg');
aboutImg.src = ABOUT_IMAGE.src || generatePlate(999, 600, 700);
aboutImg.alt = ABOUT_IMAGE.alt || 'Kafka Bintang Timora';

document.getElementById('about').addEventListener('mousemove', e => {
  const rect = e.currentTarget.getBoundingClientRect();
  const rx = ((e.clientX - rect.left) / rect.width - .5) * 24;
  const ry = ((e.clientY - rect.top) / rect.height - .5) * 24;
  aboutImg.style.transform = `translate(${rx}px,${ry}px) scale(1.05)`;
});

/* ============================================================
   STARFIELD
   ============================================================ */

const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let stars = [];

function resizeCanvas() {
  canvas.width = innerWidth;
  canvas.height = document.body.scrollHeight;
}

function initStars() {
  stars = [];
  const n = Math.floor((innerWidth * innerHeight) / 9000);
  for (let i = 0; i < n; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + .2,
      a: Math.random(),
      speed: Math.random() * .015 + .003
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(s => {
    s.a += s.speed;
    const alpha = (Math.sin(s.a) + 1) / 2 * .8 + .15;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(245,247,250,${alpha})`;
    ctx.fill();
  });
  requestAnimationFrame(drawStars);
}

resizeCanvas();
initStars();
drawStars();

addEventListener('resize', () => {
  resizeCanvas();
  initStars();
});

/* ============================================================
   NAV
   ============================================================ */

const nav = document.getElementById('nav');
let lastScroll = 0;

addEventListener('scroll', () => {
  const cur = scrollY;
  if (cur > lastScroll && cur > 200) {
    nav.classList.add('nav-hide');
  } else {
    nav.classList.remove('nav-hide');
  }
  lastScroll = cur;
});

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-close').forEach(l => l.addEventListener('click', () => navLinks.classList.remove('open')));

/* ============================================================
   REVEAL
   ============================================================ */

const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add('in');
      io.unobserve(en.target);
    }
  });
}, { threshold: .15 });

function observeAllReveals() {
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

function playIntro() {
  observeAllReveals();
  document.querySelectorAll('.hero .reveal').forEach((el, i) => setTimeout(() => el.classList.add('in'), i * 160));
}

/* ============================================================
   JOURNEY — Dengan foto sesuai link
   ============================================================ */

const timelineList = document.getElementById('timelineList');

JOURNEY_DATA.forEach((d, i) => {
  const imageSrc = d.image || generatePlate(50 + i, 300, 300);
  
  const item = document.createElement('div');
  item.className = 't-item reveal';
  item.innerHTML = `
    <div class="t-head">
      <div>
        <span class="t-year">Chapter ${d.chapter}</span>
        <div class="t-title">${d.title}</div>
      </div>
      <div class="t-plus">+</div>
    </div>
    <div class="t-body">
      <div class="t-body-inner">
        <img class="t-plate" src="${imageSrc}" alt="${d.title}" style="width:100%;aspect-ratio:1;object-fit:cover;border-radius:16px;">
        <p class="t-desc">${d.description}</p>
      </div>
    </div>
  `;
  item.querySelector('.t-head').addEventListener('click', () => item.classList.toggle('open'));
  timelineList.appendChild(item);
  io.observe(item);
});

/* ============================================================
   GALLERY — Complete gallery tidak kepotong
   ============================================================ */

let plates = GALLERY_IMAGES.map(img => ({
  src: img.src || generatePlate(img.id, 480, 600),
  cap: img.title || `Photo ${img.id}`
}));

// CAROUSEL
const carouselTrack = document.getElementById('carouselTrack');
[...plates, ...plates].forEach((p, i) => {
  const div = document.createElement('div');
  div.className = 'c-item';
  div.innerHTML = `<img src="${p.src}" alt="${p.cap}" style="width:100%;height:100%;object-fit:cover;">`;
  div.addEventListener('click', () => openLightbox(i % plates.length));
  carouselTrack.appendChild(div);
});

// MASONRY - Perbaiki agar tidak kepotong
const masonryGrid = document.getElementById('masonryGrid');
const heights = [520, 360, 460, 400, 540, 380, 480, 420, 500, 340];

plates.forEach((p, i) => {
  const div = document.createElement('div');
  div.className = 'm-item';
  // Gunakan height auto agar tidak kepotong
  div.innerHTML = `<img src="${p.src}" alt="${p.cap}" style="width:100%;height:auto;display:block;border-radius:18px;">`;
  div.addEventListener('click', () => openLightbox(i));
  masonryGrid.appendChild(div);
});

/* ============================================================
   LIGHTBOX
   ============================================================ */

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lbDownload = document.getElementById('lbDownload');
let lbIndex = 0, zoomed = false;

function openLightbox(i) {
  lbIndex = i;
  renderLightbox();
  lightbox.classList.add('open');
}

function renderLightbox() {
  lightboxImg.src = plates[lbIndex].src;
  lightboxImg.alt = plates[lbIndex].cap;
  lightboxImg.classList.remove('zoomed');
  zoomed = false;
  lbDownload.href = plates[lbIndex].src;
  lbDownload.download = `kafka-${lbIndex+1}.png`;
}

document.getElementById('lightboxClose').addEventListener('click', () => lightbox.classList.remove('open'));
document.getElementById('lbPrev').addEventListener('click', () => {
  lbIndex = (lbIndex - 1 + plates.length) % plates.length;
  renderLightbox();
});
document.getElementById('lbNext').addEventListener('click', () => {
  lbIndex = (lbIndex + 1) % plates.length;
  renderLightbox();
});

lightboxImg.addEventListener('click', () => {
  zoomed = !zoomed;
  lightboxImg.classList.toggle('zoomed', zoomed);
});

document.getElementById('lbShare').addEventListener('click', async () => {
  const shareData = {
    title: 'Kafka Bintang Timora — Gallery',
    text: 'Check out this fan tribute gallery',
    url: location.href
  };
  if (navigator.share) {
    try { await navigator.share(shareData); } catch (e) {}
  } else {
    navigator.clipboard && navigator.clipboard.writeText(location.href);
  }
});

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) lightbox.classList.remove('open');
});

addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') lightbox.classList.remove('open');
  if (e.key === 'ArrowRight') {
    lbIndex = (lbIndex + 1) % plates.length;
    renderLightbox();
  }
  if (e.key === 'ArrowLeft') {
    lbIndex = (lbIndex - 1 + plates.length) % plates.length;
    renderLightbox();
  }
});

/* ============================================================
   VIDEOS — Langsung play saat diklik
   ============================================================ */

const videoGrid = document.getElementById('videoGrid');

VIDEOS.forEach((video, i) => {
  const div = document.createElement('div');
  div.className = 'video-card';
  // Gunakan poster dari data atau generatePlate
  const posterSrc = video.poster || generatePlate(100 + i, 500, 300);
  div.innerHTML = `
    <img src="${posterSrc}" alt="${video.title}" style="width:100%;height:100%;object-fit:cover;">
    <div class="play"><div class="play-ring">▶</div></div>
    <span class="vlabel">${video.title}</span>
  `;
  div.addEventListener('click', () => openVideo(i));
  videoGrid.appendChild(div);
});

const videoModal = document.getElementById('videoModal');
const videoStage = document.getElementById('videoStage');

function openVideo(index) {
  const video = VIDEOS[index];
  
  if (video.videoUrl) {
    videoStage.innerHTML = `
      <div style="width:100%;height:100%;display:flex;flex-direction:column;gap:16px;padding:10px;">
        <div style="flex:1;position:relative;background:#000;border-radius:12px;overflow:hidden;">
          <video 
            id="videoPlayer" 
            src="${video.videoUrl}" 
            controls 
            autoplay
            style="width:100%;height:100%;object-fit:contain;"
          ></video>
        </div>
        <div style="display:flex;gap:12px;justify-content:center;align-items:center;flex-wrap:wrap;">
          <span style="font-size:14px;color:rgba(245,247,250,.7);">${video.title}</span>
          <a 
            href="${video.videoUrl}" 
            download 
            style="padding:8px 20px;border-radius:100px;border:1px solid rgba(255,255,255,.25);
                   font-size:11px;letter-spacing:.15em;text-transform:uppercase;
                   transition:.3s ease;background:rgba(255,255,255,.06);"
            onmouseover="this.style.background='#9D4EDD';this.style.borderColor='#9D4EDD';this.style.color='#050D1A';"
            onmouseout="this.style.background='rgba(255,255,255,.06)';this.style.borderColor='rgba(255,255,255,.25)';this.style.color=''"
          >
            ⬇ Download Video
          </a>
        </div>
      </div>
    `;
    // Auto play setelah di-render
    setTimeout(() => {
      const player = document.getElementById('videoPlayer');
      if (player) player.play();
    }, 100);
  } else if (video.embedUrl) {
    videoStage.innerHTML = `
      <iframe src="${video.embedUrl}" style="width:100%;height:100%;border:none;" allowfullscreen></iframe>
    `;
  } else {
    videoStage.innerHTML = `
      <div>
        <p style="font-family:'Cormorant Garamond',serif;font-size:22px;margin-bottom:10px;">${video.title}</p>
        <p style="font-size:13px;color:rgba(245,247,250,.5);">📌 Tambahkan videoUrl di VIDEOS</p>
      </div>
    `;
  }
  
  videoModal.classList.add('open');
}

document.getElementById('videoClose').addEventListener('click', () => {
  videoModal.classList.remove('open');
  const videoPlayer = document.getElementById('videoPlayer');
  if (videoPlayer) videoPlayer.pause();
});

videoModal.addEventListener('click', e => {
  if (e.target === videoModal) {
    videoModal.classList.remove('open');
    const videoPlayer = document.getElementById('videoPlayer');
    if (videoPlayer) videoPlayer.pause();
  }
});

/* ============================================================
   WHY I ADMIRE
   ============================================================ */

const admireGrid = document.getElementById('admireGrid');

const icons = [
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M12 2l2.4 6.8L21 11l-6.6 2.2L12 20l-2.4-6.8L3 11l6.6-2.2z"/></svg>',
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/></svg>',
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M4 20V10M12 20V4M20 20v-7"/></svg>',
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M12 21s-7-4.35-9.5-9C1 8 3 4 7 4c2 0 4 1.5 5 3 1-1.5 3-3 5-3 4 0 6 4 4.5 8-2.5 4.65-9.5 9-9.5 9z"/></svg>',
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 12h8M12 8v8"/></svg>',
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/></svg>'
];

ADMIRE_DATA.forEach((a, i) => {
  const div = document.createElement('div');
  div.className = 'admire-card glass-card reveal';
  div.innerHTML = `
    <div class="admire-icon">${icons[i % icons.length]}</div>
    <div class="admire-title">${a.title}</div>
    <p class="admire-text">${a.description}</p>
  `;
  admireGrid.appendChild(div);
  io.observe(div);
});

/* ============================================================
   QUOTES
   ============================================================ */

const quoteGrid = document.getElementById('quoteGrid');

QUOTES_DATA.forEach(q => {
  const div = document.createElement('div');
  div.className = 'quote-card glass-card reveal';
  div.innerHTML = `
    <div class="quote-mark">"</div>
    <p class="quote-text">${q}</p>
    <div class="quote-by">Fan Reflection</div>
  `;
  quoteGrid.appendChild(div);
  io.observe(div);
});

/* ============================================================
   POSTS — Dengan foto masing-masing
   ============================================================ */

const postGrid = document.getElementById('postGrid');

POSTS_DATA.forEach((post, i) => {
  const imageSrc = post.image || generatePlate(500 + i, 400, 500);
  const div = document.createElement('div');
  div.className = 'post-card reveal';
  div.innerHTML = `
    <img src="${imageSrc}" alt="${post.title}" style="width:100%;height:100%;object-fit:cover;">
    <div class="post-overlay">
      <span class="post-meta">${post.timestamp}</span>
    </div>
  `;
  postGrid.appendChild(div);
  io.observe(div);
});

/* ============================================================
   MUSIC — Dengan link MP3 dan cover (SUARA KELUAR!)
   ============================================================ */

const musicGrid = document.getElementById('musicGrid');

// Buat audio element untuk setiap lagu
const audioElements = {};

SONGS.forEach((song, i) => {
  const coverSrc = song.cover || generatePlate(600 + i, 140, 140);
  
  const div = document.createElement('div');
  div.className = 'music-card glass-card reveal';
  div.innerHTML = `
    <div class="music-top">
      <img class="music-cover" src="${coverSrc}" alt="${song.title}" style="width:64px;height:64px;border-radius:12px;object-fit:cover;flex-shrink:0;">
      <div>
        <div class="music-title">${song.title}</div>
        <div class="music-artist">${song.artist}</div>
      </div>
      <div class="music-play" data-i="${i}">▶</div>
    </div>
    <div class="music-progress"><span id="prog-${i}"></span></div>
    <div class="music-time"><span id="time-${i}">0:00</span><span>${song.duration}</span></div>
  `;
  musicGrid.appendChild(div);
  io.observe(div);
  
  // Buat audio element
  const audio = new Audio(song.audio || '');
  audio.preload = 'metadata';
  audioElements[i] = audio;
  
  // Update progress bar saat audio diputar
  audio.addEventListener('timeupdate', () => {
    const prog = document.getElementById('prog-' + i);
    const timeEl = document.getElementById('time-' + i);
    if (prog && timeEl) {
      const pct = (audio.currentTime / audio.duration) * 100;
      prog.style.width = pct + '%';
      const mins = Math.floor(audio.currentTime / 60);
      const secs = Math.floor(audio.currentTime % 60);
      timeEl.textContent = `${mins}:${String(secs).padStart(2,'0')}`;
    }
  });
  
  audio.addEventListener('ended', () => {
    const btn = document.querySelector(`.music-play[data-i="${i}"]`);
    if (btn) btn.textContent = '▶';
    const prog = document.getElementById('prog-' + i);
    if (prog) prog.style.width = '0%';
    const timeEl = document.getElementById('time-' + i);
    if (timeEl) timeEl.textContent = '0:00';
  });
});

let currentAudioIndex = null;

musicGrid.addEventListener('click', e => {
  const btn = e.target.closest('.music-play');
  if (!btn) return;

  const i = parseInt(btn.dataset.i);
  const audio = audioElements[i];
  if (!audio) return;

  // Jika lagu yang sama sedang diputar, pause
  if (currentAudioIndex === i && !audio.paused) {
    audio.pause();
    btn.textContent = '▶';
    currentAudioIndex = null;
    return;
  }

  // Pause semua audio lain
  Object.keys(audioElements).forEach(key => {
    if (parseInt(key) !== i) {
      audioElements[key].pause();
      const otherBtn = document.querySelector(`.music-play[data-i="${key}"]`);
      if (otherBtn) otherBtn.textContent = '▶';
    }
  });

  // Play lagu yang dipilih
  audio.play().catch(e => {
    console.log('Error playing audio:', e);
    alert('⚠️ File audio tidak ditemukan. Pastikan link audio di SONGS benar.\n\n📌 Isi field "audio" dengan link file MP3 yang valid.');
  });
  
  btn.textContent = '❚❚';
  currentAudioIndex = i;
});

/* ============================================================
   GSAP
   ============================================================ */

addEventListener('load', () => {
  bindHoverCursor();
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.ending', {
      opacity: 0.4,
      ease: 'none',
      scrollTrigger: {
        trigger: '.ending',
        start: 'top center',
        end: 'bottom top',
        scrub: true
      }
    });
  }
  resizeCanvas();
  initStars();
});

/* ============================================================
   📌 RINGKASAN BAGIAN YANG PERLU DIISI:
   ============================================================
   
   1. 📸 ABOUT:
      - ABOUT_IMAGE.src     → Foto untuk About
   
   2. 📸 GALLERY:
      - GALLERY_IMAGES[].src → Foto gallery (10 foto)
   
   3. 🎬 VIDEOS:
      - VIDEOS[].videoUrl   → Link file video (mp4)
      - VIDEOS[].poster     → Gambar thumbnail video
      - AUTO PLAY saat diklik!
   
   4. 🎵 MUSIC (SUARA KELUAR!):
      - SONGS[].audio       → Link file MP3 (WAJIB DIISI!)
      - SONGS[].cover       → Gambar cover lagu
      - SONGS[].title       → Judul lagu
      - SONGS[].artist      → Nama artis
      - SONGS[].duration    → Durasi lagu
   
   5. 📝 JOURNEY:
      - JOURNEY_DATA[].image → Foto setiap chapter
      - Sekarang foto tampil sesuai link!
   
   6. 📰 POSTS:
      - POSTS_DATA[].image  → Foto setiap postingan (SUDAH ADA!)
   
   7. 💜 ADMIRE & 💬 QUOTES:
      - Isi dengan konten asli Kafka
   ============================================================ */