// MODAL

// variables for modal, overlay, btn, and btn close
const modal = document.querySelectorAll(".modal");
const overlay = document.querySelectorAll(".overlay");
const openModalBtn = document.querySelectorAll(".open-modal");
const closeModalBtn = document.querySelectorAll(".btn-close");
const body = document.body;

// open modal
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  body.classList.add("fixed");
};

// event listener for open modal whne btn is clicked
openModalBtn.addEventListener("click", openModal);

// function for closing modal
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  body.classList.remove("fixed");
};

// event listener for clicking close btn, clicking overlay, or pressing Esc
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
