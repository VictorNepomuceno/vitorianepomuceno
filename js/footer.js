export default function initFooterScroll() {
  const footer = document.querySelector(".footer__info");
  const upTop = document.querySelector(".upToTop");

  function footerScroll() {
    const topY = footer.getBoundingClientRect().top + window.scrollY / 1.2;
    if (window.scrollY >= topY) {
      upTop.classList.add("active");
    } else {
      upTop.classList.remove("active");
    }
  }

  window.addEventListener("scroll", footerScroll);
}
