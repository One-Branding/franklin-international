export default function mainSwiper() {
  window.addEventListener("load", () => {
    $(".slider-main_component").each(function (index) {
      const swiper = new Swiper($(this).find(".swiper")[0], {
        speed: 300,
        loop: true,
        autoHeight: false,
        centeredSlides: false,
        freeMode: false,
        slideToClickedSlide: false,
        slidesPerView: 1.125,
        spaceBetween: "8%",
        rewind: false,
        mousewheel: {
          forceToAxis: true,
        },
        breakpoints: {
          // mobile landscape
          480: {
            slidesPerView: 2,
            spaceBetween: "4%",
          },
          // tablet
          768: {
            slidesPerView: 2.5,
            spaceBetween: "4%",
          },
          // desktop
          992: {
            slidesPerView: 3.5,
            spaceBetween: "2%",
          },
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
        navigation: {
          nextEl: $(this).find(".swiper-next")[0],
          prevEl: $(this).find(".swiper-prev")[0],
          disabledClass: "is-disabled",
        },
        slideActiveClass: "is-active",
        slideDuplicateActiveClass: "is-active",
      });
    });
  });
}
