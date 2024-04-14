document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
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
});
