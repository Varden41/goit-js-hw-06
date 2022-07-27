function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const { currentColor, colorBody, colorButton } = {
  currentColor: document.querySelector(".color"),
  colorBody: document.querySelector("body"),
  colorButton: document.querySelector(".change-color"),
};

colorButton.addEventListener("click", colorChanger);

function colorChanger(event) {
  const colorPicker = getRandomHexColor();
  colorBody.style.backgroundColor = colorPicker;
  currentColor.textContent = colorPicker;
}
