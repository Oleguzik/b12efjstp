import localStorageAPI from './js/localStorageAPI';

import './js/initialization';

const emptyListBlock = document.querySelector('.favorites-not-found-exercises');

function renderFavoritesList() {
  const favoritesList = document.querySelector('.favorites-exercises-list');
  const items = localStorageAPI.getFavorites();
  const favoritesMarkup = items
    .map(item => {
      return `<li data-id=${item._id} class="exercise-card-item">
  <div class="exercise-card-actions">
    <div class="exercise-card-workout-container">
      <p class="exercise-card-workout-text">Workout</p>
      <button type="button" class="exercise-card-remove-btn">
        <svg class="exercise-card-remove-icon">
          <use href="./img/sprite.svg#icon-trash-black"></use>
        </svg>
      </button>
    </div>
    <button type="button" class="exercise-card-start-btn">
      <span class="exercise-card-start-btn-text">Start</span>
      <svg class="exercise-card-start-btn-icon">
        <use href="./img/sprite.svg#icon-arrow-right"></use>
      </svg>
    </button>
  </div>
  <h3 class="exercise-card-header-container">
    <svg class="exercise-card-header-icon">
      <use href="./img/sprite.svg#icon-icon-run"></use>
    </svg>
    <span class="exercise-card-header-text"
      >${item.name} </span
    >
  </h3>
  <ul class="exercises-card-info-list">
    <li class="exercise-card-info-parameter">
      <p class="exercise-card-parameter-name">Burned calories:</p>
      <p class="exercise-card-parameter-value">${item.burnedCalories} / 3 min</p>
    </li>
    <li class="exercise-card-info-parameter">
      <p class="exercise-card-parameter-name">Body part:</p>
      <p class="exercise-card-parameter-value">${item.bodyPart} </p>
    </li>
    <li class="exercise-card-info-parameter">
      <p class="exercise-card-parameter-name">Target:</p>
      <p class="exercise-card-parameter-value">${item.target} </p>
    </li>
  </ul>
</li>`;
    })
    .join('');

  favoritesList.innerHTML = favoritesMarkup;

  if (items.length > 0) {
    if (emptyListBlock.classList.contains('is-active')) {
      emptyListBlock.classList.remove('is-active');
    }
  } else {
    emptyListBlock.classList.add('is-active');
  }
}

renderFavoritesList();

document.querySelectorAll('.exercise-card-item').forEach(li => {
  li.addEventListener('click', event => {
    let id = event.target
      .closest('.exercise-card-item')
      .getAttribute('data-id');
    if (event.target.closest('.exercise-card-start-btn')) {
      console.log(id);
    }
    if (event.target.closest('.exercise-card-remove-btn')) {
      localStorageAPI.deleteItemFromFavorites(id);
      //   renderFavoritesList();
      li.remove();
    }
  });
});
