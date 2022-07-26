const input = document.getElementById("validation-input");

function onBlur(add, remove) {
  input.classList.add(add);
  input.classList.remove(remove);
}
input.addEventListener("blur", () => {
  if (input.value.length === Number(input.dataset.length)) {
    onBlur("valid", "invalid");
  } else {
    onBlur("invalid", "valid");
  }
});
