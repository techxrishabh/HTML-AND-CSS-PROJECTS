// ********** set date ************
// select span

// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("ham-burger");
const link = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
  link.classList.toggle("open-nav-links");
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    links.classList.remove("show-links");

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    //
    let position = element.offsetTop - 62;

    window.scrollTo({
      left: 0,
      // top: element.offsetTop,
      top: position,
      behavior: "smooth",
    });
  });
});
