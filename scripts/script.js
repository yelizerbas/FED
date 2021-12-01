// JavaScript Document
// const carousel = document.querySelector("section:nth-of-type(6)");
// const carouselButtons = document.querySelectorAll("section:nth-of-type(6) ul li button");

// function carouselScroll () {
//     const carouselWidth = document.querySelector("section:nth-of-type(6)").clientWidth
//     // for (){
//     // carousel.scrollTo(carouselWidth*0, 0);
//     // }
//     console.log(carouselButtons);
    
    
// }

// for (let i = 0; i<carouselButtons.length; i++) {
//     carouselButtons[i].addEventListener("click", carouselScroll);
// }

var menuButton = document.querySelector("nav button");
var crossButton = document.querySelector("nav ul button");

function onMenu(event) {
  deNav = event.target.parentNode;
  deNav.classList.add("showMenu");
}

function offMenu() {
  deNav.classList.remove("showMenu");
}

menuButton.addEventListener("click", onMenu);
crossButton.addEventListener("click", offMenu);