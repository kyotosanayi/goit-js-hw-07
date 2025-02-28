const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target.email.value.trim());
  console.log(event.target.password.value.trim());
  const email = event.target.email.value;
  const password = event.target.password.value;
  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }
  console.log("Email:", email);
  console.log("Password:", password);
  form.reset();
});
