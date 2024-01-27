const scrollButton = document.querySelector(".scroll-button")
const trackScroll = () => {
    if (pageYOffset > 1000) {
        scrollButton.classList.remove("is-hidden");
    } else {
        scrollButton.classList.add("is-hidden");
    }
}
const goTop = () => {
    scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
scrollButton.addEventListener("click", goTop);
window.addEventListener("scroll", trackScroll);
