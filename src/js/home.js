import dinerImage from "../images/diner.jpg";

const loadHomePage = function () {
  const mainContainer = document.getElementById("content");
  const homeContent = makeOuterContainer();

  mainContainer.appendChild(homeContent);
};

const makeOuterContainer = () => {
  const container = document.createElement("div");
  container.classList.add("container", "home");

  const leftContainer = makeLeftContainer();
  const rightContainer = makeRightContainer();

  container.appendChild(leftContainer);
  container.appendChild(rightContainer);

  return container;
};

const makeLeftContainer = () => {
  const leftContainer = document.createElement("div");
  leftContainer.classList.add("content__left");

  const headerSecondLevel = document.createElement("h2");
  headerSecondLevel.classList.add("content__title");
  headerSecondLevel.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

  const paragraph = document.createElement("p");
  paragraph.classList.add("content__body");
  paragraph.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque velit nam amet, beatae, cumque cupiditate optio esse earum nostrum quae doloremque sequi! Pariatur reprehenderit totam quo dignissimos porro voluptates alias";

  leftContainer.appendChild(headerSecondLevel);
  leftContainer.appendChild(paragraph);

  return leftContainer;
};

const makeRightContainer = () => {
  const rightContainer = document.createElement("div");
  rightContainer.classList.add("content__right");

  const imageElement = document.createElement("img");
  imageElement.src = dinerImage;
  imageElement.alt = "A diner";

  rightContainer.appendChild(imageElement);

  return rightContainer;
};

export { loadHomePage };
