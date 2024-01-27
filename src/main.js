const closeBtnEl = document.querySelector(".close-nav-button-mob");
const navBtnEl = document.querySelector(".header-button-nav");
const mobileMenuEl = document.querySelector(".mobile-menu");


navBtnEl.addEventListener("click", () =>
    mobileMenuEl.classList.add("is-open")
    
);
closeBtnEl.addEventListener("click", () =>
    mobileMenuEl.classList.remove("is-open")
    
);
mobileMenuEl.addEventListener("click", () =>
    mobileMenuEl.classList.remove("is-open")
    
);

const homeEl = document.querySelector(".home");
const favoritesEl = document.querySelector(".favorites");

favoritesEl.addEventListener("click", () => {
   
    favoritesEl.classList.add("active");
    homeEl.classList.remove("active");
});


const homeMobEl = document.querySelector(".home");
const favoritesMobEl = document.querySelector(".favorites");
favoritesMobEl.addEventListener("click", () => {
   
    favoritesMobEl.classList.add("active");
    homeMobEl.classList.remove("active");
});