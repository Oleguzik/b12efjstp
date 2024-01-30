import backendAPI from './backendAPI';
import renderAPI from './renderMarkup';
// import {
//   exerciseCardMarkup,
//   paginationMarkup,
//   filtersMarkup,
// } from './renderMarkup';

const filterListElem = document.querySelector('.exercises-type-list');
const exerciseListElem = document.querySelector('.exercises-gallery-list');
const paginationListElem = document.querySelector('.pagination-list');
const searchFormElem = document.querySelector('.exercises-type-form');

const inputElement = document.querySelector('.exercises-form-input');
const clearButton = document.querySelector('.exercises-form-btn-clear');

// Анатолій зробити функції та закинути у старт сценарію
inputElement.addEventListener('input', function () {
  const inputValue = inputElement.value;
  if (inputValue.length > 0) {
    clearButton.style.display = 'block';
  } else {
    clearButton.style.display = 'none';
  }
});

// Анатолій зробити функції та закинути у старт сценарію
clearButton.addEventListener('click', function () {
  inputElement.value = '';
  clearButton.style.display = 'none';
});

export default async function startExercisesScenario() {
  exerciseListElem.addEventListener('click', event => {}); // selectFilteredExersises);
  paginationListElem.addEventListener('click', event => {});
  searchFormElem.addEventListener('submit', event => {}); // searchFormSubmit);

  const queryParams = {
    // filter: document.querySelector('.exercises-type-item-active').dataset
    //   .filter,
    filter: document.querySelector('.exercises-type-item-active').dataset
      .filter,
    limit: document.documentElement.scrollWidth < 768 ? 8 : 12,
    page: 1,
  };

  const filtersData = await backendAPI.getFilterData(queryParams);

  renderItems(filtersData);

  // Анатолій
  // на форму івент лістенери
}

// Анатолій
function searchFormSubmit(event) {
  event.preventDefault();

  // запит на бекенд
  // getOnExercises
  // renderItems(, true);
}

function renderItems(serverData = {}, isCards = false) {
  // {
  //   "page": "1",
  //   "perPage": "8",
  //   "totalPages": 2,
  //   "results": [],
  // }

  const { results = [], totalPages = 1, page = 1 } = serverData;

  const markup = isCards
    ? results.map(elem => renderAPI.exerciseCardMarkup(elem)).join('')
    : results.map(elem => renderAPI.filterGroupsMarkup(elem)).join('');

  exerciseListElem.innerHTML = markup;
  paginationListElem.innerHTML = renderAPI.paginationMarkup(totalPages, page);
}

// клік по группам вправ або карткам окремих вправ
function selectFilteredExersises(event) {
  // аналізуємо event якщо це кнопка Start одна логіка, якщо це группа вправ - інша
  // якщо start то робимо алерт (модалка)

  const cardStartBtn = event.target.closest('.exercise-card-start-btn');
  if (cardStartBtn) {
    alert(cardStartBtn.getAttribute('data-open-id'));
    return;
  }

  // Велізар
  const filterCard = event.target.closest('.exercises-gallery-link');
  // зчитати дата атрибути  і виконати запит на бек

  /// Велізар
  // backendAPI.filter =
  // backendAPI.page =
  // filtersData = await backendAPI.filter();
  // renderItems(, true );
}
