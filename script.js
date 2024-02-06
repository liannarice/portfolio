// nav
// create html reference variables for nav
const topLinks = document.getElementById("top-links");
const navBtn = document.getElementById("mobile-menu-btn");
// when btn is clicked toplinks will appear
// add event listener to btn make function that makes top links appear
navBtn.addEventListener("click", function () {
  topLinks.classList.toggle("hide-links");
});

// footer
// API for Whose Land thing
