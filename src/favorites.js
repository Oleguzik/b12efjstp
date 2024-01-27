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

if (window.location.pathname === "/favorites.html") {
    favoritesEl.classList.add("active");
    homeEl.classList.remove("active");
} else {
    homeEl.classList.add("active"); 
}

