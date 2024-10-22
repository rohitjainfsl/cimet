function complexAsync() {
  let intervalId;
  let timeoutId;
  const promise = new Promise((resolve, reject) => {
    intervalId = setInterval(() => {
      console.log("Tick");
    }, 4000);
    timeoutId = setTimeout(() => {
      resolve("Timeout completed");
    }, 10000);
  });
  return {
    promise,
    cancel: () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    },
  };
}
const { promise, cancel } = complexAsync();

promise.then((result) => {
  console.log(result);
});

setTimeout(() => {
  cancel();
  console.log("Operation cancelled");
}, 8009);
