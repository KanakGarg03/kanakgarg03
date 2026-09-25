/* =========================================================
   KANAK GARG — PORTFOLIO
   Project data lives here. Add new work by pushing a new
   object into `projects` — no HTML changes needed.

   image / images: leave empty ("") to render a styled
   placeholder until real artwork is dropped into /assets.
   ========================================================= */

const projects = [
  // ---------- REAL WORK (Behance) ----------
  {
    title: "AardoSolutions Website",
    category: "uiux",
    catLabel: "UI/UX · Web Design",
    year: "2025",
    size: "lg",
    description: "Full website design for Aardo Solutions — a marketing site built to feel technical and trustworthy without going cold or corporate.",
    image: "assets/aardo/01.png",
    images: [
      "assets/aardo/01.png",
      "assets/aardo/02.png",
      "assets/aardo/03.png",
      "assets/aardo/04.png",
      "assets/aardo/05.png",
      "assets/aardo/06.png",
      "assets/aardo/07.png"
    ],
    viewer: true,
viewerType: "gallery",
    link: "https://www.behance.net/gallery/217313545/AardoSolutions-Website",
    viewerTitle: "AardoSolutions Website"
  },
  {
    title: "Influencer Portfolio",
    category: "uiux",
    catLabel: "UI/UX · Web Design",
    year: "2025",
    size: "sm",
    description: "A portfolio site concept for a content creator — designed to read like a personal brand, not a template.",
    image: "assets/influencer/influencer-portfolio.png",
    images: [
      "assets/influencer/influencer-portfolio.png"
    ],
    viewer: true,
    viewerType: "single",
    link: "https://www.behance.net/gallery/217312953/Influencer-Portfolio"
  },
  {
    title: "DLF Website",
    category: "uiux",
    catLabel: "UI/UX · Web Design",
    year: "2025",
    size: "md",
    description: "A multi-page DLF website redesign concept focused on clean hierarchy, modern presentation and a polished digital experience.",
    image: "assets/dlf/DLF1.png",
    images: [
      "assets/dlf/DLF1.png",
      "assets/dlf/DLF2.png",
      "assets/dlf/DLF3.png",
      "assets/dlf/DLF4.png"
    ],
    viewer: true,
    viewerType: "gallery",
    link: "https://www.behance.net/gallery/217312721/DLF-Redesign",
    viewerTitle: "DLF Website"
  },
  {
    title: "Social Media Posts",
    category: "graphic",
    catLabel: "Graphic Design · Social Media",
    year: "2025",
    size: "sm",
    description: "A collection of social media carousels and campaign posts spanning design education, astronomy, events and visual communication.",
    image: "assets/covers/social-media-posts-cover.png",
    postCollection: true,
    posts: [
      {
        id: "post-1",
        title: "Post 01 — The Power of Contrast",
        shortTitle: "Post 01",
        catLabel: "Design Education · Carousel",
        year: "2025",
        description: "An educational carousel explaining contrast in visual design, common mistakes and practical ways to improve it.",
        cover: "assets/posts/post1/contrast.png",
        images: [
          "assets/posts/post1/contrast.png",
          "assets/posts/post1/contrast1.png",
          "assets/posts/post1/contrast2.png",
          "assets/posts/post1/contrast3.png"
        ]
      },
      {
        id: "post-2",
        title: "Post 02 — GymVita Connect",
        shortTitle: "Post 02",
        catLabel: "Product Promotion · Carousel",
        year: "2025",
        description: "A promotional carousel presenting GymVita Connect, its dashboard and the key features of the gym solution.",
        cover: "assets/posts/post2/1.png",
        images: [
          "assets/posts/post2/1.png",
          "assets/posts/post2/2.png"
        ]
      },
      {
        id: "post-3",
        title: "Post 03 — UI Design Resources",
        shortTitle: "Post 03",
        catLabel: "Web Design · Resource Carousel",
        year: "2025",
        description: "A curated resource carousel highlighting websites, SaaS inspiration, design research and reusable UI resources.",
        cover: "assets/posts/post3/web1.png",
        images: [
          "assets/posts/post3/web1.png",
          "assets/posts/post3/web2.png",
          "assets/posts/post3/web3.png",
          "assets/posts/post3/web4.png",
          "assets/posts/post3/web5.png",
          "assets/posts/post3/web6.png"
        ]
      },
      {
        id: "post-4",
        title: "Post 04 — Total Lunar Eclipse",
        shortTitle: "Post 04",
        catLabel: "Astronomy · Carousel",
        year: "2025",
        description: "A seven-slide educational carousel explaining the stages of a total lunar eclipse, from the beginning through totality and the return to full Moon.",
        cover: "assets/posts/p4/L1.jpg",
        images: [
          "assets/posts/p4/L1.jpg",
          "assets/posts/p4/L2.jpg",
          "assets/posts/p4/L3.jpg",
          "assets/posts/p4/L4.jpg",
          "assets/posts/p4/L5.jpg",
          "assets/posts/p4/L6.jpg",
          "assets/posts/p4/L7.jpg"
        ]
      },
      {
        id: "post-5",
        title: "Post 05 — Select Citywalk",
        shortTitle: "Post 05",
        catLabel: "Event Promotion · Mixed Media",
        year: "2026",
        description: "A mixed-media social post documenting a Skygaze India astronomy experience at Select Citywalk through static creatives and short-form video.",
        cover: "assets/posts/p5/Saket1_Linkedin.jpg",
        items: [
          { type: "image", src: "assets/posts/p5/Saket1_Linkedin.jpg" },
          { type: "video", src: "assets/posts/p5/Saket2_Linkedin.mp4", poster: "assets/posts/p5/Saket2_Linkedin.jpg" },
          { type: "video", src: "assets/posts/p5/Saket3_Linkedin.mp4", poster: "assets/posts/p5/Saket3_Linkedin.jpg" },
          { type: "video", src: "assets/posts/p5/Saket4.mp4", poster: "assets/posts/p5/Saket4.jpg" },
          { type: "image", src: "assets/posts/p5/Saket5_Linkedin.jpg" }
        ]
      },
      {
        id: "post-6",
        title: "Post 06 — Understanding Color Harmonies",
        shortTitle: "Post 06",
        catLabel: "Design Education · Carousel",
        year: "2024",
        description: "An educational carousel introducing monochromatic, complementary, analogous, triadic and tetradic colour relationships.",
        cover: "assets/posts/p6/c1.png",
        images: [
          "assets/posts/p6/c1.png",
          "assets/posts/p6/c2.png",
          "assets/posts/p6/c3.png",
          "assets/posts/p6/c4.png",
          "assets/posts/p6/c5.png",
          "assets/posts/p6/c6.png"
        ]
      }
    ]
  },
  {
    title: "Presentations",
    category: "editorial",
    catLabel: "Editorial · Presentations",
    year: "2025–2026",
    size: "md",
    description: "A collection of presentation decks covering sustainable fashion, a DLF website redesign case study and investigative journalism.",
    image: "assets/presentations/sustainable-fashion/Sustainable-1.jpg",
    presentationCollection: true,
    presentations: [
      {
        id: "sustainable-fashion",
        title: "Introduction to Sustainable Fashion",
        shortTitle: "01",
        catLabel: "Sustainability · 9 slides",
        description: "A visual introduction to sustainable fashion, including environmental responsibility, ethical production, brands and consumer choices.",
        cover: "assets/presentations/sustainable-fashion/Sustainable-1.jpg",
        images: [
          "assets/presentations/sustainable-fashion/Sustainable-1.jpg",
          "assets/presentations/sustainable-fashion/Sustainable-2.jpg",
          "assets/presentations/sustainable-fashion/Sustainable-3.jpg",
          "assets/presentations/sustainable-fashion/Sustainable-4.jpg",
          "assets/presentations/sustainable-fashion/Sustainable-5.jpg",
          "assets/presentations/sustainable-fashion/Sustainable-6.jpg",
          "assets/presentations/sustainable-fashion/Sustainable-7.jpg",
          "assets/presentations/sustainable-fashion/Sustainable-8.jpg",
          "assets/presentations/sustainable-fashion/Sustainable-9.jpg"
        ]
      },
      {
        id: "dlf-website-redesign",
        title: "DLF Website Redesign",
        shortTitle: "02",
        catLabel: "UI/UX Case Study · 8 slides",
        description: "A case study presentation documenting the DLF website redesign, from current challenges to enhancements and performance analysis.",
        cover: "assets/presentations/dlf-website-redesign/DLF REDESIGNED-1.jpg",
        images: [
          "assets/presentations/dlf-website-redesign/DLF REDESIGNED-1.jpg",
          "assets/presentations/dlf-website-redesign/DLF REDESIGNED-2.jpg",
          "assets/presentations/dlf-website-redesign/DLF REDESIGNED-3.jpg",
          "assets/presentations/dlf-website-redesign/DLF REDESIGNED-4.jpg",
          "assets/presentations/dlf-website-redesign/DLF REDESIGNED-5.jpg",
          "assets/presentations/dlf-website-redesign/DLF REDESIGNED-6.jpg",
          "assets/presentations/dlf-website-redesign/DLF REDESIGNED-7.jpg",
          "assets/presentations/dlf-website-redesign/DLF REDESIGNED-8.jpg"
        ]
      },
      {
        id: "power-of-persistence",
        title: "The Power of Persistence",
        shortTitle: "03",
        catLabel: "Investigative Journalism · 9 slides",
        description: "A visual presentation tracing the history, core philosophy, landmark examples and modern challenges of investigative journalism.",
        cover: "assets/presentations/power-of-persistence/The power of persistence_KanakGarg-1.jpg",
        images: [
          "assets/presentations/power-of-persistence/The power of persistence_KanakGarg-1.jpg",
          "assets/presentations/power-of-persistence/The power of persistence_KanakGarg-2.jpg",
          "assets/presentations/power-of-persistence/The power of persistence_KanakGarg-3.jpg",
          "assets/presentations/power-of-persistence/The power of persistence_KanakGarg-4.jpg",
          "assets/presentations/power-of-persistence/The power of persistence_KanakGarg-5.jpg",
          "assets/presentations/power-of-persistence/The power of persistence_KanakGarg-6.jpg",
          "assets/presentations/power-of-persistence/The power of persistence_KanakGarg-7.jpg",
          "assets/presentations/power-of-persistence/The power of persistence_KanakGarg-8.jpg",
          "assets/presentations/power-of-persistence/The power of persistence_KanakGarg-9.jpg"
        ]
      }
    ]
  },
  {
    title: "Magazines",
    category: "editorial",
    catLabel: "Editorial · Magazine",
    year: "2025",
    size: "sm",
    description: "A six-issue magazine series for Skygaze India, presented as a focused editorial collection.",
    image: "assets/covers/monthly-magazine-cover.png",
    magazineCollection: true,
    magazines: [
      {
        id: "bth-issue-1",
        title: "Beyond the Horizon — Issue 01",
        shortTitle: "Issue 01",
        catLabel: "July 2025 · Vol. 1",
        pages: 16,
        cover: "assets/magazines/beyond-the-horizon/covers/beyond-the-horizon-vol-1-issue-1.jpg",
        pdf: "assets/magazines/beyond-the-horizon/beyond-the-horizon-vol-1-issue-1.pdf"
      },
      {
        id: "bth-issue-2",
        title: "Beyond the Horizon — Issue 02",
        shortTitle: "Issue 02",
        catLabel: "August 2025 · Vol. 1",
        pages: 14,
        cover: "assets/magazines/beyond-the-horizon/covers/beyond-the-horizon-vol-1-issue-2.jpg",
        pdf: "assets/magazines/beyond-the-horizon/beyond-the-horizon-vol-1-issue-2.pdf"
      },
      {
        id: "bth-issue-3",
        title: "Beyond the Horizon — Issue 03",
        shortTitle: "Issue 03",
        catLabel: "September 2025 · Vol. 1",
        pages: 16,
        cover: "assets/magazines/beyond-the-horizon/covers/beyond-the-horizon-vol-1-issue-3.jpg",
        pdf: "assets/magazines/beyond-the-horizon/beyond-the-horizon-vol-1-issue-3.pdf"
      },
      {
        id: "bth-issue-4",
        title: "Beyond the Horizon — Issue 04",
        shortTitle: "Issue 04",
        catLabel: "October 2025 · Vol. 1",
        pages: 16,
        cover: "assets/magazines/beyond-the-horizon/covers/beyond-the-horizon-vol-1-issue-4.jpg",
        pdf: "assets/magazines/beyond-the-horizon/beyond-the-horizon-vol-1-issue-4.pdf"
      },
      {
        id: "bth-issue-5",
        title: "Beyond the Horizon — Issue 05",
        shortTitle: "Issue 05",
        catLabel: "November 2025 · Vol. 1",
        pages: 16,
        cover: "assets/magazines/beyond-the-horizon/covers/beyond-the-horizon-vol-1-issue-5.jpg",
        pdf: "assets/magazines/beyond-the-horizon/beyond-the-horizon-vol-1-issue-5.pdf"
      },
      {
        id: "bth-issue-6",
        title: "Beyond the Horizon — Issue 06",
        shortTitle: "Issue 06",
        catLabel: "December 2025 · Vol. 1",
        pages: 16,
        cover: "assets/magazines/beyond-the-horizon/covers/beyond-the-horizon-vol-1-issue-6.jpg",
        pdf: "assets/magazines/beyond-the-horizon/beyond-the-horizon-vol-1-issue-6.pdf"
      }
    ]
  },

];

/* ---------- helpers ---------- */
const initials = (title) => title.split(" ").map(w => w[0]).slice(0,2).join("").toUpperCase();

function cardMarkup(p, idx){
  const media = p.image
    ? `<img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.parentElement.innerHTML = window.__phMarkup('${p.category}','${p.title.replace(/'/g,"")}')">`
    : phMarkup(p.category, p.title);

  // Projects with a viewer open an in-portfolio image gallery. Other real projects
  // keep their Behance link, while placeholder projects remain locked.
  const hasViewer = (p.postCollection === true && Array.isArray(p.posts) && p.posts.length > 0)
    || (p.magazineCollection === true && Array.isArray(p.magazines) && p.magazines.length > 0)
    || (p.presentationCollection === true && Array.isArray(p.presentations) && p.presentations.length > 0)
    || (p.viewer === true && Array.isArray(p.images) && p.images.length > 0);
  const hasLink = Boolean(p.link);
  const frameTag = hasViewer
    ? `<button class="card-frame project-view-trigger" type="button" data-project="${idx}" aria-label="Open ${p.title} project gallery">`
    : hasLink
      ? `<a class="card-frame" href="${p.link}" target="_blank" rel="noopener">`
      : `<div class="card-frame is-locked">`;
  const frameClose = (hasViewer || hasLink) ? `</${hasViewer ? 'button' : 'a'}>` : `</div>`;

  return `
    <article class="card reveal" data-cat="${p.category}" data-size="${p.size}" data-idx="${idx}">
      ${frameTag}
        ${media}
      ${frameClose}
      <div class="card-info">
        <div>
          <h3 class="card-title">${p.title}</h3>
          <span class="card-cat">${p.catLabel}</span>
        </div>
      </div>
    </article>`;
}

function phMarkup(category, title){
  return `<div class="ph"><span class="ph-mark">${category.toUpperCase()}</span><span class="ph-init">${initials(title)}</span></div>`;
}
window.__phMarkup = phMarkup;

/* ---------- render grids ---------- */
// Titles shown as the curated 4-up grid on the homepage.
// The full archive repeats these featured projects and includes every other project.
const featuredTitles = [
  "AardoSolutions Website",
  "Influencer Portfolio",
  "DLF Website",
  "Social Media Posts"
];

const indexed = projects.map((p, i) => ({ p, i }));

const homeGrid = document.getElementById("homeWorkGrid");
if (homeGrid){
  const featured = indexed.filter(o => featuredTitles.includes(o.p.title));
  homeGrid.innerHTML = featured.map(o => cardMarkup(o.p, o.i)).join("");
}

const projectsGrid = document.getElementById("projectsGrid");
if (projectsGrid){
  // The archive is a true all-projects view: homepage featured work is
  // intentionally repeated here as well.
  projectsGrid.innerHTML = indexed.map(o => cardMarkup(o.p, o.i)).join("");
}

const grid = homeGrid || projectsGrid;

/* ---------- filtering ---------- */
const filterBtns = document.querySelectorAll(".filter-btn");
const cards = () => document.querySelectorAll(".card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    const f = btn.dataset.filter;
    cards().forEach(c => {
      const match = f === "all" || c.dataset.cat === f;
      c.classList.toggle("is-hidden", !match);
    });
  });
});

/* ---------- project gallery modal ---------- */
const projectModal = document.createElement("div");
projectModal.className = "project-modal";
projectModal.id = "projectModal";
projectModal.setAttribute("aria-hidden", "true");
projectModal.innerHTML = `
  <div class="project-modal-backdrop" data-close-project></div>
  <div class="project-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="projectModalTitle">
    <header class="project-modal-head">
      <div class="project-modal-heading">
        <button class="project-back-posts" id="projectBackToPosts" type="button" aria-label="Back to all posts">← All posts</button>
        <div>
          <p class="project-modal-kicker">Project preview</p>
          <h2 id="projectModalTitle">AardoSolutions Website</h2>
        </div>
      </div>
      <button class="project-modal-close" type="button" aria-label="Close project preview">×</button>
    </header>
    <div class="project-modal-viewer">
      <button class="project-arrow project-arrow-prev" type="button" aria-label="Previous page">←</button>
      <div class="project-slide-wrap">
        <div class="project-slide" id="projectSlide"></div>
      </div>
      <button class="project-arrow project-arrow-next" type="button" aria-label="Next page">→</button>
    </div>
    <div class="project-modal-foot">
      <span id="projectCounter">Page 1 of 7</span>
      <span id="projectHint">Use the arrows or ← → keys to browse</span>
      <a id="projectBehance" href="https://www.behance.net/gallery/217313545/AardoSolutions-Website" target="_blank" rel="noopener">View full project on Behance ↗</a>
    </div>
  </div>`;
document.body.appendChild(projectModal);

/* ---------- graphics & posts collection ---------- */
const postsModal = document.createElement("div");
postsModal.className = "project-modal posts-modal";
postsModal.id = "postsModal";
postsModal.setAttribute("aria-hidden", "true");
postsModal.innerHTML = `
  <div class="project-modal-backdrop" data-close-posts></div>
  <div class="project-modal-dialog posts-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="postsModalTitle">
    <header class="project-modal-head">
      <div>
        <p class="project-modal-kicker">Social Media Posts</p>
        <h2 id="postsModalTitle">Post collection</h2>
      </div>
      <button class="project-modal-close" type="button" aria-label="Close social media posts">×</button>
    </header>
    <div class="posts-collection-wrap">
      <div class="posts-collection-intro">
        <p id="postsCollectionCount">3 posts · 12 slides</p>
        <span>Choose a post to browse its slides.</span>
      </div>
      <div class="posts-collection-grid" id="postsCollectionGrid"></div>
    </div>
  </div>`;
document.body.appendChild(postsModal);

/* ---------- magazines collection ---------- */
const magazinesModal = document.createElement("div");
magazinesModal.className = "project-modal magazines-modal";
magazinesModal.id = "magazinesModal";
magazinesModal.setAttribute("aria-hidden", "true");
magazinesModal.innerHTML = `
  <div class="project-modal-backdrop" data-close-magazines></div>
  <div class="project-modal-dialog magazines-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="magazinesModalTitle">
    <header class="project-modal-head">
      <div>
        <p class="project-modal-kicker">Magazines</p>
        <h2 id="magazinesModalTitle">Magazine collection</h2>
      </div>
      <button class="project-modal-close" type="button" aria-label="Close magazines">×</button>
    </header>
    <div class="posts-collection-wrap">
      <div class="posts-collection-intro">
        <p id="magazinesCollectionCount">6 issues</p>
        <span>Choose an issue to read the full magazine.</span>
      </div>
      <div class="posts-collection-grid" id="magazinesCollectionGrid"></div>
    </div>
  </div>`;
document.body.appendChild(magazinesModal);

/* ---------- presentations collection ---------- */
const presentationsModal = document.createElement("div");
presentationsModal.className = "project-modal presentations-modal";
presentationsModal.id = "presentationsModal";
presentationsModal.setAttribute("aria-hidden", "true");
presentationsModal.innerHTML = `
  <div class="project-modal-backdrop" data-close-presentations></div>
  <div class="project-modal-dialog magazines-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="presentationsModalTitle">
    <header class="project-modal-head">
      <div>
        <p class="project-modal-kicker">Presentations</p>
        <h2 id="presentationsModalTitle">Presentation collection</h2>
      </div>
      <button class="project-modal-close" type="button" aria-label="Close presentations">×</button>
    </header>
    <div class="posts-collection-wrap">
      <div class="posts-collection-intro">
        <p id="presentationsCollectionCount">3 presentations</p>
        <span>Choose a deck to browse it slide by slide.</span>
      </div>
      <div class="posts-collection-grid" id="presentationsCollectionGrid"></div>
    </div>
  </div>`;
document.body.appendChild(presentationsModal);

let activeProjectIndex = null;
let activePostIndex = null;
let activeSlideIndex = 0;
let returnToPostsCollection = false;
let returnToMagazineCollection = false;
let returnToPresentationCollection = false;
let activePresentationImages = null;

function openMagazineCollection(projectIndex){
  const project = projects[projectIndex];
  if (!project?.magazineCollection || !project.magazines?.length) return;
  activeProjectIndex = projectIndex;
  returnToMagazineCollection = false;
  const grid = document.getElementById("magazinesCollectionGrid");
  document.getElementById("magazinesCollectionCount").textContent =
    `${project.magazines.length} issues`;
  grid.innerHTML = project.magazines.map((mag, i) => `
    <article class="post-collection-card magazine-collection-card" data-magazine-index="${i}" tabindex="0" role="button" aria-label="Open ${mag.title}">
      <div class="post-collection-cover magazine-cover">
        <img src="${mag.cover}" alt="${mag.title}" loading="lazy" decoding="async">
        <span class="post-slide-count">${mag.pages} pages</span>
        <span class="post-open-label">Read issue →</span>
      </div>
      <div class="post-collection-info">
        <div>
          <p class="post-collection-number">${mag.shortTitle}</p>
          <h3>${mag.title.replace(/^Beyond the Horizon — /, "")}</h3>
        </div>
        <span>${mag.catLabel}</span>
      </div>
    </article>
  `).join("");
  magazinesModal.classList.add("is-open");
  magazinesModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("project-modal-open");
}

function closeMagazinesCollection(){
  magazinesModal.classList.remove("is-open");
  magazinesModal.setAttribute("aria-hidden", "true");
}

function openMagazineViewer(projectIndex, magazineIndex){
  const project = projects[projectIndex];
  const magazine = project?.magazines?.[magazineIndex];
  if (!magazine?.pdf) return;
  activeProjectIndex = projectIndex;
  returnToMagazineCollection = true;
  returnToPostsCollection = false;
  activePostIndex = null;
  activeSlideIndex = 0;
  const slide = document.getElementById("projectSlide");
  const title = document.getElementById("projectModalTitle");
  const counter = document.getElementById("projectCounter");
  const behance = document.getElementById("projectBehance");
  const hint = document.getElementById("projectHint");
  const back = document.getElementById("projectBackToPosts");
  const prev = document.querySelector(".project-arrow-prev");
  const next = document.querySelector(".project-arrow-next");
  title.textContent = magazine.title;
  counter.textContent = `${magazine.pages} pages`;
  hint.textContent = "Read the complete magazine in the viewer";
  behance.style.display = "none";
  back.style.display = "inline-flex";
  back.textContent = "← All magazines";
  prev.style.display = "none";
  next.style.display = "none";
  slide.innerHTML = `<iframe class="magazine-pdf-frame" src="${magazine.pdf}#page=1&view=FitH" title="${magazine.title}" loading="lazy"></iframe>`;
  projectModal.classList.add("is-open");
  projectModal.setAttribute("aria-hidden", "false");
  magazinesModal.classList.remove("is-open");
  magazinesModal.setAttribute("aria-hidden", "true");
  document.body.classList.add("project-modal-open");
}

function openPresentationCollection(projectIndex){
  const project = projects[projectIndex];
  if (!project?.presentationCollection || !project.presentations?.length) return;
  activeProjectIndex = projectIndex;
  returnToPresentationCollection = false;
  const grid = document.getElementById("presentationsCollectionGrid");
  document.getElementById("presentationsCollectionCount").textContent =
    `${project.presentations.length} presentations`;
  grid.innerHTML = project.presentations.map((presentation, i) => `
    <article class="post-collection-card magazine-collection-card presentation-collection-card"
      data-presentation-index="${i}" tabindex="0" role="button" aria-label="Open ${presentation.title}">
      <div class="post-collection-cover magazine-cover">
        <img src="${presentation.cover}" alt="${presentation.title}" loading="lazy" decoding="async">
        <span class="post-slide-count">${presentation.images.length} slides</span>
        <span class="post-open-label">Open deck →</span>
      </div>
      <div class="post-collection-info">
        <div>
          <p class="post-collection-number">Presentation ${presentation.shortTitle}</p>
          <h3>${presentation.title}</h3>
        </div>
        <span>${presentation.catLabel}</span>
      </div>
    </article>
  `).join("");
  presentationsModal.classList.add("is-open");
  presentationsModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("project-modal-open");
}

function closePresentationsCollection(){
  presentationsModal.classList.remove("is-open");
  presentationsModal.setAttribute("aria-hidden", "true");
}

function openPresentationViewer(projectIndex, presentationIndex){
  const project = projects[projectIndex];
  const presentation = project?.presentations?.[presentationIndex];
  if (!presentation?.images?.length) return;
  activeProjectIndex = projectIndex;
  activePresentationImages = presentation.images;
  returnToPresentationCollection = true;
  returnToPostsCollection = false;
  returnToMagazineCollection = false;
  activePostIndex = null;
  activeSlideIndex = 0;

  const slide = document.getElementById("projectSlide");
  document.getElementById("projectModalTitle").textContent = presentation.title;
  document.getElementById("projectCounter").textContent = `Slide 1 of ${presentation.images.length}`;
  document.getElementById("projectHint").textContent = "Use the arrows or ← → keys to browse";
  document.getElementById("projectBehance").style.display = "none";
  const back = document.getElementById("projectBackToPosts");
  back.style.display = "inline-flex";
  back.textContent = "← All presentations";
  document.querySelector(".project-arrow-prev").style.display = "grid";
  document.querySelector(".project-arrow-next").style.display = "grid";

  slide.innerHTML = presentation.images.map((src, i) => `
    <img class="project-page-image ${i === 0 ? "is-active" : ""}" src="${src}" alt="${presentation.title} — slide ${i + 1}" draggable="false" decoding="async">
  `).join("");

  projectModal.classList.add("is-open");
  projectModal.setAttribute("aria-hidden", "false");
  presentationsModal.classList.remove("is-open");
  presentationsModal.setAttribute("aria-hidden", "true");
  document.body.classList.add("project-modal-open");
  setProjectSlide(0);
}

function openPostsCollection(projectIndex){
  const project = projects[projectIndex];
  if (!project?.postCollection || !project.posts?.length) return;
  activeProjectIndex = projectIndex;
  returnToPostsCollection = false;
  const grid = document.getElementById("postsCollectionGrid");
  const totalSlides = project.posts.reduce((sum, post) => sum + (post.items ? post.items.length : post.images.length), 0);
  document.getElementById("postsCollectionCount").textContent =
    `${project.posts.length} posts · ${totalSlides} items`;
  grid.innerHTML = project.posts.map((post, i) => `
    <article class="post-collection-card" data-post-index="${i}" tabindex="0" role="button" aria-label="Open ${post.title}">
      <div class="post-collection-cover">
        <img src="${post.cover}" alt="${post.title}" loading="lazy" decoding="async">
        <span class="post-slide-count">${post.items ? post.items.length : post.images.length} ${post.items ? "items" : "slides"}</span>
        <span class="post-open-label">Open post →</span>
      </div>
      <div class="post-collection-info">
        <div>
          <p class="post-collection-number">${post.shortTitle}</p>
          <h3>${post.title.replace(/^Post \\d+ — /, "")}</h3>
        </div>
        <span>${post.catLabel}</span>
      </div>
    </article>
  `).join("");
  postsModal.classList.add("is-open");
  postsModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("project-modal-open");
}

function closePostsCollection(){
  postsModal.classList.remove("is-open");
  postsModal.setAttribute("aria-hidden", "true");
}

function openPostGallery(projectIndex, postIndex, slideIndex = 0){
  const project = projects[projectIndex];
  const post = project?.posts?.[postIndex];
  const items = post?.items || (post?.images || []).map(src => ({ type: "image", src }));
  if (!items.length) return;
  activeProjectIndex = projectIndex;
  activePostIndex = postIndex;
  returnToPostsCollection = true;
  activeSlideIndex = Math.max(0, Math.min(slideIndex, items.length - 1));
  const slide = document.getElementById("projectSlide");
  const title = document.getElementById("projectModalTitle");
  const counter = document.getElementById("projectCounter");
  const behance = document.getElementById("projectBehance");
  const hint = document.getElementById("projectHint");
  const back = document.getElementById("projectBackToPosts");
  const prev = document.querySelector(".project-arrow-prev");
  const next = document.querySelector(".project-arrow-next");
  title.textContent = post.title;
  behance.style.display = "none";
  prev.style.display = items.length === 1 ? "none" : "grid";
  next.style.display = items.length === 1 ? "none" : "grid";
  hint.textContent = items.length === 1 ? "Scroll to explore the artwork" : "Use the arrows or ← → keys to browse";
  back.style.display = "inline-flex";
  back.textContent = "← All posts";
  slide.innerHTML = items.map((item, i) => item.type === "video"
    ? `<video class="project-page-video ${i === activeSlideIndex ? "is-active" : ""}" src="${item.src}" poster="${item.poster || ""}" controls playsinline preload="metadata"></video>`
    : `<img class="project-page-image ${i === activeSlideIndex ? "is-active" : ""}" src="${item.src}" alt="${post.title} — slide ${i + 1}" draggable="false" decoding="async">`
  ).join("");
  projectModal.classList.add("is-open");
  projectModal.setAttribute("aria-hidden", "false");
  postsModal.classList.remove("is-open");
  postsModal.setAttribute("aria-hidden", "true");
  document.body.classList.add("project-modal-open");
  setProjectSlide(activeSlideIndex);
}

function openProjectGallery(projectIndex, slideIndex = 0){
  const project = projects[projectIndex];
  if (project?.postCollection){
    openPostsCollection(projectIndex);
    return;
  }
  if (project?.magazineCollection){
    openMagazineCollection(projectIndex);
    return;
  }
  if (project?.presentationCollection){
    openPresentationCollection(projectIndex);
    return;
  }
  if (!project || !project.images?.length) return;
  activeProjectIndex = projectIndex;
  activeSlideIndex = Math.max(0, Math.min(slideIndex, project.images.length - 1));
  const slide = document.getElementById("projectSlide");
  const title = document.getElementById("projectModalTitle");
  const counter = document.getElementById("projectCounter");
  const behance = document.getElementById("projectBehance");
  const hint = document.getElementById("projectHint");
  const back = document.getElementById("projectBackToPosts");
  const prev = document.querySelector(".project-arrow-prev");
  const next = document.querySelector(".project-arrow-next");
  const isSingle = project.images.length === 1;
  title.textContent = project.viewerTitle || project.title;
  back.style.display = "none";
  behance.href = project.link || "#";
  behance.style.display = project.link ? "inline-flex" : "none";
  prev.style.display = isSingle ? "none" : "grid";
  next.style.display = isSingle ? "none" : "grid";
  hint.textContent = isSingle ? "Scroll to explore the full page" : "Use the arrows or ← → keys to browse";
  slide.innerHTML = project.images.map((src, i) => `
    <img class="project-page-image ${i === activeSlideIndex ? "is-active" : ""}" src="${src}" alt="${(project.viewerTitle || project.title)} — page ${i + 1}" draggable="false" decoding="async">
  `).join("");
  slide.querySelectorAll("img").forEach((img, i) => {
    img.addEventListener("click", () => {
      if (i === activeSlideIndex) return;
      setProjectSlide(i);
    });
  });
  projectModal.classList.add("is-open");
  projectModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("project-modal-open");
  setProjectSlide(activeSlideIndex);
}

function setProjectSlide(index){
  const project = projects[activeProjectIndex];
  if (!project) return;
  const post = returnToPostsCollection && project.posts?.[activePostIndex] ? project.posts[activePostIndex] : null;
  const items = post ? (post.items || (post.images || []).map(src => ({ type: "image", src }))) : null;
  const slides = post ? items : (returnToPresentationCollection ? activePresentationImages : project.images);
  if (!slides?.length) return;
  activeSlideIndex = (index + slides.length) % slides.length;
  document.querySelectorAll(".project-page-image, .project-page-video").forEach((media, i) => media.classList.toggle("is-active", i === activeSlideIndex));
  const counter = document.getElementById("projectCounter");
  counter.textContent = slides.length === 1
    ? "Full page preview"
    : `${returnToPostsCollection ? "Slide" : "Page"} ${activeSlideIndex + 1} of ${slides.length}`;
}

function closeProjectGallery(){
  projectModal.classList.remove("is-open");
  projectModal.setAttribute("aria-hidden", "true");
  if (returnToPostsCollection){
    returnToPostsCollection = false;
    openPostsCollection(activeProjectIndex);
    return;
  }
  if (returnToMagazineCollection){
    returnToMagazineCollection = false;
    openMagazineCollection(activeProjectIndex);
    return;
  }
  if (returnToPresentationCollection){
    returnToPresentationCollection = false;
    activePresentationImages = null;
    openPresentationCollection(activeProjectIndex);
    return;
  }
  document.body.classList.remove("project-modal-open");
}

document.addEventListener("click", (e) => {
  const presentationCard = e.target.closest(".presentation-collection-card");
  if (presentationCard){
    const idx = Number(presentationCard.dataset.presentationIndex);
    if (Number.isInteger(activeProjectIndex)) openPresentationViewer(activeProjectIndex, idx);
    return;
  }
  if (e.target.closest("[data-close-presentations]")){
    closePresentationsCollection();
    document.body.classList.remove("project-modal-open");
    return;
  }
  if (e.target.closest(".presentations-modal .project-modal-close")){
    closePresentationsCollection();
    document.body.classList.remove("project-modal-open");
    return;
  }
  const magazineCard = e.target.closest(".magazine-collection-card");
  if (magazineCard){
    const idx = Number(magazineCard.dataset.magazineIndex);
    if (Number.isInteger(activeProjectIndex)) openMagazineViewer(activeProjectIndex, idx);
    return;
  }
  const postCard = e.target.closest(".post-collection-card");
  if (postCard){
    const idx = Number(postCard.dataset.postIndex);
    if (Number.isInteger(activeProjectIndex)) openPostGallery(activeProjectIndex, idx);
    return;
  }
  const backToPosts = e.target.closest("#projectBackToPosts");
  if (backToPosts){
    projectModal.classList.remove("is-open");
    projectModal.setAttribute("aria-hidden", "true");
    if (returnToPresentationCollection){
      openPresentationCollection(activeProjectIndex);
    } else if (returnToMagazineCollection){
      openMagazineCollection(activeProjectIndex);
    } else {
      openPostsCollection(activeProjectIndex);
    }
    return;
  }
  const trigger = e.target.closest(".project-view-trigger");
  if (trigger){
    e.preventDefault();
    openProjectGallery(Number(trigger.dataset.project));
    return;
  }
  if (e.target.closest("[data-close-magazines]")){
    closeMagazinesCollection();
    document.body.classList.remove("project-modal-open");
    return;
  }
  if (e.target.closest(".magazines-modal .project-modal-close")){
    closeMagazinesCollection();
    document.body.classList.remove("project-modal-open");
    return;
  }
  if (e.target.closest("[data-close-posts]")){
    closePostsCollection();
    document.body.classList.remove("project-modal-open");
    return;
  }
  if (e.target.closest(".posts-modal .project-modal-close")){
    closePostsCollection();
    document.body.classList.remove("project-modal-open");
    return;
  }
  if (e.target.closest("[data-close-project], .project-modal-close")){
    closeProjectGallery();
    return;
  }
  if (e.target.closest(".project-arrow-prev")){
    setProjectSlide(activeSlideIndex - 1);
    return;
  }
  if (e.target.closest(".project-arrow-next")){
    setProjectSlide(activeSlideIndex + 1);
  }
});

document.addEventListener("keydown", (e) => {
  if (presentationsModal.classList.contains("is-open")){
    if (e.key === "Escape"){
      closePresentationsCollection();
      document.body.classList.remove("project-modal-open");
      return;
    }
    if ((e.key === "Enter" || e.key === " ") && e.target.closest(".presentation-collection-card")){
      e.preventDefault();
      const card = e.target.closest(".presentation-collection-card");
      openPresentationViewer(activeProjectIndex, Number(card.dataset.presentationIndex));
      return;
    }
  }
  if (magazinesModal.classList.contains("is-open")){
    if (e.key === "Escape"){
      closeMagazinesCollection();
      document.body.classList.remove("project-modal-open");
      return;
    }
    if ((e.key === "Enter" || e.key === " ") && e.target.closest(".magazine-collection-card")){
      e.preventDefault();
      const card = e.target.closest(".magazine-collection-card");
      openMagazineViewer(activeProjectIndex, Number(card.dataset.magazineIndex));
      return;
    }
  }
  if (postsModal.classList.contains("is-open")){
    if (e.key === "Escape"){
      closePostsCollection();
      document.body.classList.remove("project-modal-open");
      return;
    }
    if ((e.key === "Enter" || e.key === " ") && e.target.closest(".post-collection-card")){
      e.preventDefault();
      const card = e.target.closest(".post-collection-card");
      openPostGallery(activeProjectIndex, Number(card.dataset.postIndex));
      return;
    }
  }
  if (!projectModal.classList.contains("is-open")) return;
  if (e.key === "Escape") closeProjectGallery();
  if (e.key === "ArrowLeft") setProjectSlide(activeSlideIndex - 1);
  if (e.key === "ArrowRight") setProjectSlide(activeSlideIndex + 1);
});

/* ---------- scroll reveal ---------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting){
      e.target.classList.add("is-visible");
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

document.querySelectorAll(".reveal, .card").forEach(el => revealObserver.observe(el));

/* ---------- mobile nav ---------- */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("is-open");
  menuToggle.classList.toggle("is-open", open);
  menuToggle.setAttribute("aria-expanded", open);
});
document.querySelectorAll("[data-nav]").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    menuToggle.classList.remove("is-open");
  });
});

/* ---------- custom cursor ---------- */
const cursorDot = document.getElementById("cursorDot");
let cx = 0, cy = 0, tx = 0, ty = 0;
if (window.matchMedia("(hover:hover) and (pointer:fine)").matches){
  window.addEventListener("mousemove", (e) => {
    tx = e.clientX; ty = e.clientY;
    cursorDot.classList.add("is-visible");
  });
  (function raf(){
    cx += (tx - cx) * 0.18;
    cy += (ty - cy) * 0.18;
    cursorDot.style.transform = `translate(${cx}px, ${cy}px) translate(-50%,-50%)`;
    requestAnimationFrame(raf);
  })();
  document.querySelectorAll(".card-frame").forEach(el => {
    const isLinked = el.tagName === "A";
    el.addEventListener("mouseenter", () => {
      if (!isLinked) return;
      cursorDot.classList.add("is-view");
      cursorDot.textContent = "View on Behance";
    });
    el.addEventListener("mouseleave", () => { cursorDot.classList.remove("is-view"); cursorDot.textContent = ""; });
  });
}

/* ---------- hero title line reveal on load ---------- */
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-line]").forEach((el, i) => {
    el.style.transform = "translateY(110%)";
    el.style.transition = `transform .8s var(--ease, ease-out) ${i * 0.08 + 0.1}s`;
    requestAnimationFrame(() => requestAnimationFrame(() => { el.style.transform = "translateY(0)"; }));
  });
});
