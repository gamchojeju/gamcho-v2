/* GAMCHO 2.0 — shared header interaction */
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header, #header');
  const nav = document.querySelector('.main-nav, #header .menu, #header .menu-v2-links');
  const toggle = document.querySelector('.mobile-menu-button');
  const lang = document.querySelector('.media-language');
  const langButton = document.querySelector('.language-button');

  const closeNav = () => {
    if (!nav) return;
    nav.classList.remove('is-open');
    toggle?.classList.remove('is-active');
    toggle?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  };

  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  toggle?.addEventListener('click', () => {
    const open = !nav?.classList.contains('is-open');
    nav?.classList.toggle('is-open', open);
    toggle.classList.toggle('is-active', open);
    toggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
    if (lang) lang.classList.remove('is-open');
  });

  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));

  const labels = { ko: 'KOR', en: 'ENG', zh: '中文', ja: '日本語' };
  const savedLang = localStorage.getItem('gamcho-language') || 'ko';
  if (langButton && labels[savedLang]) langButton.textContent = labels[savedLang];
  lang?.querySelectorAll('[data-lang]').forEach(b => b.classList.toggle('active', b.dataset.lang === savedLang));
  lang?.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => {
    const code = b.dataset.lang;
    if (labels[code]) langButton && (langButton.textContent = labels[code]);
    lang?.classList.remove('is-open');
  }));

  langButton?.addEventListener('click', e => {
    e.stopPropagation();
    lang.classList.toggle('is-open');
  });

  document.addEventListener('click', e => {
    if (lang && !lang.contains(e.target)) lang.classList.remove('is-open');
    if (window.innerWidth <= 900 && nav && !nav.contains(e.target) && !toggle?.contains(e.target)) closeNav();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeNav();
  });
});
