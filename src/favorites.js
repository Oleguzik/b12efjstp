import messages from './js/notificationAPI';
import localStorageAPI from './js/localStorageAPI';
import { exerciseCardMarkup } from './js/renderMarkup';

import './js/initialization';

const emptyListBlock = document.querySelector('.favorites-not-found-exercises');

function renderFavoritesList() {
  const favoritesList = document.querySelector('.favorites-exercises-list');
  const items = localStorageAPI.getFavorites();
  const favoritesMarkup = items
    .map(item => {
      return exerciseCardMarkup(
        {
          name: item.name,
          burnedCalories: item.burnedCalories,
          time: item.time,
          bodyPart: item.bodyPart,
          target: item.target,
          rating: item.rating,
          id: item._id,
        },
        true
      );
    })
    .join('');

  favoritesList.innerHTML = favoritesMarkup;

  if (items.length > 0) {
    if (!emptyListBlock.classList.contains('visually-hidden')) {
      emptyListBlock.classList.all('visually-hidden');
    }
  } else {
    emptyListBlock.classList.remove('visually-hidden');
  }
}

renderFavoritesList();

document
  .querySelector('.favorites-exercises-list')
  .addEventListener('click', event => {
    if (event.target.closest('.exercise-card-start-btn')) {
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
