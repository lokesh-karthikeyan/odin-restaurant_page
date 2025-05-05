import strawberryRollImage from "../../images/strawberry_roll.jpg";
import iceCreamSundaeImage from "../../images/ice_cream_sundae.jpg";
import macaronsImage from "../../images/macarons.jpg";
import foodItem from "./makeFood.js";

const loadDessertsContent = () => {
  const container = document.createElement("div");
  const desserts = createDesserts();

  container.classList.add("container", "menu");

  container.appendChild(desserts);

  return container;
};

const createDesserts = () => {
  let desserts = document.createElement("div");
  let foodTypeTitle = document.createElement("h2");
  let horizontalLine = document.createElement("hr");
  const menuItems = createMenuItems();

  desserts.classList.add("desserts", "food");
  foodTypeTitle.classList.add("desserts__title", "food-title");
  horizontalLine.classList.add("line");
  foodTypeTitle.textContent = "Desserts";

  desserts.appendChild(foodTypeTitle);
  desserts.appendChild(horizontalLine);
  desserts.appendChild(menuItems);

  return desserts;
};

const createMenuItems = () => {
  const menuItemContainer = document.createElement("div");
  const strawberryRoll = foodItem(
    "Strawberry Roll",
    strawberryRollImage,
    "Creamy and soft strawberry roll",
  );
  const iceCreamSundae = foodItem(
    "Ice-cream Sundae",
    iceCreamSundaeImage,
    "Chillest & sweetest ice cream",
  );
  const macarons = foodItem(
    "Macarons",
    macaronsImage,
    "French almond cookies with flavored fillings",
  );

  menuItemContainer.classList.add("desserts__type", "food-type");
  menuItemContainer.appendChild(strawberryRoll);
  menuItemContainer.appendChild(iceCreamSundae);
  menuItemContainer.appendChild(macarons);

  return menuItemContainer;
};

export { loadDessertsContent };
