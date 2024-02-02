const boilWater = (callback) => {
    setTimeout(function () {
        console.log("Boiling water...");
        callback();
    }, 5000);
};

const takingTheTrashOut = (callback) => {
    setTimeout(function () {
        console.log("I am taking the trash out");
        callback();
    }, 2000);
};

const addSugar = (callback) => {
    setTimeout(function () {
        console.log("Adding sugar");
        callback();
    }, 2000);
};

const mixAllIngredients = (callback) => {
    setTimeout(function () {
        console.log("Mixing All");
        callback();
    }, 2000);
};

const pourOut = () => {
    console.log("Everything done");
};

boilWater(() => {
    takingTheTrashOut(() => {
        addSugar(() => {
            mixAllIngredients(() => {
                pourOut();
            });
        });
    });
});
