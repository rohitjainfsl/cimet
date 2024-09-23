import colors from "./colors.js";
const buttonsDiv = document.querySelector("#buttons");
const wrapper = document.querySelector("#wrapper");
const circles = [];
const removedCircles = [];
let count = 0;

wrapper.addEventListener("click", init);

buttonsDiv.addEventListener("click", buttonTasks);

function buttonTasks(e) {
  if (e.target.nodeName !== "BUTTON") return;
  console.log(e.target.innerText);
}

function init(e) {
  if (e.target.id === "buttons") return;
  const circleObject = createCircle(e);
  renderCircle(circleObject);
}

function createCircle(e) {
  const backgroundColor = getBackgroundColor();
  const coordinates = [e.clientX, e.clientY];
  const circleObject = { backgroundColor, coordinates };
  circles.push(circleObject);
  return circleObject;
}

function renderCircle(obj) {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  applyStyles(circle, obj.coordinates);
  wrapper.append(circle);
}

function getBackgroundColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function applyStyles(circle, [...params]) {
  circle.style.backgroundColor = getBackgroundColor();
  circle.style.left = params[0] - 7.5 + "px";
  circle.style.top = params[1] - 7.5 + "px";
}

function circlesExist() {
  return circles.length > 0;
}
