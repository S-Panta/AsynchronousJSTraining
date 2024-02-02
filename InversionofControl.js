createOrder(function () {
    console.log("creating items");
    addItem(function () {
        console.log("adding items");
        proceedToPayment(function () {
            console.log("Opening Payment Page");
        });
    });
});