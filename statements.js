let a = 5;
let b = 6;
if (a === b){
    console.log("The condition is true");
}
else{
    console.log("The conndition is false");
}
    
  
let age = 18;
if (age >=18){
    console.log("You can vote");
}
else{
    console.log("You can not vote");
}

let mode = "dark";
let color;
if( mode === "dark"){
    console.log(color = "black");
}
else{
    console.log(color = "white");

}

if(a%2===0){
    console.log(a," is an even number");
}
else{
    console.log(a," is an odd number");
}

//.............else if............
let Age = 17;

console.log("your age is:",Age);
if(Age <= 15){
    console.log("The Police can not take you to the Police Station");
}
else if(Age >= 60){
    console.log("The Police can not take you to the Police Station");
}
else{
    console.log("The Police can take you to the Police Station");
}


//.....................Ternary Operator.............
//it uses 3 operands 
//.......condition ? true output : false output

 let result = ((Age >= 18) ? "You can vote" : "You can not vote");
 console.log(result);
//  (Age >= 18) ? console.log("You can vote"): console.log("You can not vote");