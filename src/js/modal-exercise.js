// import { openModalExercise, initRatings } from './js/modal-exercise';

const results = [
  {
    _id: '64f389465ae26083f39b17a4',
    bodyPart: 'waist',
    equipment: 'body weight',
    gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0003.gif',
    name: 'air bike',
    target: 'abs',
    description:
      "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
    rating: 3,
    burnedCalories: 312,
    time: 3,
    popularity: 1,
  },
  {
    _id: '64f389465ae26083f39b17a5',
    bodyPart: 'waist',
    equipment: 'body weight',
    gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0006.gif',
    name: 'alternate heel touchers',
    target: 'abs',
    description:
      "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
    rating: 3,
    burnedCalories: 116,
    time: 3,
    popularity: 1,
  },
  {
    _id: '64f389465ae26083f39b17a6',
    bodyPart: 'back',
    equipment: 'cable',
    gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0007.gif',
    name: 'alternate lateral pulldown',
    target: 'lats',
    description:
      'These large back muscles are responsible for shoulder adduction and horizontal extension. Pull-ups and lat pulldowns are common exercises targeting the lats.',
    rating: 3,
    burnedCalories: 70,
    time: 3,
    popularity: 1,
  },
];

const modalExerciseRef = document.querySelector('.modal-exercise');

openModalExercise({
  _id: '64f389465ae26083f39b17a6',
  bodyPart: 'back',
  equipment: 'cable',
  gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0007.gif',
  name: 'alternate lateral pulldown',
  target: 'lats',
  description:
    'These large back muscles are responsible for shoulder adduction and horizontal extension. Pull-ups and lat pulldowns are common exercises targeting the lats.',
  rating: 3,
  burnedCalories: 70,
  time: 3,
  popularity: 1,
});

export function openModalExercise({ _id }) {
  const elementModalExercise = results.find(element => element._id == _id);
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
  const markupModalExercise = `
    <button class="modal-exercise-close" type="button">
      <svg class="modal-exercise-icon-x-black" width="24" height="24" aria-label="icon-x-black">
        <use href="./img/sprite.svg#icon-x-black"></use>
      </svg>
    </button>
    <!-- Image -->
    <div class="modal-exercise-image" id="img"></div>

 <!-- Description -->
 <div class="modal-exercise-description">
    <div class="modal-exercise-title-rating-box">
      <h3 class="modal-exercise-title">${name}</h3>
<!-- Rating -->
    <div class="mod-exercise-rating">
        <div class="mod-exercise-rating-value">${rating}</div>
        <div class="mod-exercise-rating-body">
            
            <ul class="mod-exercise-rating-list">
                <li class="modal-exercise-rating-item"><svg class="modal-exercise-icon-star" width="16" height="16" aria-label="star">
                        <use href="./img/sprite.svg#icon-Star-grey"></use>
                    </svg></li>
                    <li class="modal-exercise-rating-item"><svg class="modal-exercise-icon-star" width="16" height="16" aria-label="star">
                        <use href="./img/sprite.svg#icon-Star-grey"></use>
                    </svg></li>
                    <li class="modal-exercise-rating-item"><svg class="modal-exercise-icon-star" width="16" height="16" aria-label="star">
                        <use href="./img/sprite.svg#icon-Star-grey"></use>
                    </svg></li>
                    <li class="modal-exercise-rating-item"><svg class="modal-exercise-icon-star" width="16" height="16" aria-label="star">
                        <use href="./img/sprite.svg#icon-Star-grey"></use>
                    </svg></li>
                    <li class="modal-exercise-rating-item"><svg class="modal-exercise-icon-star" width="16" height="16" aria-label="star">
                        <use href="./img/sprite.svg#icon-Star-grey"></use>
                    </svg></li>
            </ul>

            <div class="mod-exercise-rating-active">

                <ul class="mod-exercise-rating-list-active">
                    <li class="modal-exercise-rating-item-active"><svg class="modal-exercise-icon-star-active" width="16" height="16" aria-label="star">
                    <use href="./img/sprite.svg#icon-Star-grey"></use>
                    </svg></li>
                    <li class="modal-exercise-rating-item-active"><svg class="modal-exercise-icon-star-active" width="16" height="16" aria-label="star">
                        <use href="./img/sprite.svg#icon-Star-grey"></use>
                    </svg></li>
                    <li class="modal-exercise-rating-item-active"><svg class="modal-exercise-icon-star-active" width="16" height="16" aria-label="star">
                    <use href="./img/sprite.svg#icon-Star-grey"></use>
                    </svg></li>
                    <li class="modal-exercise-rating-item-active"><svg class="modal-exercise-icon-sta-active" width="16" height="16" aria-label="star">
                    <use href="./img/sprite.svg#icon-Star-grey"></use>
                    </svg></li>
                    <li class="modal-exercise-rating-item-active"><svg class="modal-exercise-icon-star-active" width="16" height="16" aria-label="star">
                    <use href="./img/sprite.svg#icon-Star-grey"></use>
                    </svg></li>
                </ul>
            </div>
            <div class="mod-exercise-rating-items">
                <input type="radio" class="mod-exercise-rating-item" value="1" name="rating">
                <input type="radio" class="mod-exercise-rating-item" value="2" name="rating">
                <input type="radio" class="mod-exercise-rating-item" value="3" name="rating">
                <input type="radio" class="mod-exercise-rating-item" value="4" name="rating">
                <input type="radio" class="mod-exercise-rating-item" value="5" name="rating">
            </div>
        </div>
      </div>
<!-- Categories container -->
    </div>
    <div class="modal-exercise-categories-box">
      <ul class="modal-exercise-list">
        <li class="modal-exercise-item">
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
        </li>
      </ul>
    </div>
    <div class="modal-exercise-instruction-box">
      <p class="modal-exercise-instruction-text">
        ${description}
      </p>
    </div>
    <!-- Button container -->
    <div class="modal-exercise-btn-box">
      <button class="modal-exercise-btn-add" type="button">
        Add to favorites
          <svg class="modal-exercise-icon-heart" width="20" height="20" aria-label="heart">
            <use href="./img/sprite.svg#icon-heart"></use>
          </svg>
      </button>
      <button class="modal-exercise-btn-remove btn-hidden" type="button">
          Remove from
          <svg class="modal-exercise-icon-heart" width="20" height="20" aria-label="heart">
            <use href="./img/sprite.svg#icon-heart"></use>
          </svg>
      </button>
      <button class="modal-exercise-btn-rating" type="button">
        Give a rating
      </button>
    </div>
  </div>
  </div>`;

  modalExerciseRef.innerHTML = markupModalExercise;
  getImage(gifUrl);
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
