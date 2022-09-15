const btn = document.querySelector(".btn");
let position;
btn.addEventListener("mouseover", function () {
  position ? (position = 0) : (position = 500);
  btn.style.transform = `translate(${position}px,0px)`;
  btn.style.transition = "all 0.3s ease";
});
