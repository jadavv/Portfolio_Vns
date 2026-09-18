/**
 * Modern Portfolio Interactive Engine
 * Ultra-Smooth, Responsive & Accessible Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initDynamicTyping();
  initScrollAnimations();
  initStatCounters();
  initSkillBars();
  initProjectFiltering();
  initLightbox();
  initContactForm();
  initBackToTop();
});

/* ==========================================================================
   1. NAVBAR & MOBILE DRAWER
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('.modern-header');
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.mobile-drawer-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const allNavLinks = document.querySelectorAll('.nav-link-item, .mobile-nav-link');

  // Sticky header background
  function handleScroll() {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile Drawer Toggle
  function openDrawer() {
    toggleBtn?.classList.add('active');
    toggleBtn?.setAttribute('aria-expanded', 'true');
    drawer?.classList.add('open');
    overlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    toggleBtn?.classList.remove('active');
    toggleBtn?.setAttribute('aria-expanded', 'false');
    drawer?.classList.remove('open');
    overlay?.classList.remove('open');
    document.body.style.overflow = '';
  }

  toggleBtn?.addEventListener('click', () => {
    if (drawer?.classList.contains('open')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  overlay?.addEventListener('click', closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer?.classList.contains('open')) {
      closeDrawer();
    }
  });

  // Active Link Observer
  const sections = document.querySelectorAll('section[id]');
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          allNavLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${id}`) {
              link.classList.add('active');
            } else if (href && href.startsWith('#')) {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(sec => sectionObserver.observe(sec));
  }
}

/* ==========================================================================
   2. HERO DYNAMIC TYPING TEXT
   ========================================================================== */
function initDynamicTyping() {
  const typingElement = document.querySelector('.typing-text');
  if (!typingElement) return;

  const roles = [
    'Full-Stack Web Developer',
    'Python & Django Specialist',
    'UI/UX & Frontend Designer',
    'Freelance Solutions Architect'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 45;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      // Pause at full word
      typingSpeed = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ==========================================================================
   3. STATS COUNTER ANIMATION
   ========================================================================== */
function initStatCounters() {
  const counterElements = document.querySelectorAll('.stat-count');
  if (counterElements.length === 0) return;

  let hasAnimated = false;

  const countUp = (el, target) => {
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic formula
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(start + (target - start) * easeProgress);

      el.textContent = currentVal;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        el.textContent = target;
      }
    }

    requestAnimationFrame(updateCounter);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        counterElements.forEach(item => {
          const target = parseInt(item.getAttribute('data-target'), 10) || 0;
          countUp(item, target);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector('.stats-counter-grid') || counterElements[0].closest('section');
  if (statsSection) {
    observer.observe(statsSection);
  }
}

/* ==========================================================================
   4. SKILLS PROGRESS BARS
   ========================================================================== */
function initSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress-bar');
  if (skillBars.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const width = bar.getAttribute('data-width') || '0%';
        bar.style.width = width;
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.2 });

  skillBars.forEach(bar => observer.observe(bar));
}

/* ==========================================================================
   5. PROJECT CATEGORY FILTERING
   ========================================================================== */
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('.filter-tab-btn');
  const projectCards = document.querySelectorAll('.project-card');
  if (filterBtns.length === 0 || projectCards.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue || category?.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px) scale(0.96)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* ==========================================================================
   6. LIGHTBOX PREVIEW MODAL
   ========================================================================== */
function initLightbox() {
  const lightbox = document.querySelector('.modern-lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const lightboxCaption = document.querySelector('.lightbox-caption');
  const closeBtn = document.querySelector('.lightbox-close-btn');
  const triggerBtns = document.querySelectorAll('.lightbox-trigger');

  if (!lightbox) return;

  function openLightbox(src, title) {
    if (lightboxImg) lightboxImg.src = src;
    if (lightboxCaption) lightboxCaption.textContent = title || 'Project Preview';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const src = btn.getAttribute('data-img') || btn.getAttribute('href');
      const title = btn.getAttribute('data-title') || 'Project Showcase';
      if (src) openLightbox(src, title);
    });
  });

  closeBtn?.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) {
      closeLightbox();
    }
  });
}

/* ==========================================================================
   7. CONTACT FORM VALIDATION & ACTIONS
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  const statusMsg = document.querySelector('.form-status-msg');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('formName')?.value.trim();
    const email = document.getElementById('formEmail')?.value.trim();
    const subject = document.getElementById('formSubject')?.value.trim() || 'Portfolio Inquiry';
    const message = document.getElementById('formMessage')?.value.trim();

    if (!name || !email || !message) {
      alert('Please complete all required fields (Name, Email, and Message).');
      return;
    }

    // Compose mailto fallback link
    const mailtoLink = `mailto:vineshjadav0101.cs@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Vinesh,\n\nMy name is ${name} (${email}).\n\n${message}`)}`;

    if (statusMsg) {
      statusMsg.className = 'form-status-msg success';
      statusMsg.innerHTML = `<strong>Thank you, ${name}!</strong> Your message is ready. Opening your email client to send directly...`;
      statusMsg.style.display = 'block';
    }

    setTimeout(() => {
      window.location.href = mailtoLink;
    }, 800);
  });
}

/* ==========================================================================
   8. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top-btn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   9. SCROLL REVEAL UTILITY (CSS Transition on viewport entry)
   ========================================================================== */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (elements.length === 0 || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));
}
