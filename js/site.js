// safe consolidated site scripts - put this before </body> or include as external file
document.addEventListener('DOMContentLoaded', () => {
  // Toggle version helper
  window.toggleVersion = function toggleVersion() {
    const el = document.getElementById('versionText');
    if (!el) return;
    el.innerText = el.innerText === 'Alpha' ? 'Beta' : 'Alpha';
  };

  // Reveal on scroll
  const reveals = Array.from(document.querySelectorAll('.reveal'));
  function handleReveal() {
    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 60) el.classList.add('active');
    });
  }
  handleReveal();
  window.addEventListener('scroll', handleReveal, { passive: true });

  // Cursor glow
  const glow = document.querySelector('.cursor-glow');
  if (glow) {
    window.addEventListener('mousemove', e => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    });
  }

  // Nav scroll effect
  const nav = document.querySelector('.nav');
  function handleNavScroll() {
    if (!nav) return;
    if (window.scrollY > 20) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  handleNavScroll();
  window.addEventListener('scroll', handleNavScroll, { passive: true });

  // Active nav highlight
  const links = Array.from(document.querySelectorAll('.nav-item'));
  links.forEach(link => {
    try {
      if (link.href === window.location.href) link.classList.add('active');
    } catch (e) { /* ignore cross-origin or other issues */ }
  });

  // Page load fade (if you use body.loaded)
  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    // ensure reveals run once after load
    handleReveal();
  });
});
