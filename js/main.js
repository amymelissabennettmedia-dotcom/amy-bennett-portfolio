/* 
    Portfolio interaction script adapted from a course starter template.
    Mobile navigation behavior, header scroll interactions,
    and menu state handling have been refined and simplified
    to support the final portfolio experience.
*/

function toggleMobileNav() {
  document.getElementById("nav").classList.toggle("show-nav-mob");
  document.body.classList.toggle("menu-open");
}

function closeMobileNav() {
  document.getElementById("nav").classList.remove("show-nav-mob");
  document.body.classList.remove("menu-open");
  document.getElementById("checkbox").checked = false;
}


// Header change on scroll
const className = "header-solid";
const scrollTrigger = 60;

// Applies solid header styling after initial hero scroll threshold
window.onscroll = function() {
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.querySelector("header").classList.add(className);
    document.body.classList.add("scrolled");
  } else {
    document.querySelector("header").classList.remove(className);
    document.body.classList.remove("scrolled");
  }
};
