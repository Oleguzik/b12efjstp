import backendAPI from './backendAPI';
import messages from './notificationAPI';
import localStorageAPI from './localStorageAPI';

// GET ELEMENT
export async function openModalExercise(id = '') {
  const elementModalExercise = await backendAPI.getExerciseInfo(id);
  try {
    if (elementModalExercise != {}) {
      renderModalExercise(elementModalExercise);
      btnSetFavoriteExercise(elementModalExercise);
      btnGiveRating(id);
      closeModalExercise();
    } else {
      messages.showError();
    }
  } catch (error) {
    messages.showError(error);
  }
}

// RENDER MODAL
function renderModalExercise(elementModalExercise) {
  const titleName = document.querySelector('.modal-exercise-title');
  const valueRating = document.querySelector('.mod-exercise-rating-value');
  const modalExerciseList = document.querySelector('.modal-exercise-list');
  const instructionText = document.querySelector(
    '.modal-exercise-instruction-text'
  );
  getImage(elementModalExercise.gifUrl);
  titleName.textContent = capitalizeString(elementModalExercise.name);
  valueRating.textContent = elementModalExercise.rating
    .toString()
    .padEnd(3, '.0');
  instructionText.textContent = elementModalExercise.description;

  //   function mapObject(object, array) {
  //     let obj = {};
  //     array.forEach(key => {
  //       if (object[key]) {
  //         obj[key] = object[key];
  //       }
  //     });
  //     return obj;
  //   }
  //   const features = [
  //     'target',
  //     'bodyPart',
  //     'equipment',
  //     'popularity',
  //     'burnedCalories',
  //     'time',
  //   ];

  let modalExerciseItem = ``;
  if (Object.keys(elementModalExercise).includes('target')) {
    modalExerciseItem = `<li class="modal-exercise-item">
          <p class="modal-exercise-subcategory">Target</p>
          <p class="modal-exercise-selected">${capitalizeString(
            elementModalExercise.target
          )}</p>
        </li>`;
    modalExerciseList.insertAdjacentHTML('beforeend', modalExerciseItem);
  }
  if (Object.keys(elementModalExercise).includes('bodyPart')) {
    modalExerciseItem = ` <li class="modal-exercise-item">
    <p class="modal-exercise-subcategory">Body Part</p>
    <p class="modal-exercise-selected">${capitalizeString(
      elementModalExercise.bodyPart
    )}</p>
  </li>`;
    modalExerciseList.insertAdjacentHTML('beforeend', modalExerciseItem);
  }
  if (Object.keys(elementModalExercise).includes('equipment')) {
    modalExerciseItem = ` <li class="modal-exercise-item">
          <p class="modal-exercise-subcategory">Equipment</p>
          <p class="modal-exercise-selected">${capitalizeString(
            elementModalExercise.equipment
          )}</p>
        </li>`;
    modalExerciseList.insertAdjacentHTML('beforeend', modalExerciseItem);
  }
  if (Object.keys(elementModalExercise).includes('popularity')) {
    modalExerciseItem = `<li class="modal-exercise-item">
          <p class="modal-exercise-subcategory">Popular</p>
          <p class="modal-exercise-selected">${elementModalExercise.popularity}</p>
        </li>`;
    modalExerciseList.insertAdjacentHTML('beforeend', modalExerciseItem);
  }
  if (Object.keys(elementModalExercise).includes('burnedCalories' && 'time')) {
    const modalExerciseItem = `<li class="modal-exercise-item">
            <p class="modal-exercise-subcategory">Burned Calories</p>
            <p class="modal-exercise-selected">${elementModalExercise.burnedCalories}/${elementModalExercise.time} min</p>
          </li>`;
    modalExerciseList.insertAdjacentHTML('beforeend', modalExerciseItem);
  }
}

// ADD / REMOVE BTN
function btnSetFavoriteExercise(elementModalExercise) {
  const btn = document.querySelector('.modal-exercise-btn');
  const span = document.querySelector('.mod-exercise-span');
  const favExercises = localStorageAPI.getFavorites();
  const favoriteExercise = favExercises.some(el => el === elementModalExercise);
  favoriteExercise === false
    ? (span.textContent = span.dataset.add)
    : (span.textContent = span.dataset.remove);

  btn.addEventListener('click', () => {
    if (span.textContent === span.dataset.add) {
      return addToFavorite();
    } else {
      return removeFromFavorite();
    }
  });
  function addToFavorite() {
    span.textContent = span.dataset.remove;
    localStorageAPI.addItemToFavorites(elementModalExercise);
  }
  function removeFromFavorite() {
    span.textContent = span.dataset.add;
    localStorageAPI.deleteItemFromFavorites(elementModalExercise._id);
  }
}

// GET IMAGE
function getImage(gifUrl) {
  const imageContainer = document.getElementById('img');

  imageContainer.style.backgroundImage = `linear-gradient(
      0deg,
      rgba(27, 27, 27, 0.2) 0%,
      rgba(27, 27, 27, 0.2) 100%
    ),
    url(${gifUrl})`;
}

// GET RATING
const ratingsRef = document.querySelectorAll('.mod-exercise-rating');
if (ratingsRef.length > 0) {
  initRatings();
}

export function initRatings() {
  let ratingActive, ratingValue;
  for (let index = 0; index < ratingsRef.length; index++) {
    const rating = ratingsRef[index];
    getRating(rating);
  }

  function getRating(rating) {
    initRatingVars(rating);
    setRatingActiveWidth();
  }

  function initRatingVars(rating) {
    ratingActive = rating.querySelector('.mod-exercise-rating-active');
    ratingValue = rating.querySelector('.mod-exercise-rating-value');
  }
  function setRatingActiveWidth() {
    const ratingActiveWidth = ratingValue.textContent / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }
}

// GET MODAL FEEDBACK
function btnGiveRating(id) {
  const btnGetRating = document.getElementById('get-rating');
  const modalExersise = document.querySelector('.modal-exercise');
  btnGetRating.addEventListener('click', getModalRating);
  function getModalRating() {
    modalExersise.classList.add('is-hidden');
    console.log(id);
    // openGiveRatingWindow(id);
    btnGetRating.removeEventListener('click', getModalRating);
  }
}

// BTN CLOSE
function closeModalExercise() {
  const btnClose = document.querySelector('.modal-exercise-btn-close');
  const modalExersise = document.querySelector('.modal-exercise');
  btnClose.addEventListener('click', closeModal);
  function closeModal() {
    modalExersise.classList.add('is-hidden');
    btnClose.removeEventListener('click', closeModal);
  }
}

//CAPITALIZE STRING

function capitalizeString(string = '') {
  return string[0].toUpperCase() + string.substring(1);
}

//////////////////////////////////////////////////
/// Таня

const modalExercise = document.querySelector('.modal-exercise');
const feedbackForm = document.querySelector('.feedback-container');
const modalButtonGiveRating = document.querySelector(
  '.modal-exercise-btn-rating'
);
const feedbackCloseButton = document.querySelector('.feedback-close-button');
const sendButton = document.querySelector('.feedback-form-button');

// лістенери на відкриття і закриття
modalButtonGiveRating.addEventListener('click', openGiveRatingWindow);
feedbackCloseButton.addEventListener('click', closeGiveRatingWindow);

function openGiveRatingWindow(id) {
  // закриття модалки Валерії відкриття модалки рейтингу
  modalExercise.classList.remove('is-open-modal');
  feedbackForm.classList.add('is-open-modal');

  // лістенер на функцію відправки на бекенд
  sendButton.addEventListener('click', submitRatingForm);

  //рейтинг зірочок
  function ratingStar() {
    const ratingStars = document.querySelectorAll('.feedback-rating-stars-svg');
    const ratingValue = document.querySelector('.feedback-form-rating-value');
    let currentRating = 0;

    ratingStars.forEach(star => {
      star.addEventListener('mouseenter', () => {
        const hoverStarIndex = Array.from(ratingStars).indexOf(star);
        highlightStars(hoverStarIndex);

        showStarValue(hoverStarIndex + 1);
      });

      star.addEventListener('mouseleave', () => {
        if (currentRating === 0) {
          resetRating();
        } else {
          highlightStars(currentRating - 1);
          showStarValue(currentRating);
        }
      });
      star.addEventListener('click', () => {
        const clickStarIndex = Array.from(ratingStars).indexOf(star) + 1;
        currentRating = clickStarIndex;
        ratingValue.textContent = `${currentRating}.0`;

        highlightStars(clickStarIndex - 1);
      });
    });

    function highlightStars(index) {
      ratingStars.forEach((star, i) => {
        if (i <= index) {
          star.classList.add('feedback-rating-stars-svg-highlight');
        } else {
          star.classList.remove('feedback-rating-stars-svg-highlight');
        }
      });
    }

    function resetRating() {
      ratingStars.forEach(star => {
        star.classList.remove('feedback-rating-stars-svg-highlight');
      });
      ratingValue.textContent = '0.0';
    }

    function showStarValue(value) {
      ratingValue.textContent = `${value}.0`;
    }
  }
  ratingStar();
}

function closeGiveRatingWindow(id) {
  // видалення лістенерів
  modalButtonGiveRating.removeEventListener('click', openGiveRatingWindow);
  sendButton.removeEventListener('click', submitRatingForm); //??? хочу уточнити

  // закриття модалки рейтингу відкриття модалки Валерії
  feedbackForm.classList.remove('is-open-modal');
  modalExercise.classList.add('is-open-modal');

  openModalExercise(id);
}

async function submitRatingForm(event) {
  event.preventDefault();

  // беру дані
  const id = (document.querySelector('.feedback-form').dataset.id = id);
  const rate = document.querySelector(
    '.feedback-form-rating-value'
  ).textContent; //??? хочу уточнити
  const email = document.querySelector('.feedback-form-input').value;
  const review = document.querySelector('.feedback-form-textarea').value;

  // перевіряю чи усі поля заповнені
  if (!id || !rate || !email || !review) {
    messages.showError('Please fill in all fields!');
    return;
  }

  const rating = { id, rate, email, review };

  try {
    const response = await backendAPI.updateExerciseRating(rating);

    // перевіряю відповідь з бекенду
    if (response.result) {
      messages.showSuccess('Thank you! Your opinion is important to us!');

      closeGiveRatingWindow(id);
    } else {
      messages.showError(response.message);
      console.error(response.message);
    }
  } catch (error) {
    messages.showError('Something went wrong. Please try again later.');
    console.error('Error:', error);
  }
}
