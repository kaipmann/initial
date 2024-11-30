
const myFunction = () => {
    console.log("Before Calling Function ");
    return new Promise((resolve, reject) => {
            //Wait 5000ms / 5s
        setTimeout(() => {
            console.log("This statement is waiting for 5 sec");
            resolve('Promise has been resolved');
            } , 5000);    
    })
    
    console.log("After Calling Function ");
}

myFunction().then((message) => {
    console.log(message);
});