export default function initAnimaScroll() {
  const sections = document.querySelectorAll("section");
  const halfWindow = window.innerHeight * 0.6;

  function handleScroll() {
    sections.forEach((item) => {
      const scrollY = item.getBoundingClientRect().top;
      const halfTop = scrollY - halfWindow < 0;

      if (halfTop) {
        item.classList.add("show");
      } else {
        item.classList.remove("show");
      }
    });
  }
  handleScroll();

  window.addEventListener("scroll", handleScroll);
}
