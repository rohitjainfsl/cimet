const form = document.querySelector("form");
const board = document.querySelector(".board");

const leaderBoard = [];
const formElements = Array.from(document.forms[0].children);
formElements.pop(); //removing the submit button

form.addEventListener("submit", init);

function init(e) {
  e.preventDefault();
  // const formData = new FormData(form);
  // const playerData = Object.fromEntries(formData);
  // playerData.score = Number(playerData.score);
  // sortData();

  const playerData = {};
  formElements.forEach((elem) => {
    playerData[elem.id] = elem.id === "score" ? Number(elem.value) : elem.value;
  }); //{fname: Rohit, lname: }

  sortData(playerData);
  // leaderBoard.push(playerData);
  resetForm();

  displayData();
}

function resetForm() {
  form.reset(); //submit()
  formElements[0].focus();
}

function displayData() {
  // sortData();

  board.innerHTML = "";
  let displayedData = "";
  leaderBoard.forEach((elem, index) => {
    // const parent = document.createElement("div");
    // parent.addEventListener("click", (e) => handleTasks(e, index));

    // parent.classList.add("playerRecord");
    // displayedData = `<p>${elem.fname} ${elem.lname}</p><p>${elem.country}</p><p>${elem.score}</p><p><button id="increment">+5</button><button id="decrement">-5</button><i class="fa-solid fa-trash del"></i></p>`;
    // parent.innerHTML = displayedData;
    // board.append(parent);

    displayedData += `<div class="playerRecord" data-index="${index}">
      <p>${elem.fname} ${elem.fname}</p>
      <p>${elem.country}</p>
      <p>${elem.score}</p>
      <p>
        <button class="increment">+5</button>
        <button class="decrement">-5</button>
        <i class="fa-solid fa-trash del"></i>
      </p>
    </div>`;
  });
  board.innerHTML = displayedData;
}

function sortData(obj) {
  // leaderBoard.sort((a, b) => b.score - a.score);

  //find index of that player whose score is greater than obj.score
  // if index found, splice the obj there
  //if not, push the obj to the last place



}

function handleTasks(e, index) {
  if (e.target.nodeName === "I") handleDelete(e.target);
  else if (e.target.nodeName === "BUTTON") {
    if (e.target.id === "increment") {
    } else {
    }
  }
}
