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
