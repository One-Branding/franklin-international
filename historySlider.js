// wait for DOM and scripts to load
window.addEventListener("load", () => {
  if (window.innerWidth > 768) {
    $(".slider-history_component").each(function (index) {
      const progressBars = document.querySelectorAll(
        "[data-el='progress-bar-inner']"
      );
      // Turn Progress bars to an Array
      const progressBarsArray = Array.from(progressBars);
      const swiper = new Swiper($(this).find(".swiper")[0], {
        speed: 600,
        loop: false,
        autoHeight: false,
        centeredSlides: true,
        followFinger: true,
        freeMode: false,
        slideToClickedSlide: true,
        slidesPerView: "auto",
        rewind: false,
        autoplay: {
          delay: 8000,
          disableOnInteraction: false,
        },
        mousewheel: {
          forceToAxis: true,
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
        on: {
          autoplayTimeLeft(s, time, progress) {
            progressBarsArray.forEach((progressBar) => {
              progressBar.style.width = "0%";
              // only set this style if this bar is inside a .swiper-slide has the class of .is-active
              if (
                progressBar
                  .closest(".swiper-slide")
                  .classList.contains("is-active")
              ) {
                progressBar.style.width = 100 - 100 * progress + "%";
              }
              return;
            });
            //progressBars.style.width = 100 - 100 * progress + "%";
          },
          init: function () {
            const sliderButton = document.querySelector(
              "[data-slider-element='button']"
            );
            const sliderButtonContent = sliderButton.querySelector(
              "[slider-button-text]"
            );
            const playButtonContent = document.querySelector(
              "[data-element='play-slideshow-text']"
            ).textContent;
            const pauseButtonContent = document.querySelector(
              "[data-element='pause-slideshow-text']"
            ).textContent;
            function swiperStop() {
              swiper.autoplay.stop();
              sliderButton.setAttribute("data-state", "start");
              sliderButtonContent.textContent = `${playButtonContent}`;
            }
            function swiperStart() {
              swiper.autoplay.start();
              sliderButton.setAttribute("data-state", "pause");
              sliderButtonContent.textContent = `${pauseButtonContent}`;
            }
            sliderButton.addEventListener("click", () => {
              if (sliderButton.getAttribute("data-state") === "pause") {
                swiperStop();
              } else if (sliderButton.getAttribute("data-state") === "start") {
                swiperStart();
              }
            });
          },
        },
      });
    });
  } else {
    // use a script tag or an external JS file
    gsap.registerPlugin(ScrollTrigger);
    const historySlides = Array.from(
      document.querySelectorAll(".swiper-slide.is-slider-history")
    );
    historySlides.forEach((slide, index) => {
      const ANIMATION_DURATION = 0.3;
      let historySlideTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: slide,
          toggleActions: "play reverse play reverse",
          start: "top center",
          end: "bottom center",
          ease: "ease",
          //markers: true,
        },
      });

      historySlideTimeline.to(
        slide.querySelector(".slider-history_progress-bar-node"),
        {
          backgroundColor: "var(--swatch--navy, #004c77)",
          duration: ANIMATION_DURATION,
        },
        0
      );
      historySlideTimeline.to(
        slide.querySelector(".slider-history_progress-bar"),
        {
          backgroundColor: "var(--swatch--navy, #004c77)",
          duration: ANIMATION_DURATION,
        },
        "<"
      );
      historySlideTimeline.to(
        slide,
        {
          opacity: "1",
          duration: ANIMATION_DURATION,
        },
        "<"
      );
    });
  }
});
