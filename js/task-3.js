const input = document.querySelector("#name-input");
input.addEventListener("input", (event) => {
  console.log(event.target.value.trim());
  const text = document.querySelector("#name-output");
  if (event.target.value.trim() === "") {
    text.textContent = "Anonymous";
  } else {
    text.textContent = event.target.value.trim();
  }
});
