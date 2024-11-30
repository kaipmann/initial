const callbackFn = () => {
    console.log("Callback Function 'callbackFn' is executed");
    }


const myFunction = (callbackFn) => {
    console.log("Before Calling Function ");
    
    //Wait 5000ms / 5s
    setTimeout(() => {
        console.log("This statement is waiting for 5 sec");
        callbackFn();
    } , 5000);    
    
    console.log("After Calling Function ");
}

myFunction(callbackFn);
