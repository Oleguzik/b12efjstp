import backendAPI from './backendAPI';
import renderAPI from './renderMarkup';
import { openModalExercise } from './modal-exercise';

let isMobileDevice;
let isDesktopDevice;

const filterListElem = document.querySelector('.exercises-type-list');
const exerciseListElem = document.querySelector('.exercises-gallery-list');
const paginationListElem = document.querySelector('.pagination-list');
const searchFormElem = document.querySelector('.exercises-type-form');
const inputElement = document.querySelector('.exercises-form-input');
const clearButton = document.querySelector('.exercises-form-btn-clear');
const exerciseslistItemsEmptyMessage = document.querySelector(
  '.exercises-empty-message'
);
const exercisesFilter = document.querySelector('.exercises-section-title-span');

export default function startExercisesScenario() {
  isMobileDevice = document.documentElement.scrollWidth < 768;
  isDesktopDevice = document.documentElement.scrollWidth >= 1440;

  filterListElem.addEventListener('click', filterListHandler);
  exerciseListElem.addEventListener('click', exerciseListHandler);
  paginationListElem.addEventListener('click', paginationListHandler);

  searchFormElem.addEventListener('submit', searchFormSubmitHandler);
  inputElement.addEventListener('input', inputElementHandler);
  clearButton.addEventListener('click', clearButtonHandler);

  window.addEventListener('resize', windowResizeHandler);

  renderGroups();
}

function windowResizeHandler() {
  let isDeviceChange = false;
  if (isMobileDevice !== document.documentElement.scrollWidth < 768) {
    isDeviceChange = true;
    isMobileDevice = !isMobileDevice;
  }

  if (isDesktopDevice !== document.documentElement.scrollWidth >= 1440) {
    isDeviceChange = true;
    isDesktopDevice = !isDesktopDevice;
  }

  if (isDeviceChange) {
    exerciseListElem.dataset.isGroups ? renderGroups() : renderExercises();
  }
}

function searchFormSubmitHandler(event) {
  event.preventDefault();
  renderExercises();
}

function inputElementHandler() {
  const inputValue = inputElement.value.trim();
  clearButton.style.display = inputValue.length > 0 ? 'block' : 'none';
}

function clearButtonHandler() {
  searchFormElem.reset();
  clearButton.style.display = 'none';
  renderExercises();
}

async function renderGroups(page = 1) {
  exerciseListElem.dataset.isGroups = 'true';
  exerciseListElem.dataset.groupName = '';

  const queryParams = {
    filter: getActiveFilterElem().dataset.filter,
    limit: isMobileDevice ? 8 : 12,
    page,
  };

  const filtersData = await backendAPI.getFilterData(queryParams);

  renderItems(filtersData);
}

async function renderExercises(page = 1) {
  const queryParams = {
    [getActiveFilterElem().dataset.exerciseFilter]:
      exerciseListElem.dataset.groupName,
    limit: isDesktopDevice ? 9 : 8,
    page,
  };

  const keyword = inputElement.value.trim();
  if (keyword) {
    queryParams.keyword = keyword;
  }

  exercisesFilter.firstElementChild.textContent = capitalizeString(
    exerciseListElem.dataset.groupName
  );

  const exercisesData = await backendAPI.getExercisesData(queryParams);
  renderItems(exercisesData, true);
}

function renderItems(serverData = {}, isCards = false) {
  // {
  //   "page": "1",
  //   "perPage": "8",
  //   "totalPages": 2,
  //   "results": [],
  // }

  const { results = [], totalPages = 1, page = 1 } = serverData;
  if (results.length === 0) {
    exerciseslistItemsEmptyMessage.classList.remove('visually-hidden');
    exerciseListElem.classList.add('visually-hidden');
    // paginationListElem.classList.add('visually-hidden');
    exerciseListElem.innerHTML = results
      .map(elem => renderAPI.filterGroupsMarkup(elem))
      .join('');
    paginationListElem.innerHTML = renderAPI.paginationMarkup();
  } else {
    exerciseslistItemsEmptyMessage.classList.add('visually-hidden');
    exerciseListElem.classList.remove('visually-hidden');
    // paginationListElem.classList.remove('visually-hidden');
    const markup = isCards
      ? results.map(elem => renderAPI.exerciseCardMarkup(elem)).join('')
      : results.map(elem => renderAPI.filterGroupsMarkup(elem)).join('');

    if (isCards) {
      exercisesFilter.classList.remove('visually-hidden');
    } else {
      exercisesFilter.classList.add('visually-hidden');
    }

    exerciseListElem.innerHTML = markup;
    paginationListElem.innerHTML = renderAPI.paginationMarkup(totalPages, page);
  }
}

function exerciseListHandler(event) {
  if (
    event.target.nodeName === 'A' ||
    event.target.nodeName === 'P' ||
    event.target.nodeName === 'H3'
  ) {
    event.preventDefault();

    const currentLink =
      event.target.nodeName === 'A' ? event.target : event.target.closest('a');

    exerciseListElem.dataset.isGroups = '';
    exerciseListElem.dataset.groupName = currentLink.dataset.name;
    renderExercises();

    searchFormElem.classList.remove('visually-hidden');
  } else if (exerciseListElem.dataset.groupName) {
    const cardStartBtn = event.target.closest('.exercise-card-start-btn');
    if (cardStartBtn) {
      openModalExercise(cardStartBtn.getAttribute('data-open-id'));
    }
  }
}

function filterListHandler(event) {
  if (event.target.nodeName === 'BUTTON') {
    getActiveFilterElem().classList.toggle('exercises-type-item-active');
    event.target.classList.toggle('exercises-type-item-active');
    renderGroups();

    searchFormElem.reset();
    searchFormElem.classList.add('visually-hidden');
  }
}

function paginationListHandler(event) {
  if (event.target.nodeName === 'A') {
    event.preventDefault();

    const page = Number(event.target.innerText);

    exerciseListElem.dataset.isGroups
      ? renderGroups(page)
      : renderExercises(page);
  }
}

function getActiveFilterElem() {
  return document.querySelector('.exercises-type-item-active');
}

function capitalizeString(string = '') {
  return string[0].toUpperCase() + string.substring(1);
}
