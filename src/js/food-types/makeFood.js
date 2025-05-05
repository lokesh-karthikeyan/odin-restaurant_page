const create = (foodName, foodPhoto, photoAlt) => {
  const foodItem = document.createElement("div");
  const imageContainer = document.createElement("div");
  const dishName = document.createElement("h3");
  const imageElement = document.createElement("img");

  foodItem.classList.add("menu__item");
  imageContainer.classList.add("menu__item-image");
  dishName.classList.add("menu__item-dish-name");

  imageElement.src = foodPhoto;
  imageElement.alt = photoAlt;
  dishName.textContent = foodName;

  imageContainer.appendChild(imageElement);
  foodItem.appendChild(imageContainer);
  foodItem.appendChild(dishName);

  return foodItem;
};

export default create;
