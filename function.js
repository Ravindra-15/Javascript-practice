// function myFunction(){
//     console.log("hello There !");
//     console.log("This is Ravindra Kumar");
// }
// myFunction();

//............2ndq...................................................................

// function myFunction(msg,n){   //parameter
//     console.log(msg+n);
// }
// myFunction("hello","there"); //arguments

//............Sum of 2 Numbers........................................................

// function sum(num1,num2){
//     let x = num1 + num2;
//     return(x);
//  }

// let y = sum( 5,4);
// console.log(y);
// console.log(num1);  // function prameters are local variables ,we can not invoke them outside the function...........


//...............Arrow Functions => compact way to deal with functions.........................

// const arrowfun = (a,b) => {       //here arrowfun is a variable to store the value of arrowfunction ,also called variable function 
//     sum = a + b;
//     return sum;
// }
// arrowfun(5,6);
// console.log(sum);

// const arrowFun = (a,b) => {
//     mul = a * b;
//     return mul;
// }
// arrowFun(8,6);
// console.log(mul);

// //printing hello using arrowfunction

// const arrowHello = () =>{
// console.log("Hello!");
// }
// arrowHello(); 

//...............................practice question (Important........takes string and returns no. of vowels in string...................

// function countVowels(str) {
//     let count = 0;
//     str = prompt("Enter a String :");
//     for (let char of str) {
//         console.log(char);
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U")
//             count++;
//     }
//     console.log(count);
// }
// countVowels();


//.....using arrowfunction.........practice question (Important........takes string and returns no. of vowels in string...................


// const countVowels = (str) => {
//     let count = 0;
//     str = prompt("Enter a String :");
//     for (let char of str) {
//         console.log(char);
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U")
//             count++;
//     }
//     console.log(count);
// }
// countVowels();



//.............HIGHER ORDER FUNCTIONS...........functions which can use other functions aas a parameter ....ex- for each
//.............for each-loop..........This is used in array and we can passed a function as a parameter in for each-loop
 
// arr = [16,23,58,82,94];
// arr.forEach((marks,idx,arr)=> {     //we have 3 parameters in callback function ( value, index, array itself)
//     console.log(marks,idx,arr);
// });


//...............................Questiion................................
//print the square of each element of array using for each.................

// array = [1,2,3,4,5];
// let value = (value) => {  //arrow-function
//     console.log(value*value);
// } 
// array.forEach(value);

//...........................arr.map is used to return new array which is uodated after some operation.........................


// array = [1,2,3,4,5];
// let newArr = array.map((value) => {  //arrow-function
//     return(value*value);
// } )
// console.log(newArr);

//.....................................................................................................

// let price = [100,200,300,400];
// let newPrice = price.map((val) => {
// return(val/10);
// })
// console.log(newPrice);

//.......................arr.filter is used to print some specific values from the array.........................
//even numbers in array...............

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let evenArr = arr.filter((val) =>{
//     return(val % 2 === 0);
// })
// console.log(evenArr);

//........marks > 90 ...................

// marks = [56,34,98,86,93,95,87];
// let newArr = marks.filter((marks) => {
//     return(marks > 90 );
// })
// console.log(newArr);


//.....................arr.reduce is used to to return a single value after performing the operations............
//sum of array
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let sum = arr.reduce((prev,current) => {
// return(prev + current);
// })
// console.log(sum);

// maximum number in an array

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let max = arr.reduce((prev,current) => {
//     return(prev > current ? prev : current);
// })
// console.log(max);

let n = prompt("Enter a number :")
let arr = [];
for(let i = 1; i <= n; i++){
    arr[i - 1] = i;
}
console.log(arr);
let sum = arr.reduce((prev,curr) => {
    return(prev + curr);
})
console.log("The Sum of Numbers :",sum);
let mul = arr.reduce((prev,curr) => {
    return(prev * curr);
})
console.log("The Product of Numbers :",mul);