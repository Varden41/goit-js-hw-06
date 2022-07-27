function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const { input, buttonCreate, buttonDestroy, boxDiv } = {
  input: document.querySelector("input"),
  buttonCreate: document.querySelector("button[data-create]"),
  buttonDestroy: document.querySelector("button[data-destroy]"),
  boxDiv: document.getElementById("boxes"),
};
buttonCreate.addEventListener("click", () => createBoxes(Number(input.value)));

buttonDestroy.addEventListener("click", destroyBoxes);
const boxMassive = [];
function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement("div");
    const doMath = 30 + i * 10 + "px";
    box.style.width = doMath;
    box.style.height = doMath;
    box.style.backgroundColor = getRandomHexColor();
    boxMassive.push(box);
  }
  input.value = ``;
  boxDiv.append(...boxMassive);
}

function destroyBoxes() {
  boxDiv.innerHTML = "";
}
