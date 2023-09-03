const body = document.querySelector(".body");
const num = document.querySelector(".num")

const activeBody = document.querySelector(".body.active");



body.onclick = changeColor;

function changeColor() {
    //   body.classList.toggle("active");
    let x = String(Math.round(Math.random() * 10));
    num.textContent = x;

    if (x % 2 === 0) {
        body.classList.add("active");
    } else {
        body.classList.remove("active");
    }
}