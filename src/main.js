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
