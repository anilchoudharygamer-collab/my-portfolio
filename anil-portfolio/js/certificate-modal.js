/**
 * Certificate Lightbox Modal with Zoom, Pan, and Meta Viewer
 */
class CertificateModal {
  constructor() {
    this.modal = document.getElementById('cert-modal');
    this.certImg = document.getElementById('cert-modal-img');
    this.certTitle = document.getElementById('cert-modal-title');
    this.certIssuer = document.getElementById('cert-modal-issuer');
    this.certDate = document.getElementById('cert-modal-date');
    this.certDesc = document.getElementById('cert-modal-desc');
    this.certDownload = document.getElementById('cert-modal-download');
    this.zoomLevel = 1;
    this.panX = 0;
    this.panY = 0;
    this.isDragging = false;
    this.startX = 0;
    this.startY = 0;

    this.certificates = {
      'cybersecurity': {
        title: 'Introduction to Cyber Security',
        issuer: 'Infosys Springboard',
        date: 'March 29, 2026',
        desc: 'Comprehensive certification covering foundational cybersecurity concepts, threat identification, secure principles, and network defence architectures.',
        image: 'assets/images/infosys-cyber-cert.png'
      },
      'python': {
        title: 'CS105: Introduction to Python',
        issuer: 'Saylor Academy',
        date: 'February 7, 2026 (ID: 8886528571AC)',
        desc: 'Course credential verifying algorithmic proficiency in Python syntax, object-oriented programming, data structures, and practical problem solving.',
        image: 'assets/images/saylor-python-cert.png'
      },
      'aarna': {
        title: '30-Hour Internship / Volunteer Certificate',
        issuer: 'Aarna Foundation',
        date: 'July 9, 2026 - July 14, 2026',
        desc: 'Awarded for 30 hours of dedicated social welfare service and mentorship across Vidyadaan, Jeevandaan, Annadaan, and Cloth Donation drives.',
        image: 'assets/images/aarna-cert.png'
      },
      'resume': {
        title: 'Curriculum Vitae / Resume',
        issuer: 'Anil Choudhary • B.Tech CSE (AI & ML)',
        date: 'Updated 2026',
        desc: 'Official resume detailing academic milestones, technical skill stack, robotics & web projects, certifications, and leadership experience.',
        image: 'assets/images/resume.png'
      }
    };

    this.bindEvents();
  }

  bindEvents() {
    if (!this.modal) return;
    
    document.getElementById('cert-zoom-in')?.addEventListener('click', () => this.zoom(0.25));
    document.getElementById('cert-zoom-out')?.addEventListener('click', () => this.zoom(-0.25));
    document.getElementById('cert-zoom-reset')?.addEventListener('click', () => this.resetZoom());
    document.getElementById('cert-modal-close')?.addEventListener('click', () => this.close());
    
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.close();
    });

    const container = document.getElementById('cert-img-container');
    if (container) {
      container.addEventListener('mousedown', (e) => {
        if (this.zoomLevel <= 1) return;
        this.isDragging = true;
        this.startX = e.clientX - this.panX;
        this.startY = e.clientY - this.panY;
        container.style.cursor = 'grabbing';
      });

      window.addEventListener('mousemove', (e) => {
        if (!this.isDragging) return;
        this.panX = e.clientX - this.startX;
        this.panY = e.clientY - this.startY;
        this.updateTransform();
      });

      window.addEventListener('mouseup', () => {
        this.isDragging = false;
        if (container) container.style.cursor = this.zoomLevel > 1 ? 'grab' : 'default';
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.modal.classList.contains('hidden')) {
        this.close();
      }
    });
  }

  open(certKey) {
    const data = this.certificates[certKey];
    if (!data) return;

    if (window.comicSoundFX) window.comicSoundFX.playWhoosh();

    this.certTitle.textContent = data.title;
    this.certIssuer.textContent = data.issuer;
    this.certDate.textContent = data.date;
    this.certDesc.textContent = data.desc;
    this.certImg.src = data.image;
    this.certImg.alt = data.title;
    if (this.certDownload) {
      this.certDownload.href = data.image;
      this.certDownload.download = certKey + '-anil-choudhary.png';
    }

    this.resetZoom();
    this.modal.classList.remove('hidden');
    this.modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  zoom(delta) {
    this.zoomLevel = Math.max(0.75, Math.min(3.5, this.zoomLevel + delta));
    if (window.comicSoundFX) window.comicSoundFX.playPop();
    this.updateTransform();
  }

  resetZoom() {
    this.zoomLevel = 1;
    this.panX = 0;
    this.panY = 0;
    this.updateTransform();
  }

  updateTransform() {
    if (!this.certImg) return;
    this.certImg.style.transform = 'translate(' + this.panX + 'px, ' + this.panY + 'px) scale(' + this.zoomLevel + ')';
    const zoomText = document.getElementById('cert-zoom-text');
    if (zoomText) zoomText.textContent = Math.round(this.zoomLevel * 100) + '%';
  }

  close() {
    if (window.comicSoundFX) window.comicSoundFX.playPop();
    this.modal.classList.add('hidden');
    this.modal.classList.remove('flex');
    document.body.style.overflow = '';
  }
}

window.certificateModal = new CertificateModal();
