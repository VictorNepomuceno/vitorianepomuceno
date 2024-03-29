import initAnimaScroll from "./animaScroll.js";
import initBlurHeader from "./blurHeader.js";
import initFooterScroll from "./footer.js";
import initMobileMenu from "./mobileMenu.js";
import initUpToTop from "./upToTop.js";

initMobileMenu();
initBlurHeader();
initUpToTop();
initAnimaScroll();
initFooterScroll();

const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  grabCursor: true,
  //   effect: "cards",
  centeredSlides: true,
  keyboard: true,
});
// swiper.changeDirection("vertical");
