export default function initUpToTop() {
  const upTop = document.querySelector(".upToTop");

  function handleScroll() {
    this.scrollY >= 60
      ? upTop.classList.add("show")
      : upTop.classList.remove("show");
  }

  window.addEventListener("scroll", handleScroll);
}
