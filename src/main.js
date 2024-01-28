import localStorageAPI from './js/localStorageAPI';

import './js/initialization';

// const quote = localStorageAPI.getQuoteOfTheDay();
// console.log(quote);

// const favorites = localStorageAPI.getFavorites();
// console.log(favorites);

// const testItem = {
//   _id: '64f389465ae26083f39b1af3',
//   bodyPart: 'lower legs',
//   equipment: 'sled machine',
//   gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/1384.gif',
//   name: 'hack one leg calf raise',
//   target: 'calves',
//   description:
//     "Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",
//   rating: 3,
//   burnedCalories: 286,
//   time: 3,
//   popularity: 105,
// };

// localStorageAPI.addItemToFavorites(testItem);
// console.log(localStorageAPI.getFavorites());

// localStorageAPI.deleteItemFromFavorites('64f389465ae26083f39b1af3');


const closeBtnEl = document.querySelector('.close-nav-button-mob');
const navBtnEl = document.querySelector('.header-button-nav');
const mobileMenuEl = document.querySelector('.mobile-menu');

navBtnEl.addEventListener('click', () => mobileMenuEl.classList.add('is-open'));
closeBtnEl.addEventListener('click', () =>
  mobileMenuEl.classList.remove('is-open')
);
mobileMenuEl.addEventListener('click', () =>
  mobileMenuEl.classList.remove('is-open')
);

const homeEl = document.querySelector('.home');
const favoritesEl = document.querySelector('.favorites');

favoritesEl.addEventListener('click', () => {
  favoritesEl.classList.add('active');
  homeEl.classList.remove('active');
});

const homeMobEl = document.querySelector('.home');
const favoritesMobEl = document.querySelector('.favorites');
favoritesMobEl.addEventListener('click', () => {
  favoritesMobEl.classList.add('active');
  homeMobEl.classList.remove('active');
});