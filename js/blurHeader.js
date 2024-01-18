export default function initBlurHeader() {
  function blurHeader() {
    const header = document.querySelector(".header__nav");

    this.scrollY >= 50
      ? header.classList.add("blur__header")
      : header.classList.remove("blur__header");
  }

  window.addEventListener("scroll", blurHeader);
}
