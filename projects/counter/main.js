const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const decreasse = document.getElementById("decreasse");
const counting = document.getElementById("counting");

let count = 0;

increase.addEventListener("click", function () {
  count += 1;
  counting.innerText = count;
});
decreasse.addEventListener("click", function () {
  count -= 1;
  counting.innerText = count;
});

reset.addEventListener("click", function () {
  count = 0;
  counting.innerText = count;
});
