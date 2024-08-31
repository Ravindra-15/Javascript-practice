// console.log("Hello1");
// setTimeout(() => {
//     console.log("Hello")
// },4000);
// console.log("Hello2");
// console.log("Hello3");

//..............................callback function.................................................................

// function sum(a, b){
//     console.log(a + b);
// }
// function call(a, b, sum){
//     sum(a, b);
// }
// call(2, 3, sum);

//.....................................callback function............................................................

// function mul(a, b) {
//     console.log(a * b);

// }
// function call(a, b, mul) {
//     mul(a, b);

// }
// call(5, 4, mul);


//..........................................callback hell (Pyramid of Doom) -> Nested callbacks stacked below one another forming a pyramid structure.................................

// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log(dataId);
//         if (getNextData) {
//             getNextData();
//         }

//     }, 2000);
// }
// getData(1, () => {
//     console.log("getting data 2....");
//     getData(2, () => {
//         console.log("getting data 3....");
//         getData(3, () => {
//             console.log("getting data 4....");
//             getData(4);
//         }, 1000);
//     }, 1000);
// }, 1000);



//.........................................Async Await............................................................

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(dataId);
            resolve("success");
        }, 2000);
    })
}
 
(async function(){               //................IIFE...............
    console.log("getting data 1... ");
    await getData(1);
    console.log("getting data 2... ");
    await getData(2);
    console.log("getting data 3... ");
    await getData(3);   
})();
 



