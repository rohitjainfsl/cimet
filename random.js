const colorInput = document.getElementById("colorInput");
const button = document.querySelector("button");

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let r = getRandomArbitrary(0, 256);
let g = getRandomArbitrary(0, 256);
let b = getRandomArbitrary(0, 256);
let randomColor= `rgb(${r},${g},${b})`;
document.body.style.backgroundColor=  randomColor;

colorInput.value = randomColor;

