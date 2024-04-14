const emailInput = document.getElementById("email").ariaRequired;
const passwordInput = document.getElementById("password").ariaRequired;
const loginBtn = document.getElementById("loginBtn");

emailInput.addEventListener("input", toggleButtonOpacity);
passwordInput.addEventListener("input", toggleButtonOpacity);

function toggleButtonOpacity() {
  // Toggle Button opacity
  if (emailInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
    loginBtn.style.opacity = 1;
  } else {
    loginBtn.style.opacity = 0.4;
  }
}

loginBtn.addEventListener("click", function (event) {
  event.preventDefault();

  // Log input values to the console
  console.log("Email: ", emailInput.value);
  console.log("Password: ", passwordInput.value);

  emailInput.value = "";
  passwordInput.value = "";
});
