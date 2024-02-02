const boilWater = () => {
    console.log("Boiling water...");
    // for(i = 1;i<1000;i++){
    //     console.log("Boiling " + i + "ml of water" )
    // }
};
const grindingTeaLeaf = () =>{
    for(i = 1;i<101;i++){
        console.log("Task on process:" + i + "% complete" )
    }
    console.log("Tealeave ready for use")
}
const addSugar = () => {
    console.log("Adding sugar");
};
const mixAllIngredients = () => {
    console.log("Mixing All");
};
const pourOut = () =>{
    console.log("everything done")
}
boilWater();
grindingTeaLeaf();
addSugar();
mixAllIngredients();
pourOut();