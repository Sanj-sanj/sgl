import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: true,
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
