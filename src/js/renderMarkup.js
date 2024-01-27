// function exerciseCardMarkup(params = {}, isFavorites=false) {
function exerciseCardMarkup(isInFavorites, objectOfParams) {
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

  // <div class="exercise-card-workout-container">
  //   <p class="exercise-card-workout-text">Workout</p>
  //   <button type="button" class="exercise-card-remove-btn">
  //     <svg class="exercise-card-remove-icon">
  //       <use href="./img/sprite.svg#icon-trash-black"></use>
  //     </svg>
  //   </button>
  // </div>

  // <div class="exercise-card-workout-container">
  //   <p class="exercise-card-workout-text">Workout</p>
  //   <p class="exercise-card-rating">
  //     <span class="exercise-card-rating-value">4.0</span>
  //     <svg class="exercise-card-rating-star">
  //       <use href="./img/sprite.svg#icon-Star-gold"></use>
  //     </svg>
  //   </p>
  // </div>

  // const markup = start + isFavorites ? opt1 : opt2 + end;
  // const markup = all.replace(searchword, isFavorites ? opt1 : opt2);

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
