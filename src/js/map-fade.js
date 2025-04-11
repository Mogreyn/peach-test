const mainNode = document.querySelector("#map");
const toggleNode = document.querySelector("#map-dropdown");

function callback(mutationsList, observer) {
  mutationsList.forEach((mutation) => {
    if (mutation.attributeName === "class") {
      if (mutation.target.classList.value.includes("show")) {
        mainNode.classList.add("map--opened");
      } else {
        mainNode.classList.remove("map--opened");
      }
    }
  });
}

const mutationObserver = new MutationObserver(callback);

mutationObserver.observe(toggleNode, { attributes: true });
