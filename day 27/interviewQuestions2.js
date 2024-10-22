
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


function getRandomDelay() {
  return Math.floor(Math.random() * 2000) + 1000; // Random between 1000-3000ms
}


async function sequentialDelayedCounting(limit = 5) {
  try {
    for (let i = 1; i <= limit; i++) {
      const waitTime = getRandomDelay();
      console.log(`Waiting ${waitTime}ms before logging ${i}`);
      await delay(waitTime);
      console.log(`Number: ${i}`);
    }
    console.log("Sequence completed!");
  } catch (error) {
    console.error("Error:", error);
  }
}


sequentialDelayedCounting(6);
