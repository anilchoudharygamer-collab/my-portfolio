// Part 1
document.addEventListener('DOMContentLoaded', () => {
  for (let i = 1; i <= 8; i++) {
    const container = document.getElementById(`panel-svg-${i}`);
    if (container && window.ComicIllustrations[`renderPanel${i}`]) {
      container.innerHTML = window.ComicIllustrations[`renderPanel${i}`]();
    }
  }
  init3DTilt();
  initStoryModal();
  initProjectModals();
  initSkillFilters();
  initAudioToggle();
  initContactForm();
  initKeyboardNav();
  initProgressBar();
});

function init3DTilt() {
  const panels = document.querySelectorAll('.comic-panel');
  panels.forEach(panel => {
    panel.addEventListener('mousemove', (e) => {
      const rect = panel.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;
      panel.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale(1.01)`;
    });
    panel.addEventListener('mouseleave', () => {
      panel.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)';
    });
    panel.addEventListener('click', () => {
      const panelId = parseInt(panel.getAttribute('data-panel-id'), 10);
      if (panelId) openStoryPanel(panelId);
    });
  });
}

const STORY_DATA = {
  1: {
    num: "01", title: "MY INTRODUCTION", subtitle: "The Genesis of an AI & ML Engineer", badge: "ORIGIN STORY",
    heroText: "Passionate about technology, programming, and building innovative solutions that can make a real-world impact.",
    content: `
      <div class="space-y-4 text-slate-800 leading-relaxed">
        <p class="text-lg font-medium text-slate-900">
          Welcome to the digital chronicles of <strong>Anil Choudhary</strong>! 2nd-year B.Tech CSE (AI & ML) student at <strong>Lovely Professional University</strong>.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div class="bg-amber-50 border-2 border-black p-4 rounded-lg shadow-[3px_3px_0px_#000]">
            <h4 class="font-comic-title text-lg text-amber-900 mb-1">⚡ CORE MISSION</h4>
            <p class="text-sm text-slate-700">Bridging theoretical machine learning with robust, production-grade software and robotics systems.</p>
          </div>
          <div class="bg-sky-50 border-2 border-black p-4 rounded-lg shadow-[3px_3px_0px_#000]">
            <h4 class="font-comic-title text-lg text-sky-900 mb-1">🚀 CURRENT FOCUS</h4>
            <p class="text-sm text-slate-700">Deepening algorithmic rigor in Python & C++, exploring neural networks, and cyber defense.</p>
          </div>
        </div>
      </div>
    `
  },
  2: {
    num: "02", title: "MY EDUCATION", subtitle: "A High-Distinction Academic Voyage", badge: "ACADEMIC QUEST",
    heroText: "Consistent academic excellence from foundational schooling to advanced engineering coursework.",
    content: `
      <div class="space-y-4 text-slate-800">
        <div class="bg-white border-2 border-black p-4 rounded-lg shadow-[4px_4px_0px_#000]">
          <h4 class="font-bold text-base text-slate-900">B.Tech - Computer Science & Engineering (AI & ML)</h4>
          <p class="text-sm text-amber-800 font-semibold">Lovely Professional University, Punjab • Aug 2023 - Present</p>
          <p class="text-xs text-slate-600 mt-1">2nd Year • <strong>Current CGPA: 8.33 / 7.4</strong></p>
        </div>
        <div class="bg-white border-2 border-black p-4 rounded-lg shadow-[4px_4px_0px_#000]">
          <h4 class="font-bold text-base text-slate-900">Higher Secondary Education (12th Grade)</h4>
          <p class="text-sm text-sky-800 font-semibold">Narayana Junior College, Nellore, AP • <strong>Percentage: 97.1%</strong></p>
        </div>
        <div class="bg-white border-2 border-black p-4 rounded-lg shadow-[4px_4px_0px_#000]">
          <h4 class="font-bold text-base text-slate-900">Secondary Education (10th Grade)</h4>
          <p class="text-sm text-emerald-800 font-semibold">Sri Krishna VIBGYOR School, Nellore, AP • <strong>Percentage: 99.7%</strong></p>
        </div>
      </div>
    `
  },
  3: {
    num: "03", title: "MY SKILLS", subtitle: "Technical Arsenal & Power Gauges", badge: "TECH MATRIX",
    heroText: "A comprehensive stack spanning languages, modern web, databases, and cybersecurity.",
    content: `
      <div class="space-y-4">
        <div>
          <h4 class="font-comic-title text-base text-slate-900 mb-2">💻 PROGRAMMING LANGUAGES</h4>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <div class="p-2 bg-yellow-50 border-2 border-black rounded text-center font-bold text-xs">🐍 Python</div>
            <div class="p-2 bg-red-50 border-2 border-black rounded text-center font-bold text-xs">☕ Java</div>
            <div class="p-2 bg-amber-50 border-2 border-black rounded text-center font-bold text-xs">⚡ JavaScript</div>
            <div class="p-2 bg-blue-50 border-2 border-black rounded text-center font-bold text-xs">⚙️ C</div>
            <div class="p-2 bg-indigo-50 border-2 border-black rounded text-center font-bold text-xs">🚀 C++</div>
            <div class="p-2 bg-purple-50 border-2 border-black rounded text-center font-bold text-xs">🐘 PHP</div>
          </div>
        </div>
        <div>
          <h4 class="font-comic-title text-base text-slate-900 mb-2">🌐 WEB &amp; DATABASES</h4>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <div class="p-2 bg-white border-2 border-black rounded text-center text-xs font-bold">React.js</div>
            <div class="p-2 bg-white border-2 border-black rounded text-center text-xs font-bold">Node.js</div>
            <div class="p-2 bg-white border-2 border-black rounded text-center text-xs font-bold">MySQL</div>
            <div class="p-2 bg-white border-2 border-black rounded text-center text-xs font-bold">MongoDB</div>
          </div>
        </div>
      </div>
    `
  },
  4: {
    num: "04", title: "MY EXPERIENCE", subtitle: "Social Contribution & Mentorship", badge: "COMMUNITY HERO",
    heroText: "Dedicated 30 hours of academic teaching and NGO welfare drives at Aarna Foundation.",
    content: `
      <div class="space-y-4 text-slate-800">
        <div class="bg-amber-50 border-3 border-black p-4 rounded-xl shadow-[4px_4px_0px_#000]">
          <h4 class="font-comic-title text-lg text-amber-950 mb-1">AARNA FOUNDATION (Intern / Volunteer)</h4>
          <p class="text-xs text-amber-900 font-semibold mb-2">July 9, 2026 – July 14, 2026 (30 Hours Certified)</p>
          <ul class="text-xs text-slate-700 list-disc list-inside space-y-1">
            <li>Taught children in academic learning and structured educational activities.</li>
            <li>Assisted students with homework, assignments, and academic doubts.</li>
            <li>Participated in social welfare drives: Vidyadaan, Jeevandaan, Annadaan, and Cloth Donation.</li>
            <li>Cultivated leadership, communication, and teaching skills.</li>
          </ul>
        </div>
        <button onclick="window.certificateModal.open('aarna')" class="w-full py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg border-2 border-black shadow-[3px_3px_0px_#000] text-xs">
          📜 Inspect Aarna Foundation Certificate
        </button>
      </div>
    `
  }
};

Object.assign(STORY_DATA, {
  5: {
    num: "05", title: "MY PROJECTS", subtitle: "Autonomous Robotics & Healthcare Tech", badge: "INNOVATION LAB",
    heroText: "From sensor-based autonomous robotics to responsive healthcare web systems.",
    content: `
      <div class="space-y-4">
        <div class="bg-sky-50 border-2 border-black p-3.5 rounded-lg shadow-[3px_3px_0px_#000]">
          <h4 class="font-comic-title text-base text-slate-900">🤖 Payload Human Following Robot</h4>
          <p class="text-xs text-slate-600 mb-2">Autonomous robot tracking humans with IR/Ultrasonic sensors while transporting payload.</p>
          <button onclick="openProjectDemo('robot')" class="px-3 py-1.5 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded border-2 border-black shadow-[2px_2px_0px_#000] text-xs">
            🎮 Open Interactive Robot Simulator
          </button>
        </div>
        <div class="bg-emerald-50 border-2 border-black p-3.5 rounded-lg shadow-[3px_3px_0px_#000]">
          <h4 class="font-comic-title text-base text-slate-900">🏥 Hospital Management Website</h4>
          <p class="text-xs text-slate-600 mb-2">Full-stack healthcare portal with patient check-in and medical records telemetry.</p>
          <button onclick="openProjectDemo('hospital')" class="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded border-2 border-black shadow-[2px_2px_0px_#000] text-xs">
            🏥 Open Healthcare Dashboard Demo
          </button>
        </div>
      </div>
    `
  },
  6: {
    num: "06", title: "MY ACHIEVEMENTS", subtitle: "Certifications & Hackathon Finishes", badge: "HALL OF FAME",
    heroText: "Verified credentials from global institutions and competitive coding milestones.",
    content: `
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
        <div onclick="window.certificateModal.open('cybersecurity')" class="cursor-pointer bg-white hover:bg-blue-50 border-2 border-black p-2.5 rounded shadow-[2px_2px_0px_#000]">
          <p class="font-bold text-slate-900">🛡️ Cyber Security Certification</p>
          <p class="text-slate-500">Infosys Springboard • Mar 2026</p>
        </div>
        <div onclick="window.certificateModal.open('python')" class="cursor-pointer bg-white hover:bg-emerald-50 border-2 border-black p-2.5 rounded shadow-[2px_2px_0px_#000]">
          <p class="font-bold text-slate-900">🐍 CS105: Intro to Python</p>
          <p class="text-slate-500">Saylor Academy • Feb 2026</p>
        </div>
        <div onclick="window.certificateModal.open('aarna')" class="cursor-pointer bg-white hover:bg-amber-50 border-2 border-black p-2.5 rounded shadow-[2px_2px_0px_#000]">
          <p class="font-bold text-slate-900">🤝 Aarna 30-Hour Drive</p>
          <p class="text-slate-500">Aarna Foundation • Jul 2026</p>
        </div>
        <div class="bg-yellow-50 border-2 border-black p-2.5 rounded shadow-[2px_2px_0px_#000]">
          <p class="font-bold text-slate-900">🏆 200+ Problems &amp; Hackathons</p>
          <p class="text-slate-600">LeetCode 100d • Top 10 Hackathon</p>
        </div>
      </div>
    `
  },
  7: {
    num: "07", title: "MY STRENGTHS", subtitle: "4 Pillars of Character", badge: "SUPERPOWERS",
    heroText: "Core strengths that drive high performance and successful engineering.",
    content: `
      <div class="grid grid-cols-2 gap-2 text-xs">
        <div class="bg-amber-50 border-2 border-black p-2.5 rounded shadow-[2px_2px_0px_#000]">
          <p class="font-bold text-amber-900">⚡ ADAPTABLE</p>
          <p class="text-slate-600">Quickly adjusts to new technologies.</p>
        </div>
        <div class="bg-sky-50 border-2 border-black p-2.5 rounded shadow-[2px_2px_0px_#000]">
          <p class="font-bold text-sky-900">🤝 TEAM PLAYER</p>
          <p class="text-slate-600">Collaborates with positive synergy.</p>
        </div>
        <div class="bg-emerald-50 border-2 border-black p-2.5 rounded shadow-[2px_2px_0px_#000]">
          <p class="font-bold text-emerald-900">🚀 QUICK LEARNER</p>
          <p class="text-slate-600">Mastering emerging AI stacks.</p>
        </div>
        <div class="bg-rose-50 border-2 border-black p-2.5 rounded shadow-[2px_2px_0px_#000]">
          <p class="font-bold text-rose-900">🧠 PROBLEM SOLVER</p>
          <p class="text-slate-600">Analytical computational logic.</p>
        </div>
      </div>
    `
  },
  8: {
    num: "08", title: "MY GOAL", subtitle: "Summit Quest & Future Horizons", badge: "THE SUMMIT",
    heroText: "Every line of code, every project, and every challenge is one step closer to the future I want to build.",
    content: `
      <div class="space-y-3 text-xs text-slate-800">
        <div class="bg-amber-50 border-2 border-black p-3 rounded shadow-[2px_2px_0px_#000]">
          <p class="font-bold text-amber-900">🎯 SHORT-TERM GOAL</p>
          <p>Sharpening AI/ML, Python, CyberSec &amp; problem-solving skills with practical systems.</p>
        </div>
        <div class="bg-purple-50 border-2 border-black p-3 rounded shadow-[2px_2px_0px_#000]">
          <p class="font-bold text-purple-900">🏔️ LONG-TERM GOAL</p>
          <p>Become a tech leader crafting ethical, impactful AI-driven solutions.</p>
        </div>
      </div>
    `
  }
});

let currentStoryPanelId = 1;

function initStoryModal() {
  document.getElementById('story-modal-close')?.addEventListener('click', closeStoryModal);
  document.getElementById('story-prev-btn')?.addEventListener('click', () => navigateStory(-1));
  document.getElementById('story-next-btn')?.addEventListener('click', () => navigateStory(1));
  document.getElementById('story-modal')?.addEventListener('click', (e) => {
    if (e.target === document.getElementById('story-modal')) closeStoryModal();
  });
}

function openStoryPanel(panelId) {
  currentStoryPanelId = panelId;
  const data = STORY_DATA[panelId];
  if (!data) return;

  if (window.comicSoundFX) window.comicSoundFX.playFlip();

  document.getElementById('story-modal-num').textContent = data.num;
  document.getElementById('story-modal-title').textContent = data.title;
  document.getElementById('story-modal-sub').textContent = data.subtitle;
  document.getElementById('story-modal-badge').textContent = data.badge;
  document.getElementById('story-modal-hero').textContent = data.heroText;
  document.getElementById('story-modal-content').innerHTML = data.content;

  const illus = document.getElementById('story-modal-illus');
  if (illus && window.ComicIllustrations[`renderPanel${panelId}`]) {
    illus.innerHTML = window.ComicIllustrations[`renderPanel${panelId}`]();
  }

  const prevBtn = document.getElementById('story-prev-btn');
  const nextBtn = document.getElementById('story-next-btn');
  if (prevBtn) prevBtn.disabled = panelId === 1;
  if (nextBtn) nextBtn.disabled = panelId === 8;

  const modal = document.getElementById('story-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }
}

function closeStoryModal() {
  if (window.comicSoundFX) window.comicSoundFX.playPop();
  const modal = document.getElementById('story-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }
}

function navigateStory(delta) {
  const newId = currentStoryPanelId + delta;
  if (newId >= 1 && newId <= 8) openStoryPanel(newId);
}

function initProjectModals() {
  document.getElementById('project-modal-close')?.addEventListener('click', closeProjectModal);
  document.getElementById('project-modal')?.addEventListener('click', (e) => {
    if (e.target === document.getElementById('project-modal')) closeProjectModal();
  });
}

function openProjectDemo(projectType) {
  if (window.comicSoundFX) window.comicSoundFX.playWhoosh();
  const modal = document.getElementById('project-modal');
  const title = document.getElementById('project-modal-title');
  const body = document.getElementById('project-modal-body');
  if (!modal || !title || !body) return;

  if (projectType === 'robot') {
    title.textContent = '🤖 ROBOT LAB: Payload Human Following Robot';
    body.innerHTML = `
      <div class="space-y-4">
        <div class="bg-slate-900 border-3 border-black p-4 rounded-xl text-white font-mono">
          <div class="flex justify-between items-center mb-3">
            <span class="text-xs text-cyan-400">TELEMETRY: ACTIVE</span>
            <span class="px-2 py-0.5 bg-green-500 text-black text-xs font-bold rounded">ONLINE</span>
          </div>
          <div class="grid grid-cols-3 gap-2 text-center text-xs mb-4">
            <div class="bg-slate-800 p-2 rounded border border-slate-700">
              <span class="text-slate-400 block text-[10px]">DISTANCE</span>
              <span id="sim-dist" class="text-amber-400 font-bold text-sm">45 cm</span>
            </div>
            <div class="bg-slate-800 p-2 rounded border border-slate-700">
              <span class="text-slate-400 block text-[10px]">MOTOR SPEED</span>
              <span id="sim-rpm" class="text-cyan-400 font-bold text-sm">180 RPM</span>
            </div>
            <div class="bg-slate-800 p-2 rounded border border-slate-700">
              <span class="text-slate-400 block text-[10px]">PAYLOAD</span>
              <span id="sim-payload" class="text-emerald-400 font-bold text-sm">1.5 kg</span>
            </div>
          </div>
          <div class="flex flex-wrap gap-2 justify-center pt-2">
            <button onclick="simRobotAction('follow')" class="px-3 py-1.5 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded text-xs">🚶 Step Forward</button>
            <button onclick="simRobotAction('payload')" class="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded text-xs">📦 Add +0.5kg</button>
            <button onclick="simRobotAction('obstacle')" class="px-3 py-1.5 bg-rose-500 hover:bg-rose-600 text-white font-bold rounded text-xs">🛑 Obstacle</button>
          </div>
        </div>
      </div>
    `;
  } else {
    title.textContent = '🏥 HEALTHCARE HUB: Hospital Management System';
    body.innerHTML = `
      <div class="space-y-4">
        <div class="bg-slate-900 border-3 border-black p-4 rounded-xl text-white font-mono">
          <div class="flex justify-between items-center mb-3">
            <span class="text-xs text-emerald-400">COMMAND CENTER</span>
            <span class="px-2 py-0.5 bg-emerald-500 text-black text-xs font-bold rounded">DB SYNCED</span>
          </div>
          <div class="grid grid-cols-3 gap-2 text-center text-xs mb-4">
            <div class="bg-slate-800 p-2 rounded border border-slate-700">
              <span class="text-slate-400 block text-[10px]">PATIENTS</span>
              <span id="hosp-pat" class="text-emerald-400 font-bold text-sm">1,248</span>
            </div>
            <div class="bg-slate-800 p-2 rounded border border-slate-700">
              <span class="text-slate-400 block text-[10px]">DOCTORS</span>
              <span id="hosp-doc" class="text-cyan-400 font-bold text-sm">84</span>
            </div>
            <div class="bg-slate-800 p-2 rounded border border-slate-700">
              <span class="text-slate-400 block text-[10px]">OCCUPANCY</span>
              <span id="hosp-bed" class="text-amber-400 font-bold text-sm">92%</span>
            </div>
          </div>
          <div class="flex flex-wrap gap-2 justify-center pt-2">
            <button onclick="simHospitalAction('admit')" class="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded text-xs">➕ Admit Patient</button>
            <button onclick="simHospitalAction('schedule')" class="px-3 py-1.5 bg-sky-500 hover:bg-sky-600 text-black font-bold rounded text-xs">📅 Call Shift</button>
          </div>
        </div>
      </div>
    `;
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  if (window.comicSoundFX) window.comicSoundFX.playPop();
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }
}

window.simRobotAction = function(action) {
  if (window.comicSoundFX) window.comicSoundFX.playBeep();
  const dist = document.getElementById('sim-dist');
  const rpm = document.getElementById('sim-rpm');
  const payload = document.getElementById('sim-payload');
  if (action === 'follow') {
    if (dist) dist.textContent = `${Math.floor(Math.random() * 25 + 35)} cm`;
    if (rpm) rpm.textContent = `${Math.floor(Math.random() * 40 + 170)} RPM`;
  } else if (action === 'payload') {
    if (payload) payload.textContent = `${(parseFloat(payload.textContent) + 0.5).toFixed(1)} kg`;
  } else if (action === 'obstacle') {
    if (dist) dist.textContent = '15 cm (STOP)';
    if (rpm) rpm.textContent = '0 RPM (BRAKE)';
  }
};

window.simHospitalAction = function(action) {
  if (window.comicSoundFX) window.comicSoundFX.playPop();
  const pat = document.getElementById('hosp-pat');
  const doc = document.getElementById('hosp-doc');
  if (action === 'admit' && pat) {
    pat.textContent = (parseInt(pat.textContent.replace(',', '')) + 1).toLocaleString();
  } else if (action === 'schedule' && doc) {
    doc.textContent = (parseInt(doc.textContent) + 1).toString();
  }
};

function initSkillFilters() {
  const tabs = document.querySelectorAll('.skill-filter-btn');
  const cards = document.querySelectorAll('.skill-card');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      if (window.comicSoundFX) window.comicSoundFX.playPop();
      tabs.forEach(t => t.classList.remove('bg-yellow-400', 'text-black'));
      tab.classList.add('bg-yellow-400', 'text-black');
      const filter = tab.getAttribute('data-filter');
      cards.forEach(card => {
        card.style.display = (filter === 'all' || card.getAttribute('data-cat') === filter) ? 'block' : 'none';
      });
    });
  });
}

function initAudioToggle() {
  const btn = document.getElementById('audio-toggle-btn');
  if (!btn) return;
  function updateBtn(enabled) {
    btn.innerHTML = enabled ? '🔊 SFX: ON' : '🔇 SFX: OFF';
    btn.classList.toggle('bg-yellow-300', enabled);
    btn.classList.toggle('bg-slate-200', !enabled);
  }
  updateBtn(window.comicSoundFX ? window.comicSoundFX.enabled : true);
  btn.addEventListener('click', () => {
    if (window.comicSoundFX) updateBtn(window.comicSoundFX.toggle());
  });
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('contact-status');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('c-name')?.value.trim();
    const email = document.getElementById('c-email')?.value.trim();
    const message = document.getElementById('c-message')?.value.trim();
    if (!name || !email || !message) {
      if (status) {
        status.textContent = '⚠️ Please fill out all fields!';
        status.className = 'text-rose-600 font-bold text-xs mt-2';
      }
      return;
    }
    if (window.comicSoundFX) window.comicSoundFX.playFanfare();
    if (status) {
      status.innerHTML = '🎉 <strong>BOOM!</strong> Message transmitted to Anil Choudhary!';
      status.className = 'text-emerald-700 font-bold text-xs mt-2 bg-emerald-100 p-2 rounded border border-black';
    }
    form.reset();
    window.location.href = `mailto:anil.choudhary.gamer@gmail.com?subject=Portfolio Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')')}`;
  });
}

function initKeyboardNav() {
  window.addEventListener('keydown', (e) => {
    if (e.key >= '1' && e.key <= '8' && !e.target.matches('input, textarea')) {
      openStoryPanel(parseInt(e.key, 10));
    }
    if (e.key === 'ArrowLeft' && !document.getElementById('story-modal')?.classList.contains('hidden')) {
      navigateStory(-1);
    }
    if (e.key === 'ArrowRight' && !document.getElementById('story-modal')?.classList.contains('hidden')) {
      navigateStory(1);
    }
    if ((e.key === 'm' || e.key === 'M') && !e.target.matches('input, textarea')) {
      document.getElementById('audio-toggle-btn')?.click();
    }
  });
}

function initProgressBar() {
  const bar = document.getElementById('comic-progress-bar');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(100, Math.max(0, (window.scrollY / total) * 100));
    bar.style.width = `${progress}%`;
  });
}

window.openStoryPanel = openStoryPanel;
window.openProjectDemo = openProjectDemo;
