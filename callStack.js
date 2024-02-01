
function sayHi() {
    for (let i = 0; i < 5; i++){
        console.log( "I am inside loop");
    }
}
function greeting() {
    console.log("I am first")
    sayHi();
    console.log("I am third")
}
greeting();
