// Setup navbar
const navBar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
const navBtn = document.getElementById("nav-btn");
// show nav
navBtn.addEventListener("click", () => {
  navBar.classList.add("showNav");
});
//close nav
navClose.addEventListener("click", () => {
  navBar.classList.remove("showNav");
});
