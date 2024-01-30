import backendAPI from './backendAPI';
import {
  exerciseCardMarkup,
  paginationMarkup,
  filtersMarkup,
} from './renderMarkup';

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
  //   filterListElem.addEventListener('click', event => {});

  // Велізар
  // backendAPI.filter =
  // backendAPI.page =
  // filtersData = await backendAPI.filter();

  renderItems();

  exerciseListElem.addEventListener('click', selectFilteredExersises);
  paginationListElem.addEventListener('click', event => {});
  searchFormElem.addEventListener('submit', searchFormSubmit);

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

function renderItems(itemsArr = [], isCards = false) {
  let markup = '';
  if (isCards) {
    // Анатолій
    // рендеримо картки з exersises
    // markup =
  } else {
    // Велізар
    // рендеримо filters
    // markup =
  }

  filterListElem.innerHTML = markup;

  renderPagination();
}

// Велізар
function renderPagination(total = 0, limit = 1) {
  // отримуємо кількість сторінок
  // рендеримо
  // const markup =  ();
  // paginationListElem.innerHTML = markup;
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
