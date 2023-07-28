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

//CURRENCY CHANGE (HEADER)
let currencyDropdown = document.getElementById("currency-dropdown");
let currencySymbol = document.querySelector("#outputCurrency");
let pageCurrency = document.querySelector(".pageCurrency");

currencyDropdown.addEventListener("change", function () {
  let selectedCurrency = currencyDropdown.value;

  // HEADER CURRENCY
  currencySymbol.textContent = selectedCurrency;
  // MAIN PAGE CURRENCY
  pageCurrency.textContent = selectedCurrency;
});

//CURRENCY CHANGE (MAIN PAGE)
