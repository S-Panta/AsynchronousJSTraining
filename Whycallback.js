const boilWater = () => {
    setTimeout(function () {
        console.log("Boiling water...");
    }, 5000);

};
const  grindingCoffeeBean = () => {
    setTimeout(function () {
        console.log("Beans is ready")
    }, 2000);
}
const addSugar = () => {
    setTimeout(function () {
        console.log("Adding sugar");
    }, 2000);

};
const mixAllIngredients = () => {
    setTimeout(function () {
        console.log("Mixing All");
    }, 2000);

};
const pourOut =() => {
    console.log("everything done")
}
boilWater();
grindingCoffeeBean();
addSugar();
mixAllIngredients();
pourOut();

