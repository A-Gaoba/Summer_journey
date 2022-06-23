const color = document.getElementById("color");
const btn = document.getElementById("btn");
const divColor = document.getElementById("container");

const arr = "1234567890abcdef";

btn.addEventListener("click", function hexcolor() {
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    Colors = arr.charAt(Math.random() * 16);
    randomColor += Colors;
  }
  color.textContent = randomColor;
  divColor.style.background = randomColor;
});
