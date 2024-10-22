let counter = 0;
const maxCount = 3;

const intervalPromise = new Promise((resolve, reject) => {
  const interval = setInterval(() => {
    counter++;
    console.log(`Counter: ${counter}`);

    if (counter === maxCount) {
      resolve(`Done! Counter reached ${counter}`);
    }
  }, 1000);
});

intervalPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error.message));

// function createCounterPromise(maxCount = 3, timeoutMs = 5000) {
//   let counter = 0;
//   let interval;
//   let timeout;
//   let promiseReject; // Store the reject function

//   const cleanup = () => {
//     clearInterval(interval);
//     clearTimeout(timeout);
//   };

//   const promise = new Promise((resolve, reject) => {
//     // Store reject function for later use
//     promiseReject = reject;

//     interval = setInterval(() => {
//       try {
//         counter++;
//         console.log(`Counter: ${counter}`);

//         if (counter === maxCount) {
//           cleanup();
//           resolve(`Done! Counter reached ${counter}`);
//         }
//       } catch (error) {
//         cleanup();
//         reject(error);
//       }
//     }, 1000);

//     timeout = setTimeout(() => {
//       cleanup();
//       reject(new Error("Operation timed out"));
//     }, timeoutMs);
//   });

//   return {
//     promise,
//     cancel: () => {
//       cleanup();
//       promiseReject(new Error("Operation cancelled")); // Use stored reject function
//     },
//   };
// }

// // Usage:
// const { promise, cancel } = createCounterPromise(10, 15000);

// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error("Error:", error.message);
//   });

// // Cancel after 2 seconds
// setTimeout(cancel, 2000); //This should cancel the operation after 2 seconds with message "Operation canceled after 2 seconds"
