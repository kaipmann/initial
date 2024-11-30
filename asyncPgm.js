
const myFunction = () => {
    console.log("Before Calling Function ");
    
    //Wait 5000ms / 5s
    setTimeout(() => {console.log("This statement is waiting for 5 sec");} , 5000);    
    
    console.log("After Calling Function ");
}

myFunction();