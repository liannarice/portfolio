// nav
// create html reference variables for nav
const topLinks = document.getElementById("top-links");
const navBtn = document.getElementById("mobile-menu-btn");
// const navImg = document.getElementById("mobile-menu-img");
// when btn is clicked toplinks will appear
// add event listener to btn make function that makes top links appear
navBtn.addEventListener("click", function () {
  topLinks.classList.toggle("hide-links");
});

// click outside of nav menu or click the toplinks will add class hide-links
document.addEventListener("click", function (event) {
  // use ! for not and use if sentences
  if (
    !event.target.classList.contains("top-links") &&
    !event.target.classList.contains("mobile-menu-btn") &&
    !event.target.classList.contains("mobile-menu-img")
  )
    if (!topLinks.classList.contains("hide-links")) {
      // if those are true/not true! then
      topLinks.classList.add("hide-links");
    }
});

// footer
// API for Whose Land thing
