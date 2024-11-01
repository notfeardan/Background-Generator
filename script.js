var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function addGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}

function getRandomColor() {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
  );
}

function setRandomColors() {
  color1.value = getRandomColor();
  color2.value = getRandomColor();
  addGradient();
}

color1.addEventListener("input", addGradient);
color2.addEventListener("input", addGradient);
button.addEventListener("click", setRandomColors);
