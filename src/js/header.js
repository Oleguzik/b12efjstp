const closeBtnEl = document.querySelector('.mob-menu-close-nav-button');
const navBtnEl = document.querySelector('.header-button-nav');
const mobileMenuEl = document.querySelector('.mobile-menu');

navBtnEl.addEventListener('click', () => mobileMenuEl.classList.add('is-open'));
closeBtnEl.addEventListener('click', () =>
  mobileMenuEl.classList.remove('is-open')
);
mobileMenuEl.addEventListener('click', () =>
  mobileMenuEl.classList.remove('is-open')
);

const homeMobEl = document.querySelector('.mob-menu-home');
const favoritesMobEl = document.querySelector('.mob-menu-favorites');

if (window.location.pathname === '/favorites.html') {
  favoritesMobEl.classList.add('active');
  homeMobEl.classList.remove('active');
} else {
  homeMobEl.classList.add('active');
}


const homeEl = document.querySelector('.header-home');
const favoritesEl = document.querySelector('.header-favorites');
if (window.location.pathname === '/favorites.html') {
  favoritesEl.classList.add('active');
  homeEl.classList.remove('active');
} else {
  homeEl.classList.add('active');
}
