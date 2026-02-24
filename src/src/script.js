// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.12 });
reveals.forEach(r => observer.observe(r));

// Mobile menu (simple toggle)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const open = navLinks.style.display === 'flex';
    navLinks.style.cssText = open
      ? ''
      : 'display:flex;flex-direction:column;position:fixed;top:72px;left:0;right:0;background:rgba(10,10,11,0.98);padding:24px;gap:0;border-bottom:1px solid #252729;';
  });
  // Close on link click
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { navLinks.style.cssText = ''; }));
}