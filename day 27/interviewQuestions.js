function createCounterPromise(maxCount = 3, timeoutMs = 5000) {  

  const promise = new Promise((resolve, reject) => {
    
  });

  return {
    
  };
}

// Usage:
const { promise, cancel } = createCounterPromise(10, 15000);

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

// OUTPUT:
// Counter 1
// Counter 2
// Counter 3
// Counter 4
// Counter 5
// Counter 6
// Counter 7
// Counter 8
// Counter 9
// Counter 10
// Done ! Counter reached 10



// Cancel after 2 seconds
setTimeout(cancel, 2000); //This should cancel the operation after 2 seconds with message "Operation canceled after 2 seconds"
