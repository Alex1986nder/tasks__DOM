const box = document.querySelector(".container");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  const newItem = document.createElement("div");
  newItem.classList.add("overlay");

  const window = document.createElement("div");
  window.classList.add("overlay__window");
  window.textContent = "Hello, world!";

  const link = document.createElement("a");
  link.classList.add("overlay__link");
  link.textContent = "X";

  link.addEventListener("click", function () {
    box.removeChild(newItem);
  });

  newItem.addEventListener("click", function () {
    box.removeChild(newItem);
  });

  window.addEventListener("click", function (event) {
    event.stopPropagation()
  });


  window.appendChild(link);
  newItem.appendChild(window);
  box.appendChild(newItem);
});
