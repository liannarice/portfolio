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

function getLocation() {
  // getting users geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      getLand().then(function (response) {
        console.log(response);
      })
    );
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
// geolocation is a function built in the browser
// geoPosition is a new parameter that we are using as a variable
// note: async means asynchronous
async function getLand(geoPosition) {
  // variable for position
  const lat = geoPosition.coords.latitude;
  const long = geoPosition.coords.longitude;
  // variable for url
  const apiUrl = `https://native-land.ca/api/embed/embed.html?maps=territories&position=${lat},${long}`;
  console.log(apiUrl);
  // console.log(position);
  // change src attribute on iframe
  territoryIframe.setAttribute("src", apiUrl);

  // create variable for fetch url territory name
  const fetchUrl = `https://native-land.ca/api/index.php?maps=territories&position=${lat},${long}`;
  // use fetch to send a request. await makes it wait for the other things first
  const response = await fetch(fetchUrl);
  const data = await response.json();
  return data;
}
// add event listener to change the change-text and the change-you when btn is clicked
whoseLandBtn.addEventListener("click", function () {
  changeText.innerHTML = "are you";
  changeYou.innerHTML = "You";
  getLocation();
});
