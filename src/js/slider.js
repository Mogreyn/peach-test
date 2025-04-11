import Splide from "@splidejs/splide";

new Splide(".slider", {
  type: "loop",
  perPage: 1,
  perMove: 1,
  pagination: true,
  arrows: true,
  autoplay: true,
  interval: 5000,
  classes: {
    pagination: "splide__pagination slider__pagination",
    page: "splide__pagination__page slider__page",
  },
  breakpoints: {
    768: {
      pagination: false,
      arrows: false,
    },
  },
}).mount();
