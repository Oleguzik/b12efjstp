function exerciseCardMarkup(isInFavorites, objectOfParams) {
  if (isInFavorites) {
    const { exerciseName, caloriesBurnt, bodyPart, exerciseTarget } =
      objectOfParams;
    return `<li class="favorites-exersise-item">
         <div class="facorites-card-header">
           <div class="workout-container">
             <p class="workout-button">Workout</p>
             <a class="remove-exersise" href="">
               <svg class="remove-exersise-icon">
                 <use href="./sprite.svg#icon-trash-black"></use>
               </svg>
             </a>
           </div>
           <button type="button" class="start-container">
             <p class="start-action">Start</p>
             <svg class="start-arrow-icon">
               <use href="./sprite.svg#icon-arrow-right"></use>
             </svg>
           </button>
         </div>
         <div class="exercise-name-container">
           <svg class="exercise-name-icon">
             <use href="./sprite.svg#icon-icon-run"></use>
           </svg>
           <p class="exercise-name-text">${exerciseName}</p>
         </div>
         <div class="exercises-info-container">
           <div class="exercise-parameter-container">
             <p class="exercise-parameter">Burned calories:</p>
             <p class="exercise-parameter-value">${caloriesBurnt}</p>
           </div>
           <div class="exercise-parameter-container">
             <p class="exercise-parameter">Body part:</p>
             <p class="exercise-parameter-value">${bodyPart}</p>
           </div>
           <div class="exercise-parameter-container">
             <p class="exercise-parameter">Target:</p>
             <p class="exercise-parameter-value">${exerciseTarget}</p>
           </div>
         </div>
       </li>`;
  } else {
    const {
      exerciseRating,
      exerciseName,
      caloriesBurnt,
      bodyPart,
      exerciseTarget,
    } = objectOfParams;
    return `<li class="favorites-exersise-item">
      <div class="facorites-card-header">
        <div class="workout-container-star">
          <p class="workout-button">Workout</p>
          <div class="exercise-rating">
            <p class="exercise-rating-value">${exerciseRating}</p>
            <svg class="exercise-rating-star">
              <use href="./sprite.svg#icon-Star-gold"></use>
            </svg>
          </div>
        </div>
        <button type="button" class="start-container">
          <p class="start-action">Start</p>
          <svg class="start-arrow-icon">
            <use href="./sprite.svg#icon-arrow-right"></use>
          </svg>
        </button>
      </div>
      <div class="exercise-name-container">
        <svg class="exercise-name-icon">
          <use href="./sprite.svg#icon-icon-run"></use>
        </svg>
        <p class="exercise-name-text">${exerciseName}</p>
      </div>
      <div class="exercises-info-container">
        <div class="exercise-parameter-container">
          <p class="exercise-parameter">Burned calories:</p>
          <p class="exercise-parameter-value">${caloriesBurnt}</p>
        </div>
        <div class="exercise-parameter-container">
          <p class="exercise-parameter">Body part:</p>
          <p class="exercise-parameter-value">${bodyPart}</p>
        </div>
        <div class="exercise-parameter-container">
          <p class="exercise-parameter">Target:</p>
          <p class="exercise-parameter-value">${exerciseTarget}</p>
        </div>
      </div>
    </li>`;
  }
}
