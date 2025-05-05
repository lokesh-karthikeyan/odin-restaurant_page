import burgerImage from "../../images/burger.jpg";
import frenchFriesImage from "../../images/french-fries.jpg";
import pizzaImage from "../../images/pizza.jpg";
import foodItem from "./makeFood.js";

const loadSpicyFoodContent = () => {
  const container = document.createElement("div");
  const hotFoods = createHotFoods();

  container.classList.add("container", "menu");

  container.appendChild(hotFoods);

  return container;
};

const createHotFoods = () => {
  let hotFoods = document.createElement("div");
  let foodTypeTitle = document.createElement("h2");
  let horizontalLine = document.createElement("hr");
  const menuItems = createMenuItems();

  hotFoods.classList.add("hot-foods", "food");
  foodTypeTitle.classList.add("hot-foods__title", "food-title");
  horizontalLine.classList.add("line");
  foodTypeTitle.textContent = "Hot & Spicy";

  hotFoods.appendChild(foodTypeTitle);
  hotFoods.appendChild(horizontalLine);
  hotFoods.appendChild(menuItems);

  return hotFoods;
};

const createMenuItems = () => {
  const menuItemContainer = document.createElement("div");
  const burger = foodItem(
    "Burger",
    burgerImage,
    "A burger with tomato, lettuce & cheese toppings",
  );
  const frenchFries = foodItem(
    "French Fries",
    frenchFriesImage,
    "Spicy and Salty french fries",
  );
  const pizza = foodItem("Pizza", pizzaImage, "A Cheesy pizaa");

  menuItemContainer.classList.add("hot-foods__type", "food-type");
  menuItemContainer.appendChild(burger);
  menuItemContainer.appendChild(frenchFries);
  menuItemContainer.appendChild(pizza);

  return menuItemContainer;
};

export { loadSpicyFoodContent };
