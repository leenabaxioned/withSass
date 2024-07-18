/* Author: */
//Ontoggle hamburger function starts here------------------------------------
var menu = document.querySelector(".nav-menu");
var menuItems = document.querySelectorAll(".nav-link");
var hamburger = document.querySelector(".hamburger");
var closeIcon = document.querySelector(".closeIcon");
var menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);
//Ontoggle hamburger function ends here-----------------------------------------