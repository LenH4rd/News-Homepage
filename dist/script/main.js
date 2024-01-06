let menuButton;
let menu;
let closeButton;

document.querySelector(".menu__btn").onclick = function () {
  menuButton = document.querySelector(".menu__btn").ariaHasPopup;
  menuButton = Boolean(menuButton);

  closeButton = document.querySelector(".close__btn").ariaHasPopup;
  closeButton = Boolean(closeButton);

  if (menuButton === true) {
    document.querySelector(".menu__btn").setAttribute("aria-haspopup", "false");

    menu = document.querySelector("menu").setAttribute("aria-expanded", "true");
    menu = document.querySelector("menu").style.visibility = "visible";

    document.querySelector(".close__btn").setAttribute("aria-haspopup", "true");
  }
};

document.querySelector(".close__btn").onclick = function () {
  if (closeButton == true) {
    document
      .querySelector(".close__btn")
      .setAttribute("aria-haspopup", "false");

    document.querySelector(".menu__btn").setAttribute("aria-haspopup", "true");

    menu = document
      .querySelector("menu")
      .setAttribute("aria-expanded", "false");
    menu = document.querySelector("menu").style.visibility = "hidden";
  }
};
