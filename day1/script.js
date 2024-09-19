// let key = document.getElementsByTagName("h2");
// // key.addEventListner("click", () => {});

// for (let i = 0; i < key.length; i++) {
//   key[i].addEventListener("click", () => {
//     if (key[i].nextElementSibling.style.display === "none")
//       key[i].nextElementSibling.style.display = "block";
//     else {
//       for (let j = 0; j < key.length; j++) {
//         if (i != j && key[j].nextElementSibling.style.display === "none") {
//           key[j].nextElementSibling.style.display = "block";
//         }
//       }
//       key[i].nextElementSibling.style.display = "none";
//     }
//   });
// }

// console.log(key)


const anchor = document.querySelector('a');

const dynamicInput = document.getElementById('dynamicInput');
const existingInput = document.getElementById('existingInput');


let count = 1;
anchor.addEventListener('click',(e)=>{
    e.preventDefault();
    if(count <6){
        let clone = existingInput.cloneNode(true);
        anchor.insertAdjacentElement("beforebegin",clone);
    }
    else{
        alert('reached limit')
    }
    count++;
})


