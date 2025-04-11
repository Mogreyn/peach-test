import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".about__card", {
  y: 0,
  duration: 1.5,
  opacity: 1,
  scale: 1,
  scrollTrigger: {
    trigger: ".about__card",
    start: 150,
    toggleClass: "about__card--before-enter",
  },
});
