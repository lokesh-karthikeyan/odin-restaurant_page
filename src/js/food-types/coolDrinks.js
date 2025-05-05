import lemonadeImage from "../../images/lemonade.jpg";
import mangoFizzImage from "../../images/mango_fizz.jpg";
import orangeJuiceImage from "../../images/orange_juice.jpg";
import foodItem from "./makeFood.js";

const loadcoolDrinksContent = () => {
  const container = document.createElement("div");
  const coolDrinks = createCoolDrinks();

  container.classList.add("container", "menu");

  container.appendChild(coolDrinks);

  return container;
};

const createCoolDrinks = () => {
  let coolDrinks = document.createElement("div");
  let foodTypeTitle = document.createElement("h2");
  let horizontalLine = document.createElement("hr");
  const menuItems = createMenuItems();

  coolDrinks.classList.add("cool-drinks", "food");
  foodTypeTitle.classList.add("cool-drinks__title", "food-title");
  horizontalLine.classList.add("line");
  foodTypeTitle.textContent = "Cool Drinks";

  coolDrinks.appendChild(foodTypeTitle);
  coolDrinks.appendChild(horizontalLine);
  coolDrinks.appendChild(menuItems);

  return coolDrinks;
};

const createMenuItems = () => {
  const menuItemContainer = document.createElement("div");
  const lemonade = foodItem(
    "Lemonade",
    lemonadeImage,
    "A glass of refreshing lemonade",
  );
  const mangoFizz = foodItem(
    "Mango Fizz",
    mangoFizzImage,
    "Sweetest mango fizz",
  );
  const orangeJuice = foodItem(
    "Orange Juice",
    orangeJuiceImage,
    "A healthy orange juice",
  );

  menuItemContainer.classList.add("cool-drinks__type", "food-type");
  menuItemContainer.appendChild(lemonade);
  menuItemContainer.appendChild(mangoFizz);
  menuItemContainer.appendChild(orangeJuice);

  return menuItemContainer;
};

export { loadcoolDrinksContent };
