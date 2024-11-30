const util = require('util');

// Wrap setTimeout inside a function to work with promisify
const wait = util.promisify((ms, callback) => setTimeout(callback, ms));

const timerFunction = () => wait(5000).then(() => {
    console.log("This statement is waiting for 5s");
});

console.log("Before Calling Function ");
timerFunction().then(() => {
    console.log("After Calling Function ");
});
