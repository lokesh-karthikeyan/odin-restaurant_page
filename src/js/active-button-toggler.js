const activeButtonToggler = (element) => {
  const elementContext = element.textContent.toLowerCase();
  const homeButton = document.querySelector(".button.nav__home");
  const menuButton = document.querySelector(".button.nav__menu");
  const aboutButton = document.querySelector(".button.nav__about");

  if (elementContext === "home") {
    homeButton.classList.add("active");
    menuButton.classList.remove("active");
    aboutButton.classList.remove("active");
  } else if (elementContext === "menu") {
    homeButton.classList.remove("active");
    menuButton.classList.add("active");
    aboutButton.classList.remove("active");
  } else if (elementContext === "about") {
    homeButton.classList.remove("active");
    menuButton.classList.remove("active");
    aboutButton.classList.add("active");
  }
};

export default activeButtonToggler;
