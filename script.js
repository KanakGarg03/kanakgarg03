const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const nav = document.getElementById('nav');
const wa = document.getElementById('wa');
const badge = document.getElementById('badge');
const badgeInner = document.getElementById('badgeInner');

function revealIntro(){
  document.querySelectorAll('.hero-word .word').forEach((el,i)=>setTimeout(()=>el.style.transform='none', i*110));
}
if(document.querySelector('.hero-word')) setTimeout(revealIntro, 150);

window.addEventListener('scroll',()=>{
  const y=scrollY, h=innerHeight;
  if(nav) nav.classList.toggle('show', y > h*.7);
  if(wa) wa.classList.toggle('show', y > h*.7);
  if(!reduce){
    document.querySelectorAll('.hero-word').forEach((el,i)=>el.style.transform=`translateY(${y*.035*(i%2?1:-1)}px)`);
  }
},{passive:true});

let flipped=false, timer;
function flipCard(){
  if(!badgeInner) return;
  flipped=!flipped;
  badgeInner.classList.toggle('flip',flipped);
  clearTimeout(timer);
  timer=setTimeout(flipCard,3600);
}
if(badge && badgeInner){
  if(!reduce) timer=setTimeout(flipCard,3100);
  badge.addEventListener('click',flipCard);
  badge.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();flipCard()}});
}

const typeEl=document.getElementById('typeText');
if(typeEl){
  const phrases=['UI/UX and graphic designer','Responsive web and mobile design','Brand identity and visual storytelling','Based in Delhi, India'];
  let phrase=0, pos=0, deleting=false;
  function typeLoop(){
    if(reduce){typeEl.textContent=phrases[0];return}
    const text=phrases[phrase];
    typeEl.textContent=text.slice(0,pos);
    if(!deleting && pos<text.length) pos++;
    else if(deleting && pos>0) pos--;
    else if(pos===text.length){deleting=true;setTimeout(typeLoop,1100);return}
    else {deleting=false;phrase=(phrase+1)%phrases.length}
    setTimeout(typeLoop,deleting?35:55);
  }
  typeLoop();
}

const io=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in');io.unobserve(entry.target)}});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

const workPin=document.getElementById('workPin');
const workRow=document.getElementById('workRow');
const fill=document.getElementById('progressFill');
function workScroll(){
  if(!workPin || !workRow) return;
  const rect=workPin.getBoundingClientRect(), max=Math.max(1,workPin.offsetHeight-innerHeight);
  const p=Math.min(1,Math.max(0,-rect.top/max));
  const maxX=Math.max(0,workRow.scrollWidth-innerWidth*.84);
  workRow.style.transform=`translateX(${-maxX*p}px)`;
  if(fill) fill.style.width=(p*100)+'%';
  [...workRow.children].forEach(card=>{
    const r=card.getBoundingClientRect(), center=innerWidth/2, distance=Math.abs((r.left+r.width/2)-center);
    const t=Math.min(1,distance/innerWidth);
    card.style.transform=`scale(${1-.08*t}) rotate(${(r.left+r.width/2-center)/180}deg)`;
  });
}
if(workPin && workRow){
  window.addEventListener('scroll',workScroll,{passive:true});
  window.addEventListener('resize',workScroll);
  workScroll();
}

document.querySelectorAll('.magnetic').forEach(btn=>{
  btn.addEventListener('mousemove',e=>{
    if(innerWidth<900)return;
    const r=btn.getBoundingClientRect();
    btn.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.12}px,${(e.clientY-r.top-r.height/2)*.12}px)`;
  });
  btn.addEventListener('mouseleave',()=>btn.style.transform='');
});

/* =========================================================
   PROJECT VIEWER
   Uses the same gallery-style behaviour as the other
   Kanak Garg portfolio, with the supplied project photos.
========================================================= */
const projectModal = document.getElementById('projectModal');
const projectSlide = document.getElementById('projectSlide');
const projectTitle = document.getElementById('projectModalTitle');
const projectCategory = document.getElementById('projectModalCategory');
const projectCounter = document.getElementById('projectCounter');
const projectDescription = document.getElementById('projectModalDescription');
const projectBehance = document.getElementById('projectBehance');
const projectThumbs = document.getElementById('projectThumbs');

const projectData = {
  aardo:{
    title:'Aardo Solutions Website',
    category:'UI/UX · Web Design',
    description:'Full website design for Aardo Solutions — a marketing site built around a clear digital identity, structured information and a polished visual system.',
    link:'https://www.behance.net/gallery/217313545/AardoSolutions-Website',
    images:['assets/project-gallery/aardo-cover.png','assets/project-gallery/01.png','assets/project-gallery/02.png','assets/project-gallery/03.png','assets/project-gallery/04.png','assets/project-gallery/05.png','assets/project-gallery/06.png','assets/project-gallery/07.png']
  },
  influencer:{
    title:'Influencer Portfolio',
    category:'UI/UX · Web Design',
    description:'A portfolio site concept for a lifestyle creator, designed around visual storytelling and a strong personal-brand presentation.',
    link:'https://www.behance.net/gallery/217312953/Influencer-Portfolio',
    images:['assets/project-gallery/influencer-cover.png','assets/project-gallery/influencer-portfolio.png']
  },
  social:{
    title:'Social Media Posts',
    category:'Graphic Design · Social Media',
    description:'A collection of social media creatives and campaign posts focused on clear visual communication, educational content and promotion.',
    link:'https://www.behance.net/kanakgarg2',
    images:['assets/project-gallery/social-cover.png','assets/project-gallery/contrast1.png','assets/project-gallery/contrast2.png','assets/project-gallery/contrast3.png','assets/project-gallery/1.png','assets/project-gallery/2.png']
  },
  dlf:{
    title:'DLF Website Redesign',
    category:'UI/UX · Web Design',
    description:'A multi-page DLF website redesign concept focused on clean hierarchy, modern presentation and a polished digital experience.',
    link:'https://www.behance.net/gallery/217312721/DLF-Redesign',
    images:['assets/project-gallery/dlf-cover.png','assets/project-gallery/DLF1.png','assets/project-gallery/DLF2.png','assets/project-gallery/DLF3.png','assets/project-gallery/DLF4.png']
  },
  skygaze:{
    title:'Skygaze India Website',
    category:'Web Design',
    description:'Company website work focused on a consistent brand identity and a clear digital presentation across the site.',
    link:'https://www.behance.net/kanakgarg2',
    images:['images/projects/skygaze.svg']
  },
  gym:{
    title:'Gym Website & App',
    category:'UI/UX',
    description:'Gym website templates and a management solution designed for web and mobile with a focus on usability and clear interface structure.',
    link:'https://www.behance.net/kanakgarg2',
    images:['images/projects/gym.svg']
  },
  alumni:{
    title:'Alumni Portal',
    category:'UI/UX',
    description:'A college alumni portal designed to strengthen alumni connectivity and provide a structured digital experience.',
    link:'https://www.behance.net/kanakgarg2',
    images:['images/projects/alumni.svg']
  },
  love:{
    title:'Love Languages',
    category:'Web Design',
    description:'A website concept focused on emotional connection, visual storytelling and user interaction.',
    link:'https://www.behance.net/kanakgarg2',
    images:['images/projects/love.svg']
  }
};

let activeProject = null;
let activeSlide = 0;

function renderProject(index){
  const project = projectData[index];
  if(!project || !projectModal) return;
  activeProject=index;
  activeSlide=0;
  projectTitle.textContent=project.title;
  projectCategory.textContent=project.category;
  projectDescription.textContent=project.description;
  projectBehance.href=project.link || '#';
  projectBehance.style.display=project.link ? 'inline-flex' : 'none';
  projectSlide.innerHTML=project.images.map((src,i)=>`<img class="project-modal-image ${i===0?'is-active':''}" src="${src}" alt="${project.title} — image ${i+1}" draggable="false">`).join('');
  projectThumbs.innerHTML=project.images.map((src,i)=>`<button class="project-thumb ${i===0?'is-active':''}" type="button" data-slide="${i}" aria-label="Open image ${i+1}"><img src="${src}" alt=""></button>`).join('');
  projectCounter.textContent=`1 / ${project.images.length}`;
  projectModal.classList.add('is-open');
  projectModal.setAttribute('aria-hidden','false');
  document.body.classList.add('project-modal-open');
}

function showSlide(index){
  if(activeProject===null) return;
  const project=projectData[activeProject];
  if(!project) return;
  activeSlide=(index+project.images.length)%project.images.length;
  document.querySelectorAll('.project-modal-image').forEach((img,i)=>img.classList.toggle('is-active',i===activeSlide));
  document.querySelectorAll('.project-thumb').forEach((thumb,i)=>thumb.classList.toggle('is-active',i===activeSlide));
  if(projectCounter) projectCounter.textContent=`${activeSlide+1} / ${project.images.length}`;
}

function closeProject(){
  if(!projectModal) return;
  projectModal.classList.remove('is-open');
  projectModal.setAttribute('aria-hidden','true');
  document.body.classList.remove('project-modal-open');
  activeProject=null;
}

document.addEventListener('click',e=>{
  const trigger=e.target.closest('.project-trigger');
  if(trigger){e.preventDefault();renderProject(trigger.dataset.project);return;}
  const thumb=e.target.closest('.project-thumb');
  if(thumb){showSlide(Number(thumb.dataset.slide));return;}
  if(e.target.closest('.project-arrow-prev')){showSlide(activeSlide-1);return;}
  if(e.target.closest('.project-arrow-next')){showSlide(activeSlide+1);return;}
  if(e.target.closest('[data-close-project]') || e.target.closest('.project-modal-close')){closeProject();return;}
});

document.addEventListener('keydown',e=>{
  if(!projectModal || !projectModal.classList.contains('is-open')) return;
  if(e.key==='Escape') closeProject();
  if(e.key==='ArrowLeft') showSlide(activeSlide-1);
  if(e.key==='ArrowRight') showSlide(activeSlide+1);
});
