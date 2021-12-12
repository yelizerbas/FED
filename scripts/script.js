// function hamburgermenu
var menuButton = document.querySelector("nav button");
var crossButton = document.querySelector("nav ul button");
var navElement = document.querySelector("nav");

function onMenu() {
  navElement.classList.add("showMenu");
}

function offMenu() {
  navElement.classList.remove("showMenu");
}

menuButton.addEventListener("click", onMenu);
crossButton.addEventListener("click", offMenu);



// function quantity hoodie
var aantal = 0;
var pElement = document.querySelector("p#hoeveelheid");
var minButton = document.querySelector("button.min");
var plusButton = document.querySelector("button.plus");

function plusAantal(){
  aantal++; 
  pElement.textContent= aantal;
}

function minAantal(){
  if(aantal > 0){
    aantal = aantal - 1;
    pElement.textContent= aantal;
  }
  else{
    pElement.textContent= aantal;
  }
}

if(window.location.href.includes("product.html")) {
  minButton.addEventListener("click", minAantal)
  plusButton.addEventListener("click", plusAantal);
}