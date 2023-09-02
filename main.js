const body = document.querySelector(".body");
const num = document.querySelector(".num")

const activeBody = document.querySelector(".body.active");



body.onclick = changeColor;

function changeColor() {
  body.classList.toggle("active");
  let x = String(Math.round(Math.random() * 10));
  num.textContent = x;
}

if (body.style.background == 'red') {
  console.log(0)
} else {
  console.log(1)
}