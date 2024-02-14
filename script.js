// nav
// create html reference variables for nav
const topLinks = document.getElementById("top-links");
const navBtn = document.getElementById("mobile-menu-btn");
// variable for mobile-menu-img
const hamburger = document.getElementById("hamburger");
//  for x img
const x = document.getElementById("x");
// when btn is clicked toplinks will appear
// add event listener to btn make function that makes top links appear
navBtn.addEventListener("click", function () {
  topLinks.classList.toggle("hide-links");
  // add event listener that will listen for navBtn click- toggle between hamburger mobile-menu-img and x img
  x.classList.toggle("hidden");
  hamburger.classList.toggle("hidden");
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
const whoseLandBtn = document.getElementById("whose-land-btn");
const changeText = document.getElementById("change-text");
const changeYou = document.getElementById("change-you");
const stJohns = "47.564940,-52.709310";
const territoryIframe = document.getElementById("territory-iframe");

// use fetch to send a request for the
function getLand() {
  // getting users geolocation
  if (navigator.geolocation) {
    // variable for position
    const position = navigator.geolocation.getCurrentPosition(showPosition);
    // variable for url
    const apiUrl = `https://native-land.ca/api/embed/embed.html?maps=territories&position=${position}`;
    // change src attribute on iframe
    territoryIframe.setAttribute("src", apiUrl);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
  fetch(apiUrl).then(function (response) {
    console.log(apiUrl);
    return response.json();
    // create the variables that it will change
  });
}
getLand(stJohns);
console.log(getLand);

// add event listener to change the change-text and the change-you when btn is clicked
whoseLandBtn.addEventListener("click", function () {
  changeText.innerHTML = "are you";
  changeYou.innerHTML = "You";
});
