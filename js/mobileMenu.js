export default function initMobileMenu() {
  const menuMobile = document.querySelector(".nav__list-container");
  const toggleMenu = document.querySelector(".toggle__menu");
  const closeMenu = document.querySelector(".close__menu");

  document.onclick = function (e) {
    if (!menuMobile.contains(e.target) && !toggleMenu.contains(e.target)) {
      menuMobile.classList.remove("show");
    }
  };

  if (toggleMenu) {
    toggleMenu.addEventListener("click", () => {
      menuMobile.classList.add("show");
    });
  }

  if (closeMenu) {
    closeMenu.addEventListener("click", () => {
      menuMobile.classList.remove("show");
    });
  }

  const links = document.querySelectorAll(".nav__link");

  function handleClick() {
    menuMobile.classList.remove("show");
  }

  links.forEach((item) => {
    item.addEventListener("click", handleClick);
  });
}
