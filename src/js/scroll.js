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

// // left: 37, up: 38, right: 39, down: 40,
// // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
// var keys = {37: 1, 38: 1, 39: 1, 40: 1};

// function preventDefault(e) {
//   e.preventDefault();
// }

// function preventDefaultForScrollKeys(e) {
//   if (keys[e.keyCode]) {
//     preventDefault(e);
//     return false;
//   }
// }

// // modern Chrome requires { passive: false } when adding event
// var supportsPassive = false;
// try {
//   window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
//     get: function () { supportsPassive = true; }
//   }));
// } catch(e) {}

// var wheelOpt = supportsPassive ? { passive: false } : false;
// var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// // call this to Disable
// function disableScroll() {
//   window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
//   window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
//   window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
//   window.addEventListener('keydown', preventDefaultForScrollKeys, false);
// }

// // call this to Enable
// function enableScroll() {
//   window.removeEventListener('DOMMouseScroll', preventDefault, false);
//   window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
//   window.removeEventListener('touchmove', preventDefault, wheelOpt);
//   window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
// }
