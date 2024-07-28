let fullName = prompt("Enter Your FullName Without Spacing:");

// let username = "@" + fullName + fullName.length; 
let firstName = "@";
let userName = firstName.concat(fullName,fullName.length);
console.log(`Your FullName is ${fullName}`);
console.log(`Your UserName is ${userName}`);
// console.log(userName);