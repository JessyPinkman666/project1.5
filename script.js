const swiper = new Swiper(".swiper", {
  direction: "horizontal",

  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  slidesOffsetBefore: 15,

  slidesPerView: "auto",
  spaceBetween: 15,
});

let btnMore = document.querySelector(".menu__more");
let btnHide = document.querySelector(".menu__hide");
let brandItems = document.querySelector(".menu__wrapper").children;
let mediumSize = window.matchMedia(
  "(min-width: 768px) and (max-width: 1119px)"
);
let largeSize = window.matchMedia("(min-width: 1120px)");
let test = document.querySelector(".brand__item:first-child");

let sizeCheker = function () {
  if (mediumSize) {
    for (let i = 6; i < brandItems.length; i++) {
      brandItems[i].classList.add("hidden");
    }
  } else if (largeSize) {
    for (let i = 8; i < brandItems.length; i++) {
      brandItems[i].classList.add("hidden");
    }
  }
};

sizeCheker();

btnMore.addEventListener("click", function (evt) {
  if (mediumSize) {
    for (let i = 6; i < brandItems.length; i++) {
      brandItems[i].classList.toggle("hidden");
    }
  } else if (largeSize) {
    for (let i = 6; i < brandItems.length; i++) {
      brandItems[i].classList.toggle("hidden");
    }
  }

  btnMore.classList.toggle("hidden");
  btnHide.classList.toggle("hidden");
});

btnHide.addEventListener("click", function (evt) {
  if (mediumSize) {
    for (let i = 6; i < brandItems.length; i++) {
      brandItems[i].classList.toggle("hidden");
    }
  } else if (largeSize) {
    for (let i = 6; i < brandItems.length; i++) {
      brandItems[i].classList.toggle("hidden");
    }
  }

  btnHide.classList.toggle("hidden");
  btnMore.classList.toggle("hidden");
});
