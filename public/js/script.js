var scene = document.getElementById("scene");
var parallax = new Parallax(scene);

// DOM Elenment selection
const slides = document.querySelectorAll(".swiper-slide");
let currentSlide = document.querySelector(".big");
const rightButton = document.querySelector(".next");
const leftButton = document.querySelector(".prev");

const clickFunction = function () {
  if (
    Number(currentSlide.innerHTML) > slides.length - 1 &&
    this.classList.contains("next")
  )
    currentSlide.innerHTML = 0;
  if (Number(currentSlide.innerHTML) == 1 && this.classList.contains("prev"))
    currentSlide.innerHTML = slides.length;

  if (this.classList.contains("next")) {
    currentSlide.innerHTML = Number(currentSlide.innerHTML) + 1;
  }
  if (this.classList.contains("prev")) {
    if (Number(currentSlide.innerHTML) > slides.length - 1)
      currentSlide.innerHTML = 0;
    if (Number(currentSlide.innerHTML) == 0)
      currentSlide.innerHTML = slides.length + 1;
    currentSlide.innerHTML = Number(currentSlide.innerHTML) - 1;
  }
};

rightButton.addEventListener("click", clickFunction);
leftButton.addEventListener("click", clickFunction);

const swiper = new Swiper(".swiper", {
  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
