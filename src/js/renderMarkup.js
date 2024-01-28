export function exerciseCardMarkup(params = {}, isFavorites = false) {
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

  const { name, burnedCalories, time, bodyPart, target, rating, _id } = params;
  let markupDifference = '';
  if (isFavorites) {
    markupDifference = `<button type="button" class="exercise-card-remove-btn" data-delete-id="${_id}">
       <svg class="exercise-card-remove-icon">
           <use href="./img/sprite.svg#icon-trash-black"></use>
       </svg>
    </button>`;
  } else {
    markupDifference = `<p class="exercise-card-rating">
      <span class="exercise-card-rating-value">${rating}</span>
         <svg class="exercise-card-rating-star">
           <use href="./img/sprite.svg#icon-Star-gold"></use>
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
      <svg class="exercise-card-start-btn-icon">
        <use href="./img/sprite.svg#icon-arrow-right"></use>
      </svg>
    </button>
  </div>
  <h3 class="exercise-card-header-container">
    <svg class="exercise-card-header-icon">
      <use href="./img/sprite.svg#icon-icon-run"></use>
    </svg>
    <span class="exercise-card-header-text"
      >${name}</span
    >
  </h3>
  <ul class="exercises-card-info-list">
    <li class="exercise-card-info-parameter">
      <p class="exercise-card-parameter-name">Burned calories:</p>
      <p class="exercise-card-parameter-value">${burnedCalories} / ${time} min</p>
    </li>
    <li class="exercise-card-info-parameter">
      <p class="exercise-card-parameter-name">Body part:</p>
      <p class="exercise-card-parameter-value">${bodyPart}Waist</p>
    </li>
    <li class="exercise-card-info-parameter">
      <p class="exercise-card-parameter-name">Target:</p>
      <p class="exercise-card-parameter-value">${target}</p>
    </li>
  </ul>
  </li>`;
}
