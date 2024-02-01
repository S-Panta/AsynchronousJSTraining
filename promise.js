function setTimeoutPromise(delay) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(`You waited ${delay} milliseconds`)
        }, delay)
    })
}
setTimeoutPromise(250)
    .then(msg => {
        console.log(msg)
        console.log("First Timeout")
    })
    .then(msg => {
        console.log(msg)
        console.log("Second Timeout")
    })


// doStuff()
// async function doStuff() {
//     const msg1 =setTimeoutPromise(250)
//     console.log(setTimeoutPromise(msg1,500))
//     console.log("First Timeout")
//
//     const msg2 = await setTimeoutPromise(500)
//     console.log(msg2)
//     console.log("Second Timeout")
// }