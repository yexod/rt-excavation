/* ============================================
   RT EXCAVATION LLC — main.js
   ============================================ */

// ---- Dynamic copyright year ----
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---- Mobile nav toggle ----
const toggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (toggle && navMenu) {
  toggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a link is clicked
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// ---- Scroll-triggered fade animations ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ---- Stagger service cards ----
document.querySelectorAll('.service-card, .review-card, .blog-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 80}ms`;
});

// ---- Netlify form success handling ----
// Netlify redirects to /?success=true after form submit by default.
// Optionally set a custom success page in Netlify dashboard.
const params = new URLSearchParams(window.location.search);
if (params.get('success') === 'true') {
  const form = document.querySelector('.contact-form');
  if (form) {
    form.innerHTML = `
      <div style="text-align:center;padding:48px 24px;">
        <div style="font-size:48px;margin-bottom:16px;">✓</div>
        <h3 style="font-family:'DM Serif Display',serif;font-size:24px;color:#fff;margin-bottom:12px;">Message Received!</h3>
        <p style="color:rgba(255,255,255,0.55);font-size:15px;line-height:1.7;">Thanks for reaching out. We'll be in touch within a few hours during business hours.</p>
      </div>
    `;
  }
}
