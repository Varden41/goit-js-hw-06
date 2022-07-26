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

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const div = document.createElement("div");
    div.style.width = 30 + i * 10 + "px";
    div.style.height = 30 + i * 10 + "px";
    div.style.backgroundColor = getRandomHexColor();
    boxDiv.append(div);
  }
}

function destroyBoxes() {
  boxDiv.innerHTML = "";
}
