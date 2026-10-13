// Contact Form Submit with AJAX & Formspree Integration
async function handleContactSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  
  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      const formElem = document.getElementById('contact-form');
      const successElem = document.getElementById('form-success');
      if (formElem) formElem.classList.add('hidden');
      if (successElem) successElem.classList.remove('hidden');
      setTimeout(() => {
        closeContactModal();
      }, 2500);
    } else {
      alert('Oops! There was a problem submitting your form.');
    }
  } catch (error) {
    alert('Oops! There was a problem connecting to the server.');
  }
}

// Mobile navigation toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// Copy Code snippet functionality
function copyCode() {
  const codeText = `const developer = {\n  name: "Rana",\n  skills: ["Automation", "Web Dev", "Python", "AI Solutions"],\n  passion: "Building innovative and efficient solutions for the web"\n};`;
  navigator.clipboard.writeText(codeText).then(() => {
    const copyIcon = document.getElementById('copy-icon');
    const copiedBadge = document.getElementById('copied-badge');
    if (copyIcon && copiedBadge) {
      copyIcon.classList.add('hidden');
      copiedBadge.classList.remove('hidden');
      setTimeout(() => {
        copyIcon.classList.remove('hidden');
        copiedBadge.classList.add('hidden');
      }, 2000);
    }
  });
}

// Download CV / Drive Link Function
function downloadCV() {
  const driveUrl = "https://drive.google.com/file/d/1jzRgNsmzuIsBgbk1jJjtjMamPZfDEhTL/view?usp=sharing";
  window.open(driveUrl, '_blank');
}

// Modal Control: Contact
function openContactModal() {
  const modal = document.getElementById('contact-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeContactModal() {
  const modal = document.getElementById('contact-modal');
  const form = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  if (modal) modal.classList.add('hidden');
  if (form) form.classList.remove('hidden');
  if (success) success.classList.add('hidden');
}

// Modal Control: About
function openAboutModal() {
  const modal = document.getElementById('about-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeAboutModal() {
  const modal = document.getElementById('about-modal');
  if (modal) modal.classList.add('hidden');
}

// Project Details Data & Modal
const projectsData = {
  ecommerce: {
    title: "E-Commerce Platform",
    subtitle: "High-Performance Full-Stack Online Retail System",
    tech: ["React.js", "Node.js", "Express", "Stripe API", "PostgreSQL", "Tailwind CSS"],
    description: "A comprehensive digital commerce platform engineered for high conversion rates. Includes dynamic product filtering, cart persistence, real-time inventory synchronization, instant payment processing via Stripe, and an intuitive administrative order management dashboard."
  },
  taskmanager: {
    title: "Task Management App",
    subtitle: "Collaborative Kanban & Agile Workflow Engine",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "React Beautiful DND"],
    description: "A sleek project management suite featuring real-time multi-user drag-and-drop boards, automated sprint cycle tracking, member presence indicators, priority labels, and automated activity notifications."
  },
  crypto: {
    title: "Crypto Dashboard",
    subtitle: "Real-Time Digital Asset Analytics & Terminal",
    tech: ["Vue.js / React", "WebSockets", "D3.js / Chart.js", "CoinGecko API", "Tailwind CSS"],
    description: "An ultra-fast cryptocurrency tracking platform with live streaming ticker prices, multi-timeframe candlestick graphs, portfolio profit/loss calculators, and customizable price volatility alert notifications."
  }
};

function openProjectModal(key) {
  const data = projectsData[key];
  if (!data) return;
  const container = document.getElementById('project-modal-content');
  if (container) {
    container.innerHTML = `
      <span class="text-xs font-semibold text-violet-400 tracking-wider uppercase">PROJECT CASE STUDY</span>
      <h3 class="text-2xl font-bold text-white mt-1">${data.title}</h3>
      <p class="text-xs text-slate-400 mt-0.5">${data.subtitle}</p>
      
      <p class="text-sm text-slate-300 leading-relaxed mt-4">${data.description}</p>
      
      <div class="mt-4">
        <h4 class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Technologies Used:</h4>
        <div class="flex flex-wrap gap-2">
          ${data.tech.map(t => `<span class="px-2.5 py-1 rounded bg-[#1b1e3f] text-violet-300 text-xs font-mono border border-violet-500/20">${t}</span>`).join('')}
        </div>
      </div>

      <div class="flex items-center gap-3 mt-6 pt-4 border-t border-[#1f2242]">
        <a href="#contact" onclick="closeProjectModal(); openContactModal();" class="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold shadow-lg shadow-violet-600/30">
          Request Demo / Inquire
        </a>
        <button onclick="closeProjectModal()" class="px-5 py-2.5 rounded-xl bg-[#161833] hover:bg-[#202347] text-slate-300 text-xs font-semibold">
          Close
        </button>
      </div>
    `;
  }
  const modal = document.getElementById('project-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) modal.classList.add('hidden');
}

// Projects Slider Data & Function
const projectPagesData = [
  // Page 1: Recent Projects

  `
  <div class="group rounded-2xl bg-[#111326] border border-[#1f2242] hover:border-violet-500/50 transition-all duration-300 overflow-hidden flex flex-col hover:shadow-[0_10px_30px_rgba(124,58,237,0.2)]">
    <div class="relative bg-[#0d0e1f] p-4 border-b border-[#1f2242]/70 h-52 flex flex-col justify-between overflow-hidden">
      <div class="flex items-center justify-between z-10" style="padding-bottom:10px;">
        <span class="font-mono text-xs font-bold text-violet-400 px-2 py-0.5 rounded bg-violet-950/80 border border-violet-500/30">01</span>
        <span class="text-[11px] text-slate-400 font-mono">Python • Flask • APIs</span>
      </div>
      <div class="text-center "> <img src="Images/Radio_Dashboard.png" alt="Radio_Dashboard" style="width: 360px !important;
    height: 148px; border: 1px solid; border-radius: 1rem; border-color: rgb(139 92 246 / 0.2);"}> </div>
    </div>
    <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
      <div>
        <h3 class="text-lg font-bold text-white group-hover:text-violet-400 transition-colors">Radio Dashboard</h3>
        <p class="text-xs text-slate-400 mt-2 leading-relaxed">An analytical dashboard for spectrum consumption in cognitive radio, featuring real-time overview metrics, spectrum results breakdown, user reputation tracking, and geographic location distribution.</p>
      </div>
      <span class="text-xs font-semibold text-violet-400">GPS & Location Tracking</span>
    </div>
  </div>

  <div class="group rounded-2xl bg-[#111326] border border-[#1f2242] hover:border-violet-500/50 transition-all duration-300 overflow-hidden flex flex-col hover:shadow-[0_10px_30px_rgba(124,58,237,0.2)]">
    <div class="relative bg-[#0d0e1f] p-4 border-b border-[#1f2242]/70 h-52 flex flex-col justify-between overflow-hidden">
      <div class="flex items-center justify-between z-10" style="padding-bottom:10px;">
        <span class="font-mono text-xs font-bold text-violet-400 px-2 py-0.5 rounded bg-violet-950/80 border border-violet-500/30">01</span>
        <span class="text-[11px] text-slate-400 font-mono">Python • Flask • APIs • SAP • Scripts</span>
      </div>
      <div class="text-center "> <img src="Images/ELV.png" alt="ELV_Portal_System" style="width: 360px !important;
    height: 148px; border: 1px solid; border-radius: 1rem; border-color: rgb(139 92 246 / 0.2);"}> </div>
    </div>
    <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
      <div>
        <h3 class="text-lg font-bold text-white group-hover:text-violet-400 transition-colors">ELV Systems Portal</h3>
        <p class="text-xs text-slate-400 mt-2 leading-relaxed">Pre-sales engineering portal calculating CCTV storage (H.265), PoE switch loads, access control specs, plus inventory stock levels and project tracking.</p>
      </div>
      <span class="text-xs font-semibold text-violet-400">SAP & ELV </span>
    </div>
  </div>

  <div class="group rounded-2xl bg-[#111326] border border-[#1f2242] hover:border-violet-500/50 transition-all duration-300 overflow-hidden flex flex-col hover:shadow-[0_10px_30px_rgba(124,58,237,0.2)]">
    <div class="relative bg-[#0d0e1f] p-4 border-b border-[#1f2242]/70 h-52 flex flex-col justify-between overflow-hidden">
      <div class="flex items-center justify-between z-10" style="padding-bottom:10px;">
        <span class="font-mono text-xs font-bold text-violet-400 px-2 py-0.5 rounded bg-violet-950/80 border border-violet-500/30">01</span>
        <span class="text-[11px] text-slate-400 font-mono">Python • Flask • APIs • Garafana</span>
      </div>
      <div class="text-center "> <img src="Images/Audit.png" alt="Audit_System" style="width: 360px !important;
    height: 148px; border: 1px solid; border-radius: 1rem; border-color: rgb(139 92 246 / 0.2);"}> </div>
    </div>
    <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
      <div>
        <h3 class="text-lg font-bold text-white group-hover:text-violet-400 transition-colors">Unified Security & Audit System</h3>
        <p class="text-xs text-slate-400 mt-2 leading-relaxed">A centralized security and auditing platform that aggregates compliance logs, threat detection, and operational metrics from VMS infrastructure, web applications, and internal toolboxes. Features a unified management dashboard powered by Grafana for real-time security monitoring and governance.</p>
      </div>
      <span class="text-xs font-semibold text-violet-400">Grafana Dashboards</span>
    </div>
  </div>
  `
  ,


  // Page 2: Recent Tasks
  `
  <div class="group rounded-2xl bg-[#111326] border border-[#1f2242] hover:border-violet-500/50 transition-all duration-300 overflow-hidden flex flex-col hover:shadow-[0_10px_30px_rgba(124,58,237,0.2)]">
    <div class="relative bg-[#0d0e1f] p-4 border-b border-[#1f2242]/70 h-52 flex flex-col justify-between overflow-hidden">
      <div class="flex items-center justify-between z-10 padding_bt">
        <span class="font-mono text-xs font-bold text-violet-400 px-2 py-0.5 rounded bg-violet-950/80 border border-violet-500/30">01</span>
        <span class="text-[11px] text-slate-400 font-mono">Python • IoT • Web/Mobile App • AI </span>
      </div>
      <div class="text-center "> <img src="Images/car-rental-html-template.jpg" style="width: 360px !important;
    height: 148px; border: 1px solid; border-radius: 1rem; border-color: rgb(139 92 246 / 0.2);"}> </div>
    </div>
    <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
      <div>
        <h3 class="text-lg font-bold text-white group-hover:text-violet-400 transition-colors">Smart Parking System</h3>
        <p class="text-xs text-slate-400 mt-2 leading-relaxed">Fully automated smart parking system featuring online slot reservation, real-time availability tracking, secure online payment, and zero human intervention. Integrated with AI face recognition for access validation and GPS/location mapping.</p>
      </div>
      <span class="text-xs font-semibold text-violet-400">Automation & AI Project</span>
    </div>
  </div>

  <div class="group rounded-2xl bg-[#111326] border border-[#1f2242] hover:border-violet-500/50 transition-all duration-300 overflow-hidden flex flex-col hover:shadow-[0_10px_30px_rgba(124,58,237,0.2)]">
    <div class="relative bg-[#0d0e1f] p-4 border-b border-[#1f2242]/70 h-52 flex flex-col justify-between overflow-hidden">
      <div class="flex items-center justify-between z-10 padding_bt">
        <span class="font-mono text-xs font-bold text-violet-400 px-2 py-0.5 rounded bg-violet-950/80 border border-violet-500/30">02</span>
        <span class="text-[11px] text-slate-400 font-mono">UiPath • REFramework • Python</span>
      </div>
      <div class="text-center "> <img src="Images/RPA.png" style="width: 360px !important;
    height: 148px; border: 1px solid; border-radius: 1rem; border-color: rgb(139 92 246 / 0.2);"}> </div>
    </div>
    <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
      <div>
        <h3 class="text-lg font-bold text-white group-hover:text-violet-400 transition-colors">Enterprise RPA Suite</h3>
        <p class="text-xs text-slate-400 mt-2 leading-relaxed">A full-stack desktop application designed for large-scale enterprise automation, centralizing all operational tasks. Ideal for managing complex RPA deployments and pipelines</p>
      </div>
      <span class="text-xs font-semibold text-violet-400">Enterprise Solution</span>
    </div>
  </div>

  <div class="group rounded-2xl bg-[#111326] border border-[#1f2242] hover:border-violet-500/50 transition-all duration-300 overflow-hidden flex flex-col hover:shadow-[0_10px_30px_rgba(124,58,237,0.2)]">
    <div class="relative bg-[#0d0e1f] p-4 border-b border-[#1f2242]/70 h-52 flex flex-col justify-between overflow-hidden">
      <div class="flex items-center justify-between z-10 padding_bt">
        <span class="font-mono text-xs font-bold text-violet-400 px-2 py-0.5 rounded bg-violet-950/80 border border-violet-500/30">03</span>
        <span class="text-[11px] text-slate-400 font-mono">Python • Netmiko • Routing</span>
      </div>
      <div class="text-center "> <img src="Images/Network_Scripts.png" style="width: 360px !important;
    height: 148px; border: 1px solid; border-radius: 1rem; border-color: rgb(139 92 246 / 0.2);"}> </div>
    </div>
    <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
      <div>
        <h3 class="text-lg font-bold text-white group-hover:text-violet-400 transition-colors">Network Automation Scripts</h3>
        <p class="text-xs text-slate-400 mt-2 leading-relaxed">Generate automatic scripts for routing protocols, config backups, and infrastructure governance validation across network devices.</p>
      </div>
      <span class="text-xs font-semibold text-violet-400">Network Engineering</span>
    </div>
  </div>
  `,
  
  // Page 3: Recent Tasks
  


  `
  <div class="group rounded-2xl bg-[#111326] border border-[#1f2242] hover:border-violet-500/50 transition-all duration-300 overflow-hidden flex flex-col hover:shadow-[0_10px_30px_rgba(124,58,237,0.2)]">
    <div class="relative bg-[#0d0e1f] p-4 border-b border-[#1f2242]/70 h-52 flex flex-col justify-between overflow-hidden">
      <div class="flex items-center justify-between z-10 padding_bt">
        <span class="font-mono text-xs font-bold text-violet-400 px-2 py-0.5 rounded bg-violet-950/80 border border-violet-500/30">01</span>
        <span class="text-[11px] text-slate-400 font-mono">React • Node • Stripe</span>
      </div>
      <div class="text-center "> <img src="Images/e-comm.png" style="width: 360px !important;
    height: 148px; border: 1px solid; border-radius: 1rem; border-color: rgb(139 92 246 / 0.2);"}> </div>
      
    </div>
    <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
      <div>
        <h3 class="text-lg font-bold text-white group-hover:text-violet-400 transition-colors">E-Commerce Platform</h3>
        <p class="text-xs text-slate-400 mt-2 leading-relaxed">Full-stack e-commerce solution with modern UI/UX, real-time inventory tracking, and seamless Stripe checkout integration.</p>
      </div>
      <span class="text-xs font-semibold text-violet-400">E-Commerce & Budget</span>
      </div>
  </div>

  <div class="group rounded-2xl bg-[#111326] border border-[#1f2242] hover:border-violet-500/50 transition-all duration-300 overflow-hidden flex flex-col hover:shadow-[0_10px_30px_rgba(124,58,237,0.2)]">
    <div class="relative bg-[#0d0e1f] p-4 border-b border-[#1f2242]/70 h-52 flex flex-col justify-between overflow-hidden">
      <div class="flex items-center justify-between z-10 padding_bt">
        <span class="font-mono text-xs font-bold text-violet-400 px-2 py-0.5 rounded bg-violet-950/80 border border-violet-500/30">02</span>
        <span class="text-[11px] text-slate-400 font-mono">Next.js • SAP • Tailwind • Netmiko</span>
      </div>
      <div class="text-center "> <img src="Images/SAP.png" style="width: 360px !important;
    height: 148px; border: 1px solid; border-radius: 1rem; border-color: rgb(139 92 246 / 0.2);"}> </div>
    </div>
    <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
      <div>
        <h3 class="text-lg font-bold text-white group-hover:text-violet-400 transition-colors">SAP Asset & Spec Governance Platform</h3>
        <p class="text-xs text-slate-400 mt-2 leading-relaxed">An enterprise-grade integration system linking Python and SAP ERP to automate hardware/software asset management, verify team cost-center allocations, and validate engineering BOM and SF6 specifications prior to SAP posting.</p>
      </div>
      <span class="text-xs font-semibold text-violet-400">SAP & Material Planning</span>
    </div>
  </div>

  <div class="group rounded-2xl bg-[#111326] border border-[#1f2242] hover:border-violet-500/50 transition-all duration-300 overflow-hidden flex flex-col hover:shadow-[0_10px_30px_rgba(124,58,237,0.2)]">
    <div class="relative bg-[#0d0e1f] p-4 border-b border-[#1f2242]/70 h-52 flex flex-col justify-between overflow-hidden">
      <div class="flex items-center justify-between z-10 padding_bt">
        <span class="font-mono text-xs font-bold text-violet-400 px-2 py-0.5 rounded bg-violet-950/80 border border-violet-500/30">03</span>
        <span class="text-[11px] text-slate-400 font-mono">Vue • WebSockets • D3.js</span>
      </div>
      <div class="text-center "> <img src="Images/Crypto Dashboard.png" style="width: 360px !important;
    height: 148px; border: 1px solid; border-radius: 1rem; border-color: rgb(139 92 246 / 0.2);"}> </div>
    </div>
    <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
      <div>
        <h3 class="text-lg font-bold text-white group-hover:text-violet-400 transition-colors">Crypto Dashboard</h3>
        <p class="text-xs text-slate-400 mt-2 leading-relaxed">Real-time cryptocurrency tracking dashboard with interactive candlestick charts, portfolio analytics, and automated price alerts.</p>
      </div>
      <span class="text-xs font-semibold text-violet-400">Market & Investment</span>
      </div>
  </div>
  `  
];

function switchSlide(pageIndex) {
  const grid = document.getElementById('projects-grid');
  if (grid) {
    grid.innerHTML = projectPagesData[pageIndex];
  }

  for (let i = 0; i < 3; i++) {
    const dot = document.getElementById(`dot-${i}`);
    if (dot) {
      if (i === pageIndex) {
        dot.className = "w-2.5 h-2.5 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(124,58,237,0.8)] cursor-pointer transition-colors";
      } else {
        dot.className = "w-2 h-2 rounded-full bg-slate-700 hover:bg-slate-500 cursor-pointer transition-colors";
      }
    }
  }
}

// Close modals on clicking outside overlay or pressing Escape
window.addEventListener('click', (e) => {
  ['contact-modal', 'project-modal', 'about-modal'].forEach(id => {
    const modal = document.getElementById(id);
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    ['contact-modal', 'project-modal', 'about-modal'].forEach(id => {
      const modal = document.getElementById(id);
      if (modal) modal.classList.add('hidden');
    });
  }
});

// Animate stats counter and skill bars on scroll
const observerOptions = { threshold: 0.25 };
let countersStarted = false;
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !countersStarted) {
      countersStarted = true;
      document.querySelectorAll('.counter').forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const isPercent = counter.innerText.includes('%');
        let current = 0;
        const step = Math.max(1, Math.floor(target / 40));
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          counter.innerText = current + (isPercent ? '%' : '+');
        }, 30);
      });
    }
  });
}, observerOptions);

const aboutSection = document.getElementById('about');
if (aboutSection) statsObserver.observe(aboutSection);

const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.skill-bar').forEach(bar => {
        const w = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
          bar.style.width = w;
        }, 100);
      });
      skillsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

const skillsSection = document.getElementById('skills');
if (skillsSection) skillsObserver.observe(skillsSection);


///////////////////////////////////////
////////////////////////////////
//////////////////////////////
/// ==========================================
// SUPABASE TESTIMONIALS & SLIDER MANAGEMENT
// ==========================================

const SUPABASE_URL = 'https://gavqyudklkwfxodwawve.supabase.co'; 
const SUPABASE_ANON_KEY = 'sb_publishable_4V06Xdg3_zlfq1rUncRbPQ_g_wylDPN';

const supabaseClient = (window.supabase && window.supabase.createClient) 
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) 
  : null;

// Modal Control: Review
function openReviewModal() {
  const modal = document.getElementById('review-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeReviewModal() {
  const modal = document.getElementById('review-modal');
  if (modal) modal.classList.add('hidden');
}

// Variables lil-Slider
let reviewsList = [];
let currentReviewIndex = 0;
let sliderInterval = null;

// 1. Fetch ALL Reviews (From Oldest to Newest)
async function loadReviews() {
  if (!supabaseClient) return;

  // Order ascending: true (3alashan ygeeb aqdam review al-awwal)
  const { data, error } = await supabaseClient
    .from('Reviews')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Error fetching reviews:', error);
    return;
  }

  if (data && data.length > 0) {
    reviewsList = data;
    currentReviewIndex = 0; // Ebda3 men aqdam review
    displayReview(currentReviewIndex);
    startTestimonialSlider(); // Ebda3 al-taqleeb al-tilqa'i
  }
}

// 2. Display A Specific Review By Index
function displayReview(index) {
  if (reviewsList.length === 0) return;

  const review = reviewsList[index];
  
  const nameEl = document.getElementById('testimonial-name');
  const titleEl = document.getElementById('testimonial-title');
  const textEl = document.getElementById('testimonial-text');
  
  if (nameEl) nameEl.textContent = review.name;
  if (titleEl) titleEl.textContent = review.title;
  if (textEl && review.message) textEl.textContent = `"${review.message}"`;
}

// 3. Start Auto Slider (Every 2 Seconds)
function startTestimonialSlider() {
  // Law feey interval saabiq, imsahoh 3alashan ma y3melsh double timing
  if (sliderInterval) clearInterval(sliderInterval);

  sliderInterval = setInterval(() => {
    if (reviewsList.length > 0) {
      currentReviewIndex = (currentReviewIndex + 1) % reviewsList.length; // Yrooh lil-ba3doh w-yelf tani
      displayReview(currentReviewIndex);
    }
  }, 2000); // 2000 ms = 2 Seconds
}

// 4. Pause & Resume Slider On Hover
function pauseTestimonials() {
  if (sliderInterval) clearInterval(sliderInterval);
}

function resumeTestimonials() {
  startTestimonialSlider();
}

// 5. Handle Form Submit
async function handleReviewSubmit(event) {
  event.preventDefault(); 

  const name = document.getElementById('review-name').value;
  const title = document.getElementById('review-title').value;
  const message = document.getElementById('review-message').value;

  if (!supabaseClient) return;

  const { data, error } = await supabaseClient
    .from('Reviews')
    .insert([
      { name: name, title: title, message: message }
    ]);

  if (error) {
    alert('Khata2 fi hifz al-bayanat: ' + error.message);
  } else {
    alert('Done, Your Feedback Saved ❤️');
    closeReviewModal();
    document.getElementById('review-form').reset();
    loadReviews(); // Refresh w-re-start slider b-al-data al-gadeeda
  }
}

// Run on page load
document.addEventListener('DOMContentLoaded', () => {
  switchSlide(0);
  loadReviews(); 
});