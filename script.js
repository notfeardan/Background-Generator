const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const button = document.querySelector("button");

const addGradient = () => {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  css.textContent = `${body.style.background};`;
};

const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;

const setRandomColors = () => {
  color1.value = getRandomColor();
  color2.value = getRandomColor();
  addGradient();
};

color1.addEventListener("input", addGradient);
color2.addEventListener("input", addGradient);
button.addEventListener("click", setRandomColors);
