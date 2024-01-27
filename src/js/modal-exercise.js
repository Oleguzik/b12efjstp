const ratingsRef = document.querySelectorAll('.mod-exercise-rating');
if (ratingsRef.length > 0) {
  initRetings();
}

export function initRetings() {
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
