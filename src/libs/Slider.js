import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    spaceBetween: 20,
    autoplay: {
      delay: 2500,
      loop: true,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: { slidesPerView: 1 },
      1024: { slidesPerView: 2 },
      1280: { slidesPerView: 3 },
    },

    centeredSlides: true,
    modules: [Navigation, Pagination, Autoplay],
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
