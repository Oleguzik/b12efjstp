import backendAPI from './backendAPI';
import messages from './notificationAPI';
import { addRemoveCloseListeners } from './modal-exercise';

let currentRating = 0;
const backdropRating = document.querySelector('.backdrop');
const ratingStars = document.querySelectorAll('.feedback-rating-stars-svg');
const ratingValue = document.querySelector('.feedback-form-rating-value');

const modalExercise = document.querySelector('.modal-exercise');
const feedbackContainer = document.querySelector('.feedback-container');
const modalButtonGiveRating = document.querySelector(
  '.modal-exercise-btn-rating'
);
const feedbackCloseButton = document.querySelector('.feedback-close-button');
const feedbackForm = document.querySelector('.feedback-form');

export function startModalFeedbackScenario() {
  // лістенери на відкриття і закриття
  modalButtonGiveRating.addEventListener('click', openGiveRatingWindow);
  feedbackCloseButton.addEventListener('click', closeGiveRatingWindow);

  // лістенер на функцію відправки на бекенд
  feedbackForm.addEventListener('submit', submitRatingForm);

  ratingStar();
}

export function openGiveRatingWindow(id = '') {
  if (typeof id !== 'string') return;

  feedbackContainer.dataset.id = id;
  // закриття модалки вправи відкриття модалки рейтингу
  modalExercise.classList.toggle('visually-hidden');
  modalExercise.classList.toggle('is-open-modal');
  feedbackContainer.classList.toggle('visually-hidden');
  feedbackContainer.classList.toggle('is-open-modal');

  addRemoveRatingListeners();
}

function closeGiveRatingWindow() {
  feedbackForm.reset();
  resetRating();

  // видалення лістенерів
  addRemoveRatingListeners(true);

  // закриття модалки рейтингу відкриття модалки вправи
  feedbackContainer.classList.toggle('visually-hidden');
  feedbackContainer.classList.toggle('is-open-modal');

  modalExercise.classList.toggle('visually-hidden');
  modalExercise.classList.toggle('is-open-modal');

  addRemoveCloseListeners();
}

async function submitRatingForm(event) {
  event.preventDefault();

  // беру дані
  const id = feedbackContainer.dataset.id;
  const rate = parseFloat(ratingValue.textContent);
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

function addRemoveRatingListeners(remove = false) {
  if (remove) {
    document.removeEventListener('keyup', keyEscapeRatingHandler);
    backdropRating.removeEventListener('click', backdropRatingHandler);
  } else {
    backdropRating.addEventListener('click', backdropRatingHandler);
    document.addEventListener('keyup', keyEscapeRatingHandler);
  }
}

function backdropRatingHandler(e) {
  if (e.target === backdropRating) {
    closeGiveRatingWindow();
  }
}

function keyEscapeRatingHandler(e) {
  if (e.code === 'Escape') {
    closeGiveRatingWindow();
  }
}
