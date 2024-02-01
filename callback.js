
const greeting =  () => {
    console.log( "I am first")
}
const getName = ()=>{
    console.log("I am noone")
}
function getPosition() {
    console.log("I am second")
}

greeting();
setTimeout(getName,2000);
getPosition();

