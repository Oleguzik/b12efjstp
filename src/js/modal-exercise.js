import backendAPI from './backendAPI';
import messages from './notificationAPI';

export function openModalExercise(_id) {
  const elementModalExercise = results.find(element => element._id === _id);
  renderModalExercise(elementModalExercise);
}

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
  const spanFavorites = document.querySelector('.mod-exercise-span-add');
  getImage(gifUrl);
  titleName.textContent = name;
  valueRating.textContent = rating;
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
  spanFavorites.textContent = spanFavorites.dataset.add;
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
