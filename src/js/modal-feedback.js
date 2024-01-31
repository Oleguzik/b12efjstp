import backendAPI from './backendAPI';
// import { openModalExercise } from './openModalExercise';

let currentRating = 0;
const ratingStars = document.querySelectorAll('.feedback-rating-stars-svg');
const ratingValue = document.querySelector('.feedback-form-rating-value');

const modalExercise = document.querySelector('.modal-exercise');
const feedbackForm = document.querySelector('.feedback-container');
const modalButtonGiveRating = document.querySelector(
  '.modal-exercise-btn-rating'
);
const feedbackCloseButton = document.querySelector('.feedback-close-button');
const sendButton = document.querySelector('.feedback-form-button');

export function startModalFeedbackScenario() {
  // лістенери на відкриття і закриття
  modalButtonGiveRating.addEventListener('click', openGiveRatingWindow);
  feedbackCloseButton.addEventListener('click', closeGiveRatingWindow);

  // лістенер на функцію відправки на бекенд
  sendButton.addEventListener('click', submitRatingForm);

  ratingStar();
}

export function openGiveRatingWindow(id = '') {
  if (typeof id !== 'string') return;

  feedbackForm.dataset.id = id;
  // закриття модалки вправи відкриття модалки рейтингу
  modalExercise.classList.toggle('visually-hidden');
  modalExercise.classList.toggle('is-open-modal');
  feedbackForm.classList.toggle('visually-hidden');
  feedbackForm.classList.toggle('is-open-modal');
}

function closeGiveRatingWindow(id) {
  //// видалення лістенерів
  //modalButtonGiveRating.removeEventListener('click', openGiveRatingWindow);
  //sendButton.removeEventListener('click', submitRatingForm); //??? хочу уточнити

  // закриття модалки рейтингу відкриття модалки вправи
  feedbackForm.classList.toggle('visually-hidden');
  feedbackForm.classList.toggle('is-open-modal');
  modalExercise.classList.toggle('visually-hidden');
  modalExercise.classList.toggle('is-open-modal');
  // openModalExercise(id);
}

async function submitRatingForm(event) {
  event.preventDefault();

  // беру дані
  const id = (document.querySelector('.feedback-form').dataset.id = id);
  const rate = document.querySelector(
    '.feedback-form-rating-value'
  ).textContent;
  const email = document.querySelector('.feedback-form-input').value;
  const review = document.querySelector('.feedback-form-textarea').value.trim();

  // перевіряю чи усі поля заповнені
  if (!id || !rate || !email || !review) {
    messages.showError('Please fill in all fields!');
    return;
  }

  const rating = { id, rate, email, review };
  const response = await backendAPI.updateExerciseRating(rating);

  // перевіряю відповідь з бекенду
  if (response.result) {
    messages.showSuccess('Thank you! Your opinion is important to us!');

    closeGiveRatingWindow(id);
  } else {
    messages.showError(response.message);
  }
}

//рейтинг зірочок
function ratingStar() {
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
}

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
