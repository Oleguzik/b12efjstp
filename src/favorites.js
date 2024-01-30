import messages from './js/notificationAPI';
import localStorageAPI from './js/localStorageAPI';
import { exerciseCardMarkup, paginationMarkup } from './js/renderMarkup';

import './js/initialization';

const emptyListBlock = document.querySelector('.favorites-not-found-exercises');
const favoritesList = document.querySelector('.favorites-exercises-list');
const paginationList = document.querySelector('.pagination-list');
const numberOfFavorites = localStorageAPI.getFavorites().length;
const numberOfFavoritesInMobile = 8;
const numberOfPagesInFavorits = Math.ceil(
  numberOfFavorites / numberOfFavoritesInMobile
);

if (!paginationList.classList.contains('visually-hidden')) {
  paginationList.classList.add('visually-hidden');
}

if (window.screen.width < 768) {
  if (numberOfFavorites > numberOfFavoritesInMobile) {
    paginationList.classList.remove('visually-hidden');
    paginationList.innerHTML = paginationMarkup(numberOfPagesInFavorits);
    paginationList.addEventListener('click', pageChangeHandler);
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

function renderFavoritesList(page = 1) {
  const items = localStorageAPI.getFavorites();
  const favoritesMarkup = items.map(item => exerciseCardMarkup(item, true));

  if (
    window.screen.width < 768 &&
    numberOfFavorites > numberOfFavoritesInMobile
  ) {
    favoritesList.innerHTML = favoritesMarkup
      .slice(
        (page - 1) * numberOfFavoritesInMobile,
        page * numberOfFavoritesInMobile
      )
      .join('');
  } else {
    favoritesList.innerHTML = favoritesMarkup.join('');
  }

  if (items.length > 0) {
    if (!emptyListBlock.classList.contains('visually-hidden')) {
      emptyListBlock.classList.add('visually-hidden');
    }
  } else {
    emptyListBlock.classList.remove('visually-hidden');
  }
}

function pageChangeHandler(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains('js-favorites-page')) {
    renderFavoritesList(Number(evt.target.innerText));
    paginationList.innerHTML = paginationMarkup(
      numberOfPagesInFavorits,
      Number(evt.target.innerText)
    );
  }
}