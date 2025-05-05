import { loadSpicyFoodContent } from "./food-types/spicy.js";
import { loadcoolDrinksContent } from "./food-types/coolDrinks.js";
import { loadDessertsContent } from "./food-types/desserts.js";

const menuItems = () => {
  const mainContainer = document.getElementById("content");
  const spicyFoods = loadSpicyFoodContent();
  const coolDrinks = loadcoolDrinksContent();
  const desserts = loadDessertsContent();

  mainContainer.appendChild(spicyFoods);
  mainContainer.appendChild(coolDrinks);
  mainContainer.appendChild(desserts);
};

export default menuItems;
