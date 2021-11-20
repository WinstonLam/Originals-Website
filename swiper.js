// import Swiper JS
import Swiper from "swiper";
// import Swiper styles
import "swiper/css";

  var swiper = new Swiper(".swiper-container", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });

function reinitSwiper(swiper) {
  setTimeout(function () {
   swiper.reInit();
  }, 500);
}
