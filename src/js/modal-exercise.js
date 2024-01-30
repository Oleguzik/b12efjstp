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
      // } else {
      //   messages.showError();
    }
  } catch {
    error => {
      messages.showError(error);
    };
  }
}

// RENDER MODAL
function renderModalExercise({
  name,
  gifUrl,
  rating,
  target,
  bodyPart,
  equipment,
  popularity,
  burnedCalories,
  time,
  description,
}) {
  const titleName = document.querySelector('.modal-exercise-title');
  const valueRating = document.querySelector('.mod-exercise-rating-value');
  const modalExerciseList = document.querySelector('.modal-exercise-list');
  const instructionText = document.querySelector(
    '.modal-exercise-instruction-text'
  );

  getImage(gifUrl);
  titleName.textContent = name;
  valueRating.textContent = rating.toString().padEnd(3, '.0');
  instructionText.textContent = description;
  const modalExerciseItem = `<li class="modal-exercise-item">
          <p class="modal-exercise-subcategory">Target</p>
          <p class="modal-exercise-selected">${target}</p>
        </li>
        <li class="modal-exercise-item">
          <p class="modal-exercise-subcategory">Body Part</p>
          <p class="modal-exercise-selected">${bodyPart}</p>
        </li>
        <li class="modal-exercise-item">
          <p class="modal-exercise-subcategory">Equipment</p>
          <p class="modal-exercise-selected">${equipment}</p>
        </li>
        <li class="modal-exercise-item">
          <p class="modal-exercise-subcategory">Popular</p>
          <p class="modal-exercise-selected">${popularity}</p>
        </li>
        <li class="modal-exercise-item">
          <p class="modal-exercise-subcategory">Burned Calories</p>
          <p class="modal-exercise-selected">${burnedCalories}/${time} min</p>
        </li>`;
  modalExerciseList.innerHTML = modalExerciseItem;
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

//////////////////////////////////////////////////
/// Таня

function openGiveRatingWindow(id) {
  // модалка Валерії схована
  // модалка рейтингу відкрита
  // ( твій код (івент лістенери + ....))
  document.querySelector('.feedback-form').data.id = id;
}

function closeGiveRatingWindow(id) {
  // видаляєш івент лістенери
  // приховуєш свою модалку

  openModalExercise(id);
}

async function submitRatingForm(event) {
  const rating = { id: '', rate: '', email: '', review: '' };
  try {
    const response = await backendAPI.updateExerciseRating(rating);
    // прочитати
    // notification success
    // messages.showSuccess('');

    closeGiveRatingWindow(id);
  } catch (error) {
    // notification error
  }
}
