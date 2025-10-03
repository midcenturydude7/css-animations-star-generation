import { random, range } from "lodash";

const btn = document.querySelector(".particleButton");
const starLayer = document.querySelector(".starLayer");

btn.addEventListener("click", () => {
  range(10).forEach(() => {
    const star = document.createElement("div");
    star.classList.add("star");
    star.innerText = "⭐";

    star.style.top = `${random(0, 100)}%`;
    star.style.left = `${random(0, 100)}%`;

    starLayer.appendChild(star);
  });
});
