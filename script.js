const signUpBtn = document.querySelector(".signup-btn");
const signInBtn = document.querySelector(".signin-btn");
const formsWrapper = document.querySelector(".forms-wrapper");

if (signUpBtn && formsWrapper) {
  signUpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formsWrapper.classList.add("change");
  });
}

if (signInBtn) {
  signInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formsWrapper.classList.remove("change");
  });
}
