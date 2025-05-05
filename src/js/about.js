const loadAboutPage = function () {
  const mainContainer = document.getElementById("content");
  const aboutContent = makeWhoWeAreContainer();
  const contactContent = makeContactContainer();

  mainContainer.appendChild(aboutContent);
  mainContainer.appendChild(contactContent);

  return mainContainer;
};

const makeWhoWeAreContainer = () => {
  let container = document.createElement("div");
  let whoWeAreContainer = document.createElement("div");
  let aboutTitle = document.createElement("h2");
  let line = document.createElement("hr");
  let paragraph = document.createElement("p");

  paragraph.textContent =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente officiis libero deleniti voluptas ipsa, ea illo voluptatibus quibusdam hic sit earum nam repudiandae sequi laudantium molestiae eveniet amet modi consequatur! Fuga pariatur eveniet rem temporibus odio maxime ipsa odit quo.";
  aboutTitle.textContent = "Who we are?";

  container.classList.add("container", "about");
  whoWeAreContainer.classList.add("about__who-we-are");
  paragraph.classList.add("about__body");
  line.classList.add("line");
  aboutTitle.classList.add("about__title");

  whoWeAreContainer.appendChild(aboutTitle);
  whoWeAreContainer.appendChild(line);
  whoWeAreContainer.appendChild(paragraph);
  container.appendChild(whoWeAreContainer);

  return container;
};

const makeContactContainer = () => {
  let container = document.createElement("div");
  let aboutTitle = document.createElement("h2");
  let aboutContact = document.createElement("div");
  let address = document.createElement("div");
  let contact = document.createElement("div");
  let addressNumber = document.createElement("p");
  let addressArea = document.createElement("p");
  let addressLand = document.createElement("p");
  let addressZip = document.createElement("p");
  let contactFb = document.createElement("p");
  let contactInstagram = document.createElement("p");
  let contactX = document.createElement("p");

  aboutTitle.textContent = "Contact Us";
  addressNumber.textContent = "No: 12345";
  addressArea.textContent = "Imaginary street, Wonderland";
  addressLand.textContent = "Utopia";
  addressZip.textContent = "98-765-34";
  contactFb.textContent = "Facebook";
  contactInstagram.textContent = "Instagram";
  contactX.textContent = "X";

  container.classList.add("container", "about");
  aboutTitle.classList.add("about__title");
  aboutContact.classList.add("about__contact");
  address.classList.add("address");
  contact.classList.add("contact");
  addressNumber.classList.add("address__content");
  addressArea.classList.add("address__content");
  addressLand.classList.add("address__content");
  addressZip.classList.add("address__content");
  contactFb.classList.add("address__content");
  contactInstagram.classList.add("address__content");
  contactX.classList.add("address__content");

  contact.appendChild(contactFb);
  contact.appendChild(contactInstagram);
  contact.appendChild(contactX);
  address.appendChild(addressNumber);
  address.appendChild(addressArea);
  address.appendChild(addressLand);
  address.appendChild(addressZip);
  aboutContact.appendChild(address);
  aboutContact.appendChild(contact);
  container.appendChild(aboutTitle);
  container.appendChild(aboutContact);

  return container;
};

export { loadAboutPage };
