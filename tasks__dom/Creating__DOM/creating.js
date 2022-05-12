const list = document.querySelector(".modal__list");
const btn = document.querySelector(".modal__btn");
const modal__color = document.querySelector(".modal__color");

btn.addEventListener("change", function (e) {
  const inputNumbers = e.target.value;
  let items = "";

  for (let i = 0; i < inputNumbers; i++) {
    const newItem = document.createElement("div");
    newItem.classList.add("modal__item");
    newItem.innerText = i + 1;

    items += newItem.outerHTML;
  }

  list.innerHTML = items;
});

const colorItemsAll = (newItem, color) => {
  newItem.style.backgroundColor = color;
};

let changet = false;

modal__color.addEventListener("change", function (e) {
  const color = e.target.value;
  const colorItems = list.querySelectorAll(".modal__item");

  changet = !changet;

  for (let i = 0; i < colorItems.length; i++) {
    const CurrentBlock = colorItems[i];
    const numBlock = i + 1;

    if (changet) {
      if (numBlock % 2 !== 0) {
        colorItemsAll(CurrentBlock, color);
      } else {
        colorItemsAll(CurrentBlock, "#fff");
      }
    } else {
      if (numBlock % 2 == 0) {
        colorItemsAll(CurrentBlock, color);
      } else {
        colorItemsAll(CurrentBlock, "#fff");
      }
    }
  }
});
