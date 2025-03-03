function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls input");
const createButton = document.querySelector("#controls button[data-create]");
const destroyButton = document.querySelector("#controls button[data-destroy]");
const boxes = document.querySelector("#boxes");
let box = {
  width: 30,
  height: 30,
};

createButton.addEventListener("click", (event) => {
  boxes.innerHTML = "";
  const inputValue = Number(input.value);
  if (inputValue < 1 || inputValue > 100) {
    return;
  }

  box = {
    width: 30,
    height: 30,
  };
  for (let i = 0; i < inputValue; i += 1) {
    const divbox = document.createElement("div");
    divbox.style.width = `${box.width}px`;
    divbox.style.height = `${box.height}px`;
    divbox.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(divbox);
    box.width += 10;
    box.height += 10;
  }
});

destroyButton.addEventListener("click", (event) => {
  boxes.innerHTML = "";
  input.value = "";
});
