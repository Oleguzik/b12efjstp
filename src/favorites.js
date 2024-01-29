import messages from './js/notificationAPI';
import localStorageAPI from './js/localStorageAPI';
import { exerciseCardMarkup, paginationMarkup } from './js/renderMarkup';

import './js/initialization';

const emptyListBlock = document.querySelector('.favorites-not-found-exercises');
const favoritesList = document.querySelector('.favorites-exercises-list');
const paginationList = document.querySelector('.pagination-list');
const numberOfFavorites = localStorageAPI.getFavorites().length;
const numberOfFavoritesInMobile = 8;

if (!paginationList.classList.contains('visually-hidden')) {
  paginationList.classList.add('visually-hidden');
}

if (window.screen.width < 768) {
  if (numberOfFavorites > numberOfFavoritesInMobile) {
    paginationList.classList.remove('visually-hidden');
    paginationList.innerHTML = paginationMarkup(
      Math.ceil(numberOfFavorites / numberOfFavoritesInMobile)
    );
  }
}

renderFavoritesList();

document
  .querySelector('.favorites-exercises-list')
  .addEventListener('click', event => {
    if (event.target.closest('.exercise-card-start-btn')) {
      // open modal-exercise
      console.log(
        event.target
          .closest('.exercise-card-start-btn')
          .getAttribute('data-open-id')
      );
    }

    if (event.target.closest('.exercise-card-remove-btn')) {
      localStorageAPI.deleteItemFromFavorites(
        event.target
          .closest('.exercise-card-remove-btn')
          .getAttribute('data-delete-id')
      );
      renderFavoritesList();
    }
  });

function renderFavoritesList() {
  const items = localStorageAPI.getFavorites();
  const favoritesMarkup = items
    .map(item => exerciseCardMarkup(item, true))
    .join('');

  favoritesList.innerHTML = favoritesMarkup;

  if (items.length > 0) {
    if (!emptyListBlock.classList.contains('visually-hidden')) {
      emptyListBlock.classList.add('visually-hidden');
    }
  } else {
    emptyListBlock.classList.remove('visually-hidden');
  }
}
