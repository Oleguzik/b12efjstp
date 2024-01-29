import messages from './js/notificationAPI';
import backendAPI from './js/backendAPI';
import localStorageAPI from './js/localStorageAPI';
import { exerciseCardMarkup } from './js/renderMarkup';
// import { exerciseCardMarkup } from './js/renderMarkup'; // Для пагінації

import './js/initialization';

// const exercisesType = document.querySelector('.exercises-type-item-btn');
// const exercisesGalleryType = document.querySelector('.exercises-gallery-list');
// // const typeBtn = []

// document.addEventListener("DOMContentLoaded", () => {
//   // alert("Page is loaded!");
//   exercisesType.classList.add('exercises-type-item-btn-focus');

//   console.log(exercisesType.);
// });

// exercisesType.addEventListener('click', () => {
//   exercisesType.classList.remove('exercises-type-item-btn-focus');
//   // alert("Page is loaded!");
// });


// пришлось закоментить код выше, не работал мой код
// код для скрытия кнопки очищения формы и показа ее, когда происходит ввод в поле импута
  const inputElement = document.querySelector('.exercises-form-input');
  const clearButton = document.querySelector('.exercises-form-btn-clear');


  inputElement.addEventListener('input', function () {
    const inputValue = inputElement.value;
    if (inputValue.length > 0) {
      clearButton.style.display = 'block';
    } else {
      clearButton.style.display = 'none';
    }
  });

  clearButton.addEventListener('click', function () {
    inputElement.value = '';
    clearButton.style.display = 'none';
  });












/////////////////////////////////////////////////////////////////////
////// modal-rating
document.addEventListener('DOMContentLoaded', function () {
  const ratingStars = document.querySelectorAll('.feedback-rating-stars-svg');
  const ratingValue = document.querySelector('.feedback-form-rating-value');
  let currentRating = 0;

  ratingStars.forEach(star => {
    star.addEventListener('mouseenter', function () {
      const hoverStarIndex = Array.from(ratingStars).indexOf(star);
      highlightStars(hoverStarIndex);

      showStarValue(hoverStarIndex + 1);
    });

    star.addEventListener('mouseleave', function () {
      if (currentRating === 0) {
        resetRating();
      } else {
        highlightStars(currentRating - 1);
        showStarValue(currentRating);
      }
    });
    star.addEventListener('click', function () {
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
});

////// modal-rating
/////////////////////////////////////////////////////////////////////


// Останній (робочий) тест backendAPI лишаю закоментованим для прикладу запиту
// async function GetAllData() {
//     const filterWithFront = 'Equipment';
//     backendAPI.filter = filterWithFront;
//   const filterData = await backendAPI.getFilterData(1, 8);
//   console.log(filterData);

//     filterWithFront = 'Body part';
//     backendAPI.filter = filterWithFront;
//     const exercisesWithFront = `Waist`;
//     backendAPI.choiceExercises = exercisesWithFront;
//   const OnExercises = await backendAPI.getOnExercises(1, 5, `air`);
//   console.log(OnExercises);

// const QuoteOfTheDay = await backendAPI.getQuoteOfTheDay();
// console.log(QuoteOfTheDay);

// const ExerciseInfo = await backendAPI.getExerciseInfo(
//   `64f389465ae26083f39b17a4`
// );
// console.log(ExerciseInfo);

// const sub = await backendAPI.subscription(`qazwsxedcrfv2@gmail.com`);
// console.log(sub);

// const ExerciseRating = await backendAPI.updateExerciseRating({
//   id: `64f389465ae26083f39b17a4`,
//   rate: 5,
//   email: `qazwsxedcrfv2@gmail.com`,
//   review: `text`,
// });
// console.log(ExerciseRating);
// }
// GetAllData();


// const quote = localStorageAPI.getQuoteOfTheDay();
// console.log(quote);

// const favorites = localStorageAPI.getFavorites();
// console.log(favorites);

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
