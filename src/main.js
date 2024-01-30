import messages from './js/notificationAPI';
import backendAPI from './js/backendAPI';
import localStorageAPI from './js/localStorageAPI';
import { exerciseCardMarkup } from './js/renderMarkup';
import startExercisesScenario from './js/excercises';

// import { exerciseCardMarkup } from './js/renderMarkup'; // Для пагінації

import './js/initialization';

startExercisesScenario();

/////////////////////////////////////////////////////////////////////
////// modal-rating
// document.addEventListener('DOMContentLoaded', () => {
//   const ratingStars = document.querySelectorAll('.feedback-rating-stars-svg');
//   const ratingValue = document.querySelector('.feedback-form-rating-value');
//   let currentRating = 0;

//   ratingStars.forEach(star => {
//     star.addEventListener('mouseenter', () => {
//       const hoverStarIndex = Array.from(ratingStars).indexOf(star);
//       highlightStars(hoverStarIndex);

//       showStarValue(hoverStarIndex + 1);
//     });

//     star.addEventListener('mouseleave', () => {
//       if (currentRating === 0) {
//         resetRating();
//       } else {
//         highlightStars(currentRating - 1);
//         showStarValue(currentRating);
//       }
//     });
//     star.addEventListener('click', () => {
//       const clickStarIndex = Array.from(ratingStars).indexOf(star) + 1;
//       currentRating = clickStarIndex;
//       ratingValue.textContent = `${currentRating}.0`;

//       highlightStars(clickStarIndex - 1);
//     });
//   });

//   function highlightStars(index) {
//     ratingStars.forEach((star, i) => {
//       if (i <= index) {
//         star.classList.add('feedback-rating-stars-svg-highlight');
//       } else {
//         star.classList.remove('feedback-rating-stars-svg-highlight');
//       }
//     });
//   }

//   function resetRating() {
//     ratingStars.forEach(star => {
//       star.classList.remove('feedback-rating-stars-svg-highlight');
//     });
//     ratingValue.textContent = '0.0';
//   }

//   function showStarValue(value) {
//     ratingValue.textContent = `${value}.0`;
//   }
// });

////// modal-rating
/////////////////////////////////////////////////////////////////////

///////Subscription form/////////
const subscriptionForm = document.querySelector('.footer-subscription-form');

subscriptionForm.addEventListener('submit', async event => {
  event.preventDefault();

  const email = subscriptionForm.elements.email.value;

  const response = await backendAPI.subscription(email);

  if (response.result) {
    messages.showSuccess(response.message);
    subscriptionForm.elements.email.classList.remove('is-glowing');
  } else {
    messages.showError(response.message);
  }

  subscriptionForm.reset();
});

// const testItem = {
//   _id: '64f389465ae26083f39b1af3',
//   bodyPart: 'lower legs',
//   equipment: 'sled machine',
//   gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/1384.gif',
//   name: 'hack one leg calf raise',
//   target: 'calves',
//   description:
//     "Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",
//   rating: 3,
//   burnedCalories: 286,
//   time: 3,
//   popularity: 105,
// };

// localStorageAPI.addItemToFavorites(testItem);
// console.log(localStorageAPI.getFavorites());

// localStorageAPI.deleteItemFromFavorites('64f389465ae26083f39b1af3');
