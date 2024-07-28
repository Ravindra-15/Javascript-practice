// let num = prompt("Enter a Number:");
// if(num%5 === 0){
//     console.log(num,"is  a multiple of 5");
// }
// else{
//     console.log(num,"is not a multiple of 5");
// }

let marks = prompt("Enter Marks (0-100):");
if(marks >= 80 && marks <=100){
    console.log("Grade A");
}
else if(marks >= 70 && marks <=79){
    console.log("Grade B");
}
else if(marks >= 60 && marks <=69){
    console.log("Grade C");
}
else if(marks >= 50 && marks <=59){
    console.log("Grade d");
}
else if(marks >= 0 && marks <=49){
    console.log("Grade F");
}