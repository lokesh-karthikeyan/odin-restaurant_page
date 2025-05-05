import dinerImage from "../images/diner.jpg";
import activeButtonToggler from "./active-button-toggler.js";

const loadHomePage = function () {
  const mainContainer = document.getElementById("content");
  const templateContent = document.getElementById("home");
  const homeContent = templateContent.content.cloneNode(true);
  const imageElement = homeContent.querySelector(".image");
  imageElement.src = dinerImage;

  const homeButton = document.querySelector(".nav__home");
  activeButtonToggler(homeButton);
  mainContainer.appendChild(homeContent);
};

export { loadHomePage };
