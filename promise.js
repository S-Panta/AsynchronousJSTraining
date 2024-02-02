const boilWater = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Boiling water...");
            resolve();
        }, 5000);
    });
};
const  grindingCoffeeBean = () => {
    return new Promise((resolve,reject) => {
    setTimeout(function () {
        console.log("Beans is ready")
        resolve();
    }, 2000);
    });
};

const addSugar = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Adding sugar");
            resolve();
            // reject("No sugar found");
        }, 2000);
    });
};

const mixAllIngredients = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Mixing All");
            resolve();
        }, 2000);
    });
};
const pourOut = () => {
    console.log("Everything done");
};

// Handling concurrent Promises
// boilWater()
//     .then(grindingCoffeeBean)
//     .then(addSugar)
//     .then(mixAllIngredients)
//     .then(pourOut)
//     .catch((error) => {
//         console.error("Error:", error);
//     });

// Using Promise.all
// const getCoffee = () => {
//     return Promise.all([boilWater(), grindingCoffeeBean(),addSugar(), mixAllIngredients()])
//         .then(pourOut)
//         .catch(()=>{
//             console.log("coffee isn't ready ")
//         })
// }
// getCoffee()


// async await
const getCoffee = async () => {
    try {
        await grindingCoffeeBean();
        await boilWater();
        await addSugar();
        await mixAllIngredients();
        pourOut();
    } catch (error) {
        console.error("Error:", error);
    }
};
getCoffee();

