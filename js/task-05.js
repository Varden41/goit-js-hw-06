const refs = {
  userInput: document.getElementById("name-input"),
  username: document.getElementById("name-output"),
};

refs.userInput.addEventListener("input", (event) => {
  refs.username.textContent = event.currentTarget.value;
});
