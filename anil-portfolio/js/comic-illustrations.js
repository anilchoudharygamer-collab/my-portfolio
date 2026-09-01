/**
 * Comic Illustrations Generator for Anil Choudhary's Portfolio
 * High-detail SVG comic scenes featuring consistent character design with smooth looping dance animation.
 */
const ComicIllustrations = {
  getAnilCharacter(x, y, scale = 1, pose = 'sitting', sectionFlavor = 'intro') {
    let bodySvg = '';
    let shadowSvg = '';

    if (pose === 'sitting') {
      shadowSvg = `<ellipse class="anil-dance-shadow" cx="0" cy="135" rx="48" ry="11" fill="#000" opacity="0.22" />`;
      bodySvg = `
        <g class="anil-dance-torso">
          <path d="M -35,55 L -45,130 L 45,130 L 35,55 Z" fill="#1E293B" stroke="#000" stroke-width="3.5" />
          <path d="M -15,55 L 0,85 L 15,55 Z" fill="#FFF" stroke="#000" stroke-width="2.5" />
          <path d="M 0,85 L 0,130" stroke="#FFDE00" stroke-width="3" stroke-linecap="round" />
        </g>
        <g class="anil-dance-arm-left">
          <path d="M -35,65 Q -65,95 -40,115 L -20,115" fill="none" stroke="#1E293B" stroke-width="16" stroke-linecap="round" />
          <path d="M -35,65 Q -65,95 -40,115 L -20,115" fill="none" stroke="#000" stroke-width="3.5" />
          <circle cx="-18" cy="115" r="8" fill="#E0A97C" stroke="#000" stroke-width="2.5" />
        </g>
        <g class="anil-dance-arm-right">
          <path d="M 35,65 Q 65,95 40,115 L 20,115" fill="none" stroke="#1E293B" stroke-width="16" stroke-linecap="round" />
          <path d="M 35,65 Q 65,95 40,115 L 20,115" fill="none" stroke="#000" stroke-width="3.5" />
          <circle cx="18" cy="115" r="8" fill="#E0A97C" stroke="#000" stroke-width="2.5" />
        </g>
      `;
    } else if (pose === 'standing') {
      shadowSvg = `<ellipse class="anil-dance-shadow" cx="0" cy="225" rx="42" ry="10" fill="#000" opacity="0.22" />`;
      bodySvg = `
        <g class="anil-dance-torso">
          <path d="M -32,55 L -40,140 L 40,140 L 32,55 Z" fill="#1E293B" stroke="#000" stroke-width="3.5" />
          <path d="M -15,55 L 0,85 L 15,55 Z" fill="#FFF" stroke="#000" stroke-width="2.5" />
          <path d="M 0,85 L 0,140" stroke="#FFDE00" stroke-width="3" stroke-linecap="round" />
          <!-- Legs -->
          <rect x="-36" y="140" width="30" height="80" rx="5" fill="#0F172A" stroke="#000" stroke-width="3.5" />
          <rect x="6" y="140" width="30" height="80" rx="5" fill="#0F172A" stroke="#000" stroke-width="3.5" />
          <!-- Shoes -->
          <path d="M -42,215 L -6,215 Q 0,225 -15,225 L -42,225 Z" fill="#FFF" stroke="#000" stroke-width="3" />
          <path d="M 6,215 L 42,215 Q 48,225 33,225 L 6,225 Z" fill="#FFF" stroke="#000" stroke-width="3" />
        </g>
        <g class="anil-dance-arm-left">
          <path d="M -32,65 Q -60,105 -45,135" fill="none" stroke="#1E293B" stroke-width="16" stroke-linecap="round" />
          <path d="M -32,65 Q -60,105 -45,135" fill="none" stroke="#000" stroke-width="3.5" />
          <circle cx="-45" cy="135" r="8" fill="#E0A97C" stroke="#000" stroke-width="2.5" />
        </g>
        <g class="anil-dance-arm-right">
          <path d="M 32,65 Q 65,100 45,130" fill="none" stroke="#1E293B" stroke-width="16" stroke-linecap="round" />
          <path d="M 32,65 Q 65,100 45,130" fill="none" stroke="#000" stroke-width="3.5" />
          <circle cx="45" cy="130" r="8" fill="#E0A97C" stroke="#000" stroke-width="2.5" />
        </g>
      `;
    } else {
      shadowSvg = `<ellipse class="anil-dance-shadow" cx="0" cy="225" rx="42" ry="10" fill="#000" opacity="0.22" />`;
      bodySvg = `
        <g class="anil-dance-torso">
          <path d="M -32,55 L -40,140 L 40,140 L 32,55 Z" fill="#1E293B" stroke="#000" stroke-width="3.5" />
          <path d="M -15,55 L 0,85 L 15,55 Z" fill="#FFF" stroke="#000" stroke-width="2.5" />
          <path d="M 0,85 L 0,140" stroke="#FFDE00" stroke-width="3" />
          <rect x="-36" y="140" width="30" height="80" rx="5" fill="#0F172A" stroke="#000" stroke-width="3.5" />
          <rect x="6" y="140" width="30" height="80" rx="5" fill="#0F172A" stroke="#000" stroke-width="3.5" />
          <path d="M -42,215 L -6,215 Q 0,225 -15,225 L -42,225 Z" fill="#FFF" stroke="#000" stroke-width="3" />
          <path d="M 6,215 L 42,215 Q 48,225 33,225 L 6,225 Z" fill="#FFF" stroke="#000" stroke-width="3" />
        </g>
        <g class="anil-dance-arm-left">
          <path d="M -32,65 Q -55,100 -10,105" fill="none" stroke="#1E293B" stroke-width="16" stroke-linecap="round" />
          <path d="M -32,65 Q -55,100 -10,105" fill="none" stroke="#000" stroke-width="3.5" />
        </g>
        <g class="anil-dance-arm-right">
          <path d="M 32,65 Q 55,90 20,45" fill="none" stroke="#1E293B" stroke-width="16" stroke-linecap="round" />
          <path d="M 32,65 Q 55,90 20,45" fill="none" stroke="#000" stroke-width="3.5" />
          <circle cx="18" cy="42" r="8" fill="#E0A97C" stroke="#000" stroke-width="2.5" />
        </g>
      `;
    }

    return `
      <g class="anil-character dance-flavor-${sectionFlavor}" transform="translate(${x}, ${y}) scale(${scale})">
        ${shadowSvg}
        <g class="anil-dance-root">
          ${bodySvg}
          <rect x="-12" y="35" width="24" height="24" fill="#E0A97C" stroke="#000" stroke-width="3" />
          <g class="anil-dance-head">
            <ellipse cx="0" cy="10" rx="30" ry="36" fill="#E0A97C" stroke="#000" stroke-width="3.5" />
            <circle cx="-30" cy="10" r="7" fill="#E0A97C" stroke="#000" stroke-width="2.5" />
            <circle cx="30" cy="10" r="7" fill="#E0A97C" stroke="#000" stroke-width="2.5" />
            <path d="M -32,-8 C -36,-38 0,-48 30,-35 C 38,-30 40,-15 32,-4 C 36,-18 20,-30 0,-30 C -22,-30 -30,-15 -32,-8 Z" fill="#18181B" stroke="#000" stroke-width="3.5" />
            <path d="M -28,-12 C -20,-42 25,-44 34,-16 C 30,-12 25,-22 10,-24 C -10,-26 -24,-15 -28,-12 Z" fill="#27272A" />
            <path d="M -22,-6 Q -12,-12 -4,-6" stroke="#000" stroke-width="3" stroke-linecap="round" fill="none" />
            <path d="M 4,-6 Q 12,-12 22,-6" stroke="#000" stroke-width="3" stroke-linecap="round" fill="none" />
            <rect x="-25" y="0" width="20" height="15" rx="4" fill="#FFFFFF" stroke="#000" stroke-width="3" />
            <rect x="5" y="0" width="20" height="15" rx="4" fill="#FFFFFF" stroke="#000" stroke-width="3" />
            <path d="M -5,7 L 5,7" stroke="#000" stroke-width="3" />
            <circle cx="-15" cy="7" r="4" fill="#0F172A" />
            <circle cx="-13" cy="5" r="1.5" fill="#FFF" />
            <circle cx="15" cy="7" r="4" fill="#0F172A" />
            <circle cx="17" cy="5" r="1.5" fill="#FFF" />
            <path d="M 0,10 L -3,20 L 2,20" stroke="#000" stroke-width="2.5" stroke-linecap="round" fill="none" />
            <path d="M -12,28 Q 0,36 12,28" stroke="#000" stroke-width="3" stroke-linecap="round" fill="none" />
            <path d="M -8,29 Q 0,35 8,29" fill="#FF6B6B" />
          </g>
        </g>
      </g>
    `;
  },

  renderPanel1() {
    return `
      <svg viewBox="0 0 600 380" class="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="p1-sky" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FFF4D1" />
            <stop offset="100%" stop-color="#FFE082" />
          </linearGradient>
        </defs>
        <rect width="600" height="380" fill="url(#p1-sky)" />
        <polygon points="220,380 380,380 330,220 270,220" fill="#0284C7" stroke="#000" stroke-width="3" />
        <line x1="300" y1="220" x2="300" y2="380" stroke="#38BDF8" stroke-width="4" stroke-dasharray="10,10" />
        <rect x="160" y="230" width="280" height="75" rx="6" fill="#0F172A" stroke="#000" stroke-width="3.5" />
        <rect x="180" y="240" width="240" height="8" fill="#38BDF8" />
        <rect x="220" y="165" width="160" height="95" rx="4" fill="#1E293B" stroke="#000" stroke-width="3.5" />
        <rect x="230" y="175" width="140" height="75" fill="#0369A1" />
        <text x="240" y="194" font-family="monospace" font-size="10" fill="#7DD3FC" font-weight="bold">&gt; const anil = new AI();</text>
        <text x="240" y="210" font-family="monospace" font-size="10" fill="#4ADE80" font-weight="bold">&gt; anil.innovate();</text>
        <text x="240" y="226" font-family="monospace" font-size="10" fill="#FDE047" font-weight="bold">&gt; [OK] Status: Building</text>
        <g transform="translate(300, 100)" class="animate-float">
          <circle cx="0" cy="0" r="32" fill="#00C2FF" fill-opacity="0.15" stroke="#0284C7" stroke-width="2.5" stroke-dasharray="6,4" />
          <circle cx="-18" cy="-10" r="7" fill="#FF3B30" stroke="#000" stroke-width="2" />
          <circle cx="18" cy="-10" r="7" fill="#FFDE00" stroke="#000" stroke-width="2" />
          <circle cx="0" cy="15" r="8" fill="#34C759" stroke="#000" stroke-width="2" />
          <line x1="-18" y1="-10" x2="18" y2="-10" stroke="#000" stroke-width="2" />
          <line x1="-18" y1="-10" x2="0" y2="15" stroke="#000" stroke-width="2" />
          <line x1="18" y1="-10" x2="0" y2="15" stroke="#000" stroke-width="2" />
          <text x="0" y="-26" text-anchor="middle" font-family="Bangers" font-size="14" fill="#0F172A">AI &amp; ML CORE</text>
        </g>
        ${this.getAnilCharacter(140, 185, 0.95, 'standing', 'intro')}
        <g transform="translate(370, 45)" class="animate-float">
          <rect x="0" y="0" width="210" height="85" rx="14" fill="#FFFFFF" stroke="#000" stroke-width="3.5" />
          <polygon points="20,85 10,105 35,85" fill="#FFFFFF" stroke="#000" stroke-width="3.5" />
          <polygon points="22,83 12,103 33,83" fill="#FFFFFF" />
          <text x="15" y="25" font-family="Bangers" font-size="17" fill="#E11D48">HELLO WORLD!</text>
          <text x="15" y="46" font-family="Outfit" font-size="12" font-weight="bold" fill="#0F172A">I am Anil Choudhary</text>
          <text x="15" y="64" font-family="Outfit" font-size="11" fill="#475569">B.Tech CSE (AI &amp; ML) @ LPU</text>
        </g>
      </svg>
    `;
  },

  renderPanel2() {
    return `
      <svg viewBox="0 0 600 380" class="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="p2-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#E0F2FE" />
            <stop offset="100%" stop-color="#BAE6FD" />
          </linearGradient>
        </defs>
        <rect width="600" height="380" fill="url(#p2-bg)" />
        <rect x="30" y="20" width="40" height="340" fill="#F8FAFC" stroke="#000" stroke-width="3" />
        <g transform="translate(300, 30)">
          <g transform="translate(0, 15)">
            <rect x="0" y="0" width="260" height="65" rx="8" fill="#FFFFFF" stroke="#000" stroke-width="3" />
            <circle cx="35" cy="32" r="20" fill="#FFDE00" stroke="#000" stroke-width="2.5" />
            <text x="35" y="38" text-anchor="middle" font-family="Bangers" font-size="15">99.7%</text>
            <text x="70" y="26" font-family="Montserrat" font-size="12" font-weight="bold" fill="#0F172A">Secondary Education</text>
            <text x="70" y="46" font-family="Outfit" font-size="11" fill="#475569">Sri Krishna VIBGYOR School</text>
          </g>
          <line x1="130" y1="80" x2="130" y2="110" stroke="#000" stroke-width="3.5" stroke-dasharray="5,5" />
          <g transform="translate(0, 110)">
            <rect x="0" y="0" width="260" height="65" rx="8" fill="#FFFFFF" stroke="#000" stroke-width="3" />
            <circle cx="35" cy="32" r="20" fill="#38BDF8" stroke="#000" stroke-width="2.5" />
            <text x="35" y="38" text-anchor="middle" font-family="Bangers" font-size="15">97.1%</text>
            <text x="70" y="26" font-family="Montserrat" font-size="12" font-weight="bold" fill="#0F172A">Higher Secondary (12th)</text>
            <text x="70" y="46" font-family="Outfit" font-size="11" fill="#475569">Narayana Junior College</text>
          </g>
          <line x1="130" y1="175" x2="130" y2="205" stroke="#000" stroke-width="3.5" stroke-dasharray="5,5" />
          <g transform="translate(0, 205)">
            <rect x="0" y="0" width="260" height="75" rx="8" fill="#FEF3C7" stroke="#000" stroke-width="3" />
            <circle cx="35" cy="37" r="22" fill="#F59E0B" stroke="#000" stroke-width="2.5" />
            <text x="35" y="43" text-anchor="middle" font-family="Bangers" font-size="14" fill="#FFF">B.TECH</text>
            <text x="70" y="28" font-family="Montserrat" font-size="13" font-weight="900" fill="#92400E">Lovely Professional Univ.</text>
            <text x="70" y="46" font-family="Outfit" font-size="11" font-weight="bold" fill="#0F172A">CSE (AI &amp; ML) • 2nd Year</text>
            <text x="70" y="62" font-family="Outfit" font-size="11" fill="#047857" font-weight="bold">CGPA: 8.33 / 7.4</text>
          </g>
        </g>
        <rect x="90" y="280" width="180" height="80" rx="6" fill="#78350F" stroke="#000" stroke-width="3" />
        <g transform="translate(210, 235)" class="animate-float">
          <polygon points="0,15 35,0 70,15 35,30" fill="#0F172A" stroke="#000" stroke-width="3" />
          <rect x="15" y="25" width="40" height="18" rx="3" fill="#1E293B" stroke="#000" stroke-width="2" />
          <path d="M 65,17 Q 75,25 75,40" stroke="#F59E0B" stroke-width="3" fill="none" />
          <circle cx="75" cy="42" r="3" fill="#F59E0B" />
        </g>
        ${this.getAnilCharacter(180, 185, 0.95, 'sitting', 'edu')}
      </svg>
    `;
  },

  renderPanel3() {
    return `
      <svg viewBox="0 0 600 380" class="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="p3-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#F3E8FF" />
            <stop offset="100%" stop-color="#E9D5FF" />
          </linearGradient>
        </defs>
        <rect width="600" height="380" fill="url(#p3-bg)" />
        <rect x="230" y="35" width="340" height="310" rx="10" fill="#0F172A" stroke="#000" stroke-width="4" />
        <rect x="240" y="45" width="320" height="290" rx="6" fill="#1E1B4B" />
        <rect x="250" y="55" width="300" height="32" rx="4" fill="#7C3AED" stroke="#000" stroke-width="2" />
        <text x="400" y="77" text-anchor="middle" font-family="Bangers" font-size="17" fill="#FFFFFF" letter-spacing="1">TECH POWER MATRIX</text>
        <g transform="translate(255, 100)"><rect x="0" y="0" width="140" height="46" rx="6" fill="#312E81" stroke="#6366F1" stroke-width="1.5" /><text x="10" y="20" font-family="Montserrat" font-size="11" font-weight="bold" fill="#FFDE00">Python / Java / C++</text><rect x="10" y="28" width="120" height="8" rx="4" fill="#1E1B4B" /><rect x="10" y="28" width="105" height="8" rx="4" fill="#FDE047" /></g>
        <g transform="translate(405, 100)"><rect x="0" y="0" width="140" height="46" rx="6" fill="#312E81" stroke="#6366F1" stroke-width="1.5" /><text x="10" y="20" font-family="Montserrat" font-size="11" font-weight="bold" fill="#38BDF8">Web (React/JS/CSS)</text><rect x="10" y="28" width="120" height="8" rx="4" fill="#1E1B4B" /><rect x="10" y="28" width="110" height="8" rx="4" fill="#38BDF8" /></g>
        <g transform="translate(255, 155)"><rect x="0" y="0" width="140" height="46" rx="6" fill="#312E81" stroke="#6366F1" stroke-width="1.5" /><text x="10" y="20" font-family="Montserrat" font-size="11" font-weight="bold" fill="#4ADE80">MySQL / DBMS / Mongo</text><rect x="10" y="28" width="120" height="8" rx="4" fill="#1E1B4B" /><rect x="10" y="28" width="98" height="8" rx="4" fill="#4ADE80" /></g>
        <g transform="translate(405, 155)"><rect x="0" y="0" width="140" height="46" rx="6" fill="#312E81" stroke="#6366F1" stroke-width="1.5" /><text x="10" y="20" font-family="Montserrat" font-size="11" font-weight="bold" fill="#F43F5E">Cybersecurity (Infosys)</text><rect x="10" y="28" width="120" height="8" rx="4" fill="#1E1B4B" /><rect x="10" y="28" width="102" height="8" rx="4" fill="#F43F5E" /></g>
        <g transform="translate(255, 210)"><rect x="0" y="0" width="290" height="55" rx="6" fill="#312E81" stroke="#6366F1" stroke-width="1.5" /><text x="10" y="20" font-family="Montserrat" font-size="11" font-weight="bold" fill="#E0E7FF">Core Competencies &amp; Problem Solving</text><text x="10" y="40" font-family="Outfit" font-size="11" fill="#A5B4FC">★ 200+ Problems Solved • Adaptability • Team Lead</text></g>
        ${this.getAnilCharacter(110, 160, 1.0, 'standing', 'skills')}
      </svg>
    `;
  },

  renderPanel4() {
    return `
      <svg viewBox="0 0 600 380" class="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="p4-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FEF3C7" />
            <stop offset="100%" stop-color="#FDE68A" />
          </linearGradient>
        </defs>
        <rect width="600" height="380" fill="url(#p4-bg)" />
        <rect x="230" y="35" width="345" height="220" rx="8" fill="#78350F" stroke="#000" stroke-width="4" />
        <rect x="242" y="47" width="321" height="196" rx="4" fill="#064E3B" />
        <text x="400" y="80" text-anchor="middle" font-family="Comic Neue" font-size="16" font-weight="bold" fill="#FEF08A">AARNA FOUNDATION</text>
        <text x="400" y="105" text-anchor="middle" font-family="Outfit" font-size="13" fill="#A7F3D0">Vidyadaan &amp; Academic Mentorship</text>
        <text x="280" y="160" font-family="monospace" font-size="14" fill="#FDE047">E = mc²</text>
        <text x="360" y="160" font-family="monospace" font-size="14" fill="#67E8F9">λ + 42 = ∞</text>
        <text x="465" y="160" font-family="monospace" font-size="14" fill="#F472B6">♥ CARE</text>
        <text x="280" y="200" font-family="Outfit" font-size="12" fill="#F3F4F6">30 Hours Volunteer Drive • July 2026</text>
        <g transform="translate(250, 270)">
          <circle cx="50" cy="20" r="16" fill="#F59E0B" stroke="#000" stroke-width="2.5" /><path d="M 35,36 L 65,36 L 60,65 L 40,65 Z" fill="#3B82F6" stroke="#000" stroke-width="2.5" />
          <circle cx="160" cy="20" r="16" fill="#FCD34D" stroke="#000" stroke-width="2.5" /><path d="M 145,36 L 175,36 L 170,65 L 150,65 Z" fill="#EC4899" stroke="#000" stroke-width="2.5" />
          <circle cx="260" cy="20" r="16" fill="#F59E0B" stroke="#000" stroke-width="2.5" /><path d="M 245,36 L 275,36 L 270,65 L 250,65 Z" fill="#10B981" stroke="#000" stroke-width="2.5" />
          <rect x="10" y="50" width="300" height="45" rx="4" fill="#92400E" stroke="#000" stroke-width="3" />
        </g>
        ${this.getAnilCharacter(110, 160, 1.0, 'standing', 'exp')}
      </svg>
    `;
  },

  renderPanel5() {
    return `
      <svg viewBox="0 0 600 380" class="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="p5-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ECFDF5" />
            <stop offset="100%" stop-color="#D1FAE5" />
          </linearGradient>
        </defs>
        <rect width="600" height="380" fill="url(#p5-bg)" />
        <g transform="translate(20, 40)">
          <rect x="0" y="0" width="265" height="300" rx="8" fill="#FFFFFF" stroke="#000" stroke-width="3.5" />
          <rect x="0" y="0" width="265" height="38" rx="6" fill="#0284C7" stroke="#000" stroke-width="2" />
          <text x="132" y="24" text-anchor="middle" font-family="Bangers" font-size="15" fill="#FFF">🤖 1. HUMAN FOLLOWING ROBOT</text>
          <rect x="10" y="48" width="245" height="155" rx="6" fill="#0F172A" />
          <g transform="translate(60, 140)" class="animate-robot">
            <path d="M 45,-10 Q 75,-10 75,-25" stroke="#22D3EE" stroke-width="2.5" stroke-dasharray="4,3" fill="none" />
            <rect x="-25" y="-15" width="65" height="30" rx="4" fill="#334155" stroke="#000" stroke-width="2" />
            <rect x="-18" y="-38" width="38" height="24" rx="2" fill="#F59E0B" stroke="#000" stroke-width="2" />
            <text x="1" y="-22" text-anchor="middle" font-family="Bangers" font-size="9" fill="#000">PAYLOAD</text>
            <circle cx="38" cy="-5" r="5" fill="#EF4444" stroke="#000" stroke-width="1.5" />
            <rect x="-22" y="12" width="18" height="12" rx="3" fill="#000" />
            <rect x="18" y="12" width="18" height="12" rx="3" fill="#000" />
          </g>
          <text x="15" y="225" font-family="Montserrat" font-size="11" font-weight="bold" fill="#0F172A">Arduino • IR &amp; Ultrasonic • C/C++</text>
          <text x="15" y="245" font-family="Outfit" font-size="10" fill="#475569">Autonomous human-following carrier</text>
          <rect x="15" y="260" width="100" height="25" rx="4" fill="#E0F2FE" stroke="#0284C7" stroke-width="1.5" />
          <text x="65" y="276" text-anchor="middle" font-family="Bangers" font-size="11" fill="#0284C7">CLICK TO EXPAND</text>
        </g>
        <g transform="translate(315, 40)">
          <rect x="0" y="0" width="265" height="300" rx="8" fill="#FFFFFF" stroke="#000" stroke-width="3.5" />
          <rect x="0" y="0" width="265" height="38" rx="6" fill="#059669" stroke="#000" stroke-width="2" />
          <text x="132" y="24" text-anchor="middle" font-family="Bangers" font-size="15" fill="#FFF">🏥 2. HOSPITAL MANAGEMENT</text>
          <rect x="10" y="48" width="245" height="155" rx="6" fill="#0F172A" />
          <path d="M 20,110 L 80,110 L 90,85 L 105,140 L 120,70 L 135,120 L 145,110 L 240,110" fill="none" stroke="#10B981" stroke-width="3" stroke-linecap="round" />
          <rect x="25" y="140" width="65" height="45" rx="4" fill="#1E293B" /><text x="57" y="158" text-anchor="middle" font-family="Montserrat" font-size="9" fill="#94A3B8">PATIENTS</text><text x="57" y="176" text-anchor="middle" font-family="Bangers" font-size="14" fill="#38BDF8">1,248</text>
          <rect x="100" y="140" width="65" height="45" rx="4" fill="#1E293B" /><text x="132" y="158" text-anchor="middle" font-family="Montserrat" font-size="9" fill="#94A3B8">DOCTORS</text><text x="132" y="176" text-anchor="middle" font-family="Bangers" font-size="14" fill="#34D399">84 ACTIVE</text>
          <text x="15" y="225" font-family="Montserrat" font-size="11" font-weight="bold" fill="#0F172A">HTML • CSS • JS • DBMS / Mongo</text>
          <text x="15" y="245" font-family="Outfit" font-size="10" fill="#475569">Responsive clinical healthcare system</text>
          <rect x="15" y="260" width="100" height="25" rx="4" fill="#ECFDF5" stroke="#059669" stroke-width="1.5" />
          <text x="65" y="276" text-anchor="middle" font-family="Bangers" font-size="11" fill="#059669">CLICK TO EXPAND</text>
        </g>
      </svg>
    `;
  },

  renderPanel6() {
    return `
      <svg viewBox="0 0 600 380" class="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="p6-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FEF08A" />
            <stop offset="100%" stop-color="#FDE047" />
          </linearGradient>
        </defs>
        <rect width="600" height="380" fill="url(#p6-bg)" />
        <rect x="210" y="250" width="180" height="100" rx="6" fill="#0F172A" stroke="#000" stroke-width="3.5" />
        <text x="300" y="291" text-anchor="middle" font-family="Bangers" font-size="16" fill="#FFDE00">HALL OF FAME</text>
        <g transform="translate(300, 150)" class="animate-float">
          <path d="M -45,-60 L 45,-60 L 35,0 Q 0,40 -35,0 Z" fill="#F59E0B" stroke="#000" stroke-width="3.5" />
          <path d="M -35,-50 L 35,-50 L 25,-5 Q 0,25 -25,-5 Z" fill="#FDE047" />
          <text x="0" y="-10" text-anchor="middle" font-family="Bangers" font-size="24" fill="#000">#1</text>
          <rect x="-12" y="28" width="24" height="35" fill="#D97706" stroke="#000" stroke-width="3" />
        </g>
        <g transform="translate(40, 75)" class="comic-shadow-sm">
          <rect x="0" y="0" width="145" height="105" rx="6" fill="#FFFFFF" stroke="#000" stroke-width="3" />
          <text x="72" y="25" text-anchor="middle" font-family="Montserrat" font-size="8" font-weight="bold" fill="#007AFF">INFOSYS SPRINGBOARD</text>
          <text x="72" y="45" text-anchor="middle" font-family="Montserrat" font-size="9" font-weight="bold" fill="#0F172A">Cyber Security</text>
          <text x="72" y="96" text-anchor="middle" font-family="Outfit" font-size="8" fill="#64748B">March 2026</text>
        </g>
        <g transform="translate(415, 75)" class="comic-shadow-sm">
          <rect x="0" y="0" width="145" height="105" rx="6" fill="#FFFFFF" stroke="#000" stroke-width="3" />
          <text x="72" y="25" text-anchor="middle" font-family="Montserrat" font-size="8" font-weight="bold" fill="#059669">SAYLOR ACADEMY</text>
          <text x="72" y="45" text-anchor="middle" font-family="Montserrat" font-size="9" font-weight="bold" fill="#0F172A">Python CS105</text>
          <text x="72" y="96" text-anchor="middle" font-family="Outfit" font-size="8" fill="#64748B">Feb 2026</text>
        </g>
        ${this.getAnilCharacter(115, 175, 0.9, 'standing', 'achieve')}
      </svg>
    `;
  },

  renderPanel7() {
    return `
      <svg viewBox="0 0 600 380" class="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="p7-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#EFF6FF" />
            <stop offset="100%" stop-color="#DBEAFE" />
          </linearGradient>
        </defs>
        <rect width="600" height="380" fill="url(#p7-bg)" />
        <g transform="translate(40, 30)" class="animate-float">
          <rect x="0" y="0" width="180" height="75" rx="16" fill="#FFFFFF" stroke="#000" stroke-width="3.5" />
          <text x="48" y="30" font-family="Bangers" font-size="17" fill="#D97706">⚡ ADAPTABLE</text>
          <text x="15" y="55" font-family="Outfit" font-size="11" fill="#475569">Quickly adjusts to new tech &amp;</text>
          <text x="15" y="68" font-family="Outfit" font-size="11" fill="#475569">dynamic environments.</text>
        </g>
        <g transform="translate(380, 30)" class="animate-float">
          <rect x="0" y="0" width="180" height="75" rx="16" fill="#FFFFFF" stroke="#000" stroke-width="3.5" />
          <text x="48" y="30" font-family="Bangers" font-size="17" fill="#0284C7">🤝 TEAM PLAYER</text>
          <text x="15" y="55" font-family="Outfit" font-size="11" fill="#475569">Collaborates effectively &amp;</text>
          <text x="15" y="68" font-family="Outfit" font-size="11" fill="#475569">builds positive synergy.</text>
        </g>
        <g transform="translate(40, 260)" class="animate-float">
          <rect x="0" y="0" width="180" height="75" rx="16" fill="#FFFFFF" stroke="#000" stroke-width="3.5" />
          <text x="48" y="30" font-family="Bangers" font-size="17" fill="#15803D">🚀 QUICK LEARNER</text>
          <text x="15" y="55" font-family="Outfit" font-size="11" fill="#475569">Thrives on learning new tools,</text>
          <text x="15" y="68" font-family="Outfit" font-size="11" fill="#475569">languages, and AI stacks.</text>
        </g>
        <g transform="translate(380, 260)" class="animate-float">
          <rect x="0" y="0" width="180" height="75" rx="16" fill="#FFFFFF" stroke="#000" stroke-width="3.5" />
          <text x="48" y="30" font-family="Bangers" font-size="17" fill="#BE123C">🧠 PROBLEM SOLVER</text>
          <text x="15" y="55" font-family="Outfit" font-size="11" fill="#475569">Analyzes complex challenges</text>
          <text x="15" y="68" font-family="Outfit" font-size="11" fill="#475569">with clean algorithms.</text>
        </g>
        ${this.getAnilCharacter(300, 160, 1.05, 'thinking', 'strength')}
      </svg>
    `;
  },

  renderPanel8() {
    return `
      <svg viewBox="0 0 600 380" class="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="p8-sky" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0F172A" />
            <stop offset="40%" stop-color="#4C1D95" />
            <stop offset="70%" stop-color="#BE185D" />
            <stop offset="100%" stop-color="#F59E0B" />
          </linearGradient>
        </defs>
        <rect width="600" height="380" fill="url(#p8-sky)" />
        <polygon points="180,380 440,80 580,380" fill="#1E1B4B" stroke="#000" stroke-width="3" />
        <polygon points="-40,380 180,240 380,380" fill="#0F172A" stroke="#000" stroke-width="3.5" />
        <g transform="translate(440, 80)" class="animate-float">
          <line x1="0" y1="0" x2="0" y2="-45" stroke="#FFFFFF" stroke-width="3.5" />
          <polygon points="0,-45 45,-32 0,-20" fill="#FF3B30" stroke="#000" stroke-width="2.5" />
          <text x="16" y="-30" text-anchor="middle" font-family="Bangers" font-size="10" fill="#FFF">AI SUMMIT</text>
        </g>
        ${this.getAnilCharacter(150, 150, 0.95, 'standing', 'goal')}
        <g transform="translate(150, 315)">
          <rect x="0" y="0" width="380" height="48" rx="8" fill="#000000" fill-opacity="0.75" stroke="#FFDE00" stroke-width="2" />
          <text x="190" y="20" text-anchor="middle" font-family="Comic Neue" font-size="11" font-weight="bold" fill="#FEF08A">Every line of code, every project, and every challenge</text>
          <text x="190" y="36" text-anchor="middle" font-family="Comic Neue" font-size="11" font-weight="bold" fill="#FEF08A">is one step closer to the future I want to build.</text>
        </g>
      </svg>
    `;
  }
};

window.ComicIllustrations = ComicIllustrations;
