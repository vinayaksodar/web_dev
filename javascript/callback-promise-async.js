// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
// There are two ways in which the callback may be called: synchronous and asynchronous.
// Synchronous callbacks are called immediately after the invocation of the outer function, with no intervening asynchronous tasks, while asynchronous callbacks are called at some point later, after an asynchronous operation has completed.

//Lets say we have three tasks fetch data clean data and then process data

// The below is synchronous code which uses callbacks and chaining this is not really that problematic
function fetchData() {
  console.log("Data Fetched");
  return "fetch";
}

function cleanData(data) {
  console.log("Data cleaned");
  return "clean" + data;
}

function processData(data) {
  console.log("Data processed");
  return "processed" + data;
}

// Chaining the functions: each function call passes its return value to the next.
const result = processData(cleanData(fetchData()));
console.log("Final result:", result); // Output: "Final result: processedcleanfetch"

//Now suppose fetchData was async, it will return immediately(undefined return type before promises) before data is fetched and cleanData will resume executing giving error

//To solve the above problem we have to call cleanData in a way that it only starts executing after fetchData is done executing like below
function fetchData(callback) {
  console.log("Data Fetched");
  // Simulate an asynchronous operation with setTimeout
  setTimeout(() => {
    callback("fetch");
  }, 100);
}

function cleanData(data, callback) {
  console.log("Data cleaned");
  // Simulate an asynchronous operation with setTimeout
  setTimeout(() => {
    callback("clean" + data);
  }, 100);
}

function processData(data, callback) {
  console.log("Data processed");
  // Simulate an asynchronous operation with setTimeout
  setTimeout(() => {
    callback("processed" + data);
  }, 100);
}

// Using nested callbacks to chain the operations.
fetchData(function (fetchResult) {
  cleanData(fetchResult, function (cleanResult) {
    processData(cleanResult, function (processedResult) {
      console.log("Final result:", processedResult); // Output: "Final result: processedcleanfetch"
    });
  });
});

// To solve callback deep nesting of fuctions specifically in async callbacks promises were introduced
fetchData()
  .then((fetchResult) => cleanData(fetchResult))
  .then((cleanResult) => processData(cleanResult))
  .then((finalResult) => {
    console.log("Final result:", finalResult); // Expected output: "processedcleanfetch"
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Async await syntax to make is seem moore like a synchronous function
async function runProcess() {
  const fetchResult = await fetchData();
  const cleanResult = await cleanData(fetchResult);
  const finalResult = await processData(cleanResult);
  console.log("Final result:", finalResult);
}
