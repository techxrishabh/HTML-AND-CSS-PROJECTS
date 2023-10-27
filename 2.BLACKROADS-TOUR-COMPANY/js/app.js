// ********** set date ************
// select span

// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("ham-burger");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("open-nav-links");
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    links.classList.remove("open-nav-links");

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

// **** ----------SMOOTH-------------SCROLL------------ ****

const homeSection = document.querySelector(".home-link");
const aboutSection = document.querySelector(".about-link");
const servicesSection = document.querySelector(".services-link");
const featuredSection = document.querySelector(".featured-link");
const gallerySection = document.querySelector(".gallery-link");

document.querySelector(".home-link").addEventListener("click", () => {
  heroSection.scrollIntoView({behavior: "smooth"});
});
