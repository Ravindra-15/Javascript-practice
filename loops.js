//................for loop..............

let i ;
for(i =0 ; i <5; i++){
    console.log("loop will execute 5 times \n");
}


//.................sum of n numbers.......................

let n = prompt("Enter the number:");
let sum = 0; 
for(i=1; i <= n; i++){
    sum = sum + i;
}
console.log("The sum is :",sum);


//........................while loop....................

let j = 0;    // let can be updated
sum = 0;
while(j <= 10){
    sum = sum + j;
    j++;
}
console.log("The sum is :",sum);


//................do-whhile loop.................

do{
    console.log("The sum is :",sum);
    sum = sum + j;
    j++;
}while(j<=10);

//2nd example of do-while..................


i = 20;
do {
    console.log("This will run only one time");
    i++;
}while(i < 10);


//..................."for-of loop " used for strings and arrays.................

let str = "RavindraKumar";
let size = 0;
for( let val of str){     //......val (Value) also called iterator
    console.log(val);
    size++;
}
console.log("Size of String :",size);


//.....................for-in looop  -> this is useful for objects ...................

let student = {
    name : "RavidraKumar",  
    age : 20,
    rollNo : 407,
    cgpa : 8.8,
    isPass : true,
} 
for(let key in student){
    console.log("Key is:",key,"and Value is",student[key]);
}