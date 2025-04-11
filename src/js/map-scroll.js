const map = document.querySelector("#map-wrapper");
const btns = [...document.querySelectorAll(".map__tabs-button")];

function mapScroll(btn, x) {
  btn.addEventListener("click", () => {
    map.scrollTo({
      top: 0,
      left: x,
      behavior: "smooth",
    });
  });
}

mapScroll(btns[0], 0);
mapScroll(btns[1], 0);
mapScroll(btns[2], 0);
mapScroll(btns[3], 0);
mapScroll(btns[4], 0);
mapScroll(btns[5], 70);
mapScroll(btns[6], 150);
mapScroll(btns[7], 300);
mapScroll(btns[8], 862);
