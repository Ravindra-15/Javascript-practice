let i;
for(i = 0; i <= 100; i++){
    if(i%2===0){
        console.log("The even numbers between 0 - 100 :",i);
    }
}

// ............Enter Password Game................

let password = 4567;
let input = prompt("Enter Password:");
while(input != password){

    input = prompt(" Wrong Password! Try Again...");

}
console.log("Congratulations! You have entered correct password");


