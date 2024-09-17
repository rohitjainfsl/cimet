let h2 = document.querySelector("h2");

const timer = () => {
  const currentTime = new Date();
  const date = currentTime.getDate();
  const day = currentTime.getDay();
  const month = currentTime.getMonth() + 1;
  const year = currentTime.getFullYear();
  const sec = currentTime.getSeconds();

  let output = `${date} ${day} ${month} ${year} ${sec}`;
//   h2.innerText = `The Time is: ${output}`;
return output
};

let data = 
  h2.innerText = `The Time is: ${timer()}`;
setInterval(() => {
  timer();
}, 1000);
