// MODAL

// variables for open btn, and btn close
const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.querySelectorAll(".btn-close");

// open modal
const openModal = function () {
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("overlay");
  const body = document.body;
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  body.classList.add("fixed");
};

// event listener for open modal when btn is clicked
openModalBtn.addEventListener("click", openModal);

// function for closing modal
const closeModal = function () {
  const body = document.body;
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  body.classList.remove("fixed");
};

// event listener for clicking close btn, clicking overlay, or pressing Esc

closeModalBtn.forEach((element) => {
  element.addEventListener("click", closeModal);
});

overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
