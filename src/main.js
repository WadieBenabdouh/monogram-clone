//BURGER MENU
let burgerButton = document.querySelector("#menu-toggle");
let mobileNavigation = document.querySelector("#mobile-nav");
let closeNav = document.querySelector("#close-nav");

burgerButton.onclick = () => {
  mobileNavigation.classList.toggle("active");
};

closeNav.onclick = () => {
  mobileNavigation.classList.remove("active");
};
