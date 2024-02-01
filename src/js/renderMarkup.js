import sprite from '../img/sprite.svg';

const renderAPI = {
  exerciseCardMarkup: function (params = {}, isFavorites = false) {
    const { name, burnedCalories, time, bodyPart, target, rating, _id } =
      params;

    let markupDifference = '';
    if (isFavorites) {
      markupDifference = `<button type="button" class="exercise-card-remove-btn" data-delete-id="${_id}">
       <svg class="exercise-card-remove-icon" width="16" height="16">
           <use href="${sprite}#icon-trash-black"></use>
       </svg>
    </button>`;
    } else {
      markupDifference = `<p class="exercise-card-rating">
      <span class="exercise-card-rating-value">${rating}</span>
         <svg class="exercise-card-rating-star" width="18" height="18">
           <use href="${sprite}#icon-star"></use>
         </svg>
      </p>`;
    }
    return `<li class="exercise-card-item" data-card-id="${_id}">
  <div class="exercise-card-actions">
    <div class="exercise-card-workout-container">
      <p class="exercise-card-workout-text">Workout</p>
      ${markupDifference}
    </div>
    <button type="button" class="exercise-card-start-btn" data-open-id="${_id}">
      <span class="exercise-card-start-btn-text">Start</span>
      <svg class="exercise-card-start-btn-icon" width="16" height="16">
        <use href="${sprite}#icon-arrow-right"></use>
      </svg>
    </button>
  </div>
  <h3 class="exercise-card-header-container">
    <svg class="exercise-card-header-icon" width="24" height="24">
      <use href="${sprite}#icon-icon-run"></use>
    </svg>
    <span class="exercise-card-header-text"
      >${capitalizeString(name)}</span
    >
  </h3>
  <ul class="exercises-card-info-list">
    <li class="exercise-card-info-parameter">
      <p class="exercise-card-parameter-name">Burned calories:</p>
      <p class="exercise-card-parameter-value">${burnedCalories} / ${time} min</p>
    </li>
    <li class="exercise-card-info-parameter">
      <p class="exercise-card-parameter-name">Body part:</p>
      <p class="exercise-card-parameter-value">${bodyPart}</p>
    </li>
    <li class="exercise-card-info-parameter">
      <p class="exercise-card-parameter-name">Target:</p>
      <p class="exercise-card-parameter-value">${target}</p>
    </li>
  </ul>
  </li>`;

    // {
    //     "_id": "64f389465ae26083f39b17a4",
    //     "bodyPart": "waist",
    //     "equipment": "body weight",
    //     "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0003.gif",
    //     "name": "air bike",
    //     "target": "abs",
    //     "description": "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
    //     "rating": 3,
    //     "burnedCalories": 312,
    //     "time": 3,
    //     "popularity": 1
    //   }
  },

  filterGroupsMarkup: function ({ name = '', filter = '', imgUrl = '' }) {
    const style = `background-image: linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ),
    url('${imgUrl}');`;

    return `<li class="exercises-gallery-item" style="${style}">
    <a href="" class="exercises-gallery-link" data-name="${name}">
      <h3 class="exercises-gallery-item-title">${name}</h3>
      <p class="exercises-gallery-item-description">${filter}</p>
    </a>
  </li>`;

    // {
    //     "name": "calves",
    //     "filter": "Muscles",
    //     "imgUrl": "https://ftp.goit.study/img/energy-flow/Calves.webp"
    //   },
  },

  paginationMarkup: function (numberOfPages = 1, activePage = 1) {
    let markup = '';
    for (let i = 1; i <= numberOfPages; i++) {
      if (i !== activePage - 0) {
        markup += `<li class="pagination-item"><a href="">${i}</a></li>`;
      } else {
        markup += `<li class="pagination-item pagination-item-active">
    <a href="">${i}</a>
  </li>`;
      }
    }
    return markup;
  },
};

export default renderAPI;

function capitalizeString(string = '') {
  return string[0].toUpperCase() + string.substring(1);
}
