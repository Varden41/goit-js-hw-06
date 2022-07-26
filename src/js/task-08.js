const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }
  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();

  //   event.preventDefault();
  //   if (
  //     event.currentTarget.email.value === "" ||
  //     event.currentTarget.password.value === ""
  //   ) {
  //     return console.log("Please fill in all the fields!");
  //   }
  //   const formData = new FormData(event.currentTarget);
  //   formData.forEach((value, name) => {
  //     console.log(name, ":", value);
  //   });
}
