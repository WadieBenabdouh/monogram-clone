//----------BURGER MENU----------//
let burgerButton = document.querySelector("#menu-toggle");
let mobileNavigation = document.querySelector("#mobile-nav");
let closeNav = document.querySelector("#close-nav");

burgerButton.onclick = () => {
  mobileNavigation.classList.toggle("active");
};

closeNav.onclick = () => {
  mobileNavigation.classList.remove("active");
};

//----------CURRENCY CHANGE----------//
let currencyDropdown = document.getElementById("currency-dropdown");
let currencySymbol = document.querySelector("#outputCurrency");
let pageCurrency = document.querySelectorAll(".pageCurrency");

currencyDropdown.addEventListener("change", function () {
  let selectedCurrency = currencyDropdown.value;
  // HEADER CURRENCY
  currencySymbol.textContent = selectedCurrency;
  // MAIN PAGE CURRENCY
  pageCurrency.forEach((element) => {
    element.textContent = selectedCurrency;
  });
});

//----------FOOTER EMAIL----------//
let emailInput = document.getElementById("subscribeInput");
let submitBtn = document.getElementById("submitBtn");

emailInput.addEventListener("input", function () {
  if (emailInput.value.length > 0) {
    submitBtn.classList.add("active");
  } else {
    submitBtn.classList.remove("active");
  }
});
