// console.log("Hello1");
// setTimeout(() => {
//     console.log("Hello")
// },4000);
// console.log("Hello2");
// console.log("Hello3");
 

//..............................callback funnction.................................................................

function sum(a, b){
    console.log(a + b);
}
function call(a, b, sum){
    sum(a, b);
}
call(2, 3, sum);