// nav
// create html reference variables for nav
const topLinks = document.getElementById("top-links");
const navBtn = document.getElementById("mobile-menu-btn");
const header = document.getElementById("top");
const about = document.getElementById("about");
// when btn is clicked toplinks will appear
// add event listener to btn make function that makes top links appear
navBtn.addEventListener("click", function () {
  topLinks.classList.toggle("hide-links");
});
// event listener for clicking the link
topLinks.addEventListener("click", function () {
  topLinks.classList.add("hide-links");
});
// or clicking top
// header.addEventListener("click", function () {
//   topLinks.classList.add("hide-links");
// });
// or clicking about
about.addEventListener("click", function () {
  topLinks.classList.add("hide-links");
});

// footer
// API for Whose Land thing
