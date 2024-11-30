
const myFunction = async () => {
    console.log("Before Calling Function ");
    const result = await new Promise((resolve) => {
        //Wait 5000ms / 5s
        setTimeout(() => {
            console.log("This statement is waiting for 5 sec");
            resolve('Promise has been resolved');
            } , 5000);    
})
    console.log("After Calling Function ");
    return result;
}

myFunction().then((message) => {
    console.log(message);
});