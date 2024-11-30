
const timerFunction = () => new Promise((resolve) => {
    setTimeout(() => {
            // await 5s
            console.log("This statement is waiting for 5s");
            resolve('Promise has been resolved');
        } , 5000); 
}) 
const myFunction = async () => {
    console.log("Before Calling Function ");
    const result = await timerFunction();
    console.log("After Calling Function ");
    return result; 
}

myFunction().then((message) => {
    console.log(message);
});