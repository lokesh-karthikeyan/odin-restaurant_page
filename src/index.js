import "./css/style.css";
import { loadHomePage } from "./js/home.js";
import loadMenuPage from "./js/menu.js";
import { loadAboutPage } from "./js/about.js";
import activeButton from "./js/active-button-toggler.js";

(function () {
  document.addEventListener("DOMContentLoaded", () => {
    let homeButton = document.querySelector(".nav__home");
    homeButton.click();
  });
})();

(function () {
  let homeButton = document.querySelector(".nav__home");
  homeButton.addEventListener("click", (event) => {
    removeMainElements();
    loadHomePage();
    activeButton(event.target);
  });
})();

(function () {
  let menuButton = document.querySelector(".nav__menu");
  menuButton.addEventListener("click", (event) => {
    removeMainElements();
    loadMenuPage();
    activeButton(event.target);
  });
})();

(function () {
  let aboutButton = document.querySelector(".nav__about");
  aboutButton.addEventListener("click", (event) => {
    removeMainElements();
    loadAboutPage();
    activeButton(event.target);
  });
})();

const removeMainElements = () => {
  let content = document.getElementById("content");

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
};
