const refs = {
  userInput: document.getElementById("name-input"),
  username: document.getElementById("name-output"),
};

refs.userInput.addEventListener("input", (event) => {
  if (refs.userInput.value === "") {
    refs.username.textContent = "Anonymous";
  } else {
    refs.username.textContent = event.currentTarget.value;
  }
});
