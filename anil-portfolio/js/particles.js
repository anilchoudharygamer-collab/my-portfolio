/**
 * Canvas Particle System: Comic Halftone Dots, Stars, and Tech Runes
 */
class ComicParticleSystem {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.mouseX = 0;
    this.mouseY = 0;
    this.targetMouseX = 0;
    this.targetMouseY = 0;
    
    this.resize();
    this.initParticles();
    this.bindEvents();
    this.animate();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  initParticles() {
    const count = Math.min(60, Math.floor((this.width * this.height) / 25000));
    this.particles = [];
    const symbols = ['</>', '{ }', 'AI', '⚡', '★', '01', 'λ', 'py', 'js', '✦'];
    const colors = ['#FFDE00', '#FF3B30', '#00C2FF', '#34C759', '#1A1A1A', '#FFAA00'];

    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35 - 0.15,
        size: Math.random() * 8 + 4,
        type: Math.random() > 0.45 ? 'symbol' : 'dot',
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.28 + 0.12,
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.02
      });
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.resize();
      this.initParticles();
    });

    window.addEventListener('mousemove', (e) => {
      this.targetMouseX = (e.clientX / this.width - 0.5) * 20;
      this.targetMouseY = (e.clientY / this.height - 0.5) * 20;
    });
  }

  animate() {
    this.mouseX += (this.targetMouseX - this.mouseX) * 0.05;
    this.mouseY += (this.targetMouseY - this.mouseY) * 0.05;

    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let p of this.particles) {
      p.x += p.vx + this.mouseX * 0.01;
      p.y += p.vy + this.mouseY * 0.01;
      p.rotation += p.vRot;

      if (p.x < -20) p.x = this.width + 20;
      if (p.x > this.width + 20) p.x = -20;
      if (p.y < -20) p.y = this.height + 20;
      if (p.y > this.height + 20) p.y = -20;

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate(p.rotation);
      this.ctx.globalAlpha = p.opacity;

      if (p.type === 'symbol') {
        this.ctx.font = 'bold 12px monospace';
        this.ctx.fillStyle = p.color;
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(p.symbol, 0, 0);
      } else {
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        this.ctx.fillStyle = p.color;
        this.ctx.fill();
        this.ctx.lineWidth = 1.2;
        this.ctx.strokeStyle = '#000000';
        this.ctx.stroke();
      }

      this.ctx.restore();
    }

    requestAnimationFrame(() => this.animate());
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new ComicParticleSystem('bg-particles');
});
