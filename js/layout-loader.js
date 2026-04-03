async function injectPartial(targetId, path) {
  const target = document.getElementById(targetId);
  if (!target) return;
  const res = await fetch(path);
  target.innerHTML = await res.text();
}

function setActiveNav() {
  const page = document.body.getAttribute('data-page');
  document.querySelectorAll(`[data-nav="${page}"]`).forEach((el) => el.classList.add('active'));
}

function bindMobileMenu() {
  const toggle = document.querySelector('[data-mobile-toggle]');
  const mobileNav = document.querySelector('[data-mobile-nav]');
  if (!toggle || !mobileNav) return;
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    mobileNav.classList.toggle('open');
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  await injectPartial('site-header', 'header.html');
  await injectPartial('site-footer', 'footer.html');
  setActiveNav();
  bindMobileMenu();
});
