const scrollButton = document.querySelector('.scroll-button');
const scrollMiniIcon = document.querySelector('.scroll-mini');
const scrollBigIcon = document.querySelector('.scroll-big');

setScrollIcon();

scrollButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

window.addEventListener('scroll', () => {
  document.documentElement.scrollTop >= 300 &&
    scrollButton.classList.contains('is-hidden') &&
    scrollButton.classList.remove('is-hidden');

  document.documentElement.scrollTop < 300 &&
    !scrollButton.classList.contains('is-hidden') &&
    scrollButton.classList.add('is-hidden');
});

window.addEventListener('resize', () => {
  setScrollIcon();
});

function setScrollIcon() {
  if (document.documentElement.scrollWidth >= 1440) {
    scrollBigIcon.classList.remove('is-undisplayed');
    scrollMiniIcon.classList.add('is-undisplayed');
  } else {
    scrollBigIcon.classList.add('is-undisplayed');
    scrollMiniIcon.classList.remove('is-undisplayed');
  }
}
