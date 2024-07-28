// let marks = [67,78,75,97,54];
// console.log(marks[1]);
// let students = ["Rahul","Ram","Laxman"];
// console.log(students);

// //using for loop

//  for(let i= 0;i < marks.length; i++){
//     console.log(marks[i]);
//  }
//  //using for-of loop

//  for(let name of students){
//     console.log(name.toUpperCase());
//  }


//Practice question of avg of marks.........................................

// let marks = [85,97,44,37,76,60];
// console.log(marks);
// let sum = 0;
// for(let i = 0; i < marks.length; i++){
//     sum += marks[i];
// }
// console.log(`The sum of marks is ${sum}`);
 
// let avg = sum/marks.length;
// console.log(`The avg of the marks = ${avg}`);

//.........................2nd question........................................

// let prices = [250,645,300,900,50];
// let finalPrice = 0;
// for(let i = 0; i < prices.length; i++){
//     let offer = prices[i]/10;
//     prices[i] = prices[i]-offer;
//     finalPrice = finalPrice + prices[i] 
// }
// console.log(prices);
// console.log(finalPrice);


//............................Array methods.......................
let prices = [250,645,300,900,50];
let fruits =["Apple","Banana","Orange","PineApple","Mango"];
console.log(fruits);
fruits.push("Peach","Pear");
console.log(fruits);

fruits.pop();

console.log(fruits.toString());
console.log(fruits.concat(prices));
fruits.unshift("Papaya");  //this adds the item in the beginning of the array
console.log(fruits);
fruits.shift();   //it removes the element from the beginning of the array
console.log(fruits);  

console.log(fruits.slice(2,5));

let arr  = [1,2,3,4,5,6,7,8];
arr.splice(2,2,11,12);  //we can add , delete and replace elements using splice ..........................................
console.log(arr);
//add element..............
let newArr  = [1,2,3,4,5,6,7,8];
newArr.splice(2,0,11,12);
console.log(newArr);
//delete element............
let newArr2  = [1,2,3,4,5,6,7,8];
newArr2.splice(2,4);
console.log(newArr2);
//replace elements............
let newArr3  = [1,2,3,4,5,6,7,8];
newArr3.splice(2,1,15);
console.log(newArr3);


//...........................question........................

let companies = ["bloomberg","Microsoft","Uber","Google", "IBM","Netflix"];
console.log(companies);
// companies.shift();
// console.log(companies);
// companies.splice(2,1,"Ola");
// console.log(companies);
companies.push("Amazon");
console.log(companies);