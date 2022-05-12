const arrowLeft = document.querySelector("#left");
const arrowRight = document.querySelector("#right");
const list = document.querySelector(".slider__list");

let n = 0;

arrowLeft.addEventListener("click", function () {
  n = n + 100;

  if (n > 500) {
    n = 500;
  }
  list.style.transform = "translateX(-" + n + "px)";
});

arrowRight.addEventListener("click", function () {
  n = n - 100;

  if (n < 100) {
    n = 0;
   
  }
   list.style.transform = "translateX(-" + n + "px)";
});
