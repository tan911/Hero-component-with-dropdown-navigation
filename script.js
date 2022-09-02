const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

btnNavEl.addEventListener('click', () => {
  headerEl.classList.toggle('nav-open');
  overlay.classList.toggle('hidden');
});
