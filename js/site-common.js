/* GAMCHO 2.0 — shared header interaction only */
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header, #header');
  const nav = document.querySelector('.main-nav, #header .menu, #header .menu-v2-links');
  const toggle = document.querySelector('.mobile-menu-button');
  const lang = document.querySelector('.media-language');
  const langButton = document.querySelector('.language-button');

  const closeNav = () => {
    nav?.classList.remove('is-open');
    toggle?.classList.remove('is-active');
    toggle?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  };

  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  toggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = !nav?.classList.contains('is-open');
    nav?.classList.toggle('is-open', open);
    toggle.classList.toggle('is-active', open);
    toggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
    lang?.classList.remove('is-open');
  });

  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));

  /* Language dropdown UI is controlled by the page language controller. */
  langButton?.addEventListener('click', (e) => {
    e.stopPropagation();
    lang?.classList.toggle('is-open');
  });

  document.addEventListener('click', (e) => {
    if (lang && !lang.contains(e.target)) lang.classList.remove('is-open');
    if (window.innerWidth <= 900 && nav && !nav.contains(e.target) && !toggle?.contains(e.target)) closeNav();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeNav();
      lang?.classList.remove('is-open');
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeNav();
  });
});
