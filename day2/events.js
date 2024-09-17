// const listItems = document.querySelectorAll("li");

// listItems.forEach((listItem) => {
//     listItem.addEventListener('click', () => {
//         console.log(listItem.innerText)
//     })
// })

// const list = document.querySelector("ul:nth-child(2)");

// list.addEventListener("click", (event) => {
//   if (event.target.nodeName === "LI") {
//     console.log(event.target.innerText);
//   } else {
//     alert("Chain se sona hai to jaag jao!");
//   }
// });


const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const grandChild = document.querySelector(".grandChild");
const button = document.querySelector("button")

parent.addEventListener('click', () => console.log("I am Parent"), true)
child.addEventListener('click', (e) => {e.stopPropagation(); console.log("I am Child"); }, true)
grandChild.addEventListener('click', () => console.log("I am GrandChild"), true)
button.addEventListener('click', () => console.log("I am Button"))



