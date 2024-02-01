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

const homeEl = document.querySelector('.header-home');
const favoritesEl = document.querySelector('.header-favorites');
const headerEl = document.querySelector(".header");

if (window.location.pathname.endsWith('/favorites.html')) {
  favoritesEl.classList.add('active');
  homeEl.classList.remove('active');
  headerEl.classList.remove('header-hero');


} else {
   homeEl.classList.add('active');
  favoritesEl.classList.remove('active');
  headerEl.classList.add('header-hero');
}

const homeMobEl = document.querySelector('.mob-menu-home');
const favoritesMobEl = document.querySelector('.mob-menu-favorites');

if (window.location.pathname.endsWith('/favorites.html')) {
  favoritesMobEl.classList.add('active');
  homeMobEl.classList.remove('active');
} else {
   homeMobEl.classList.add('active');
  favoritesMobEl.classList.remove('active');
}
