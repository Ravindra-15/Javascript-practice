//......................Strings.........................

// let str1 = "Ravindra";
// let str2 = "Kumar";
// console.log(str1.length);
// console.log(str1[5]);

//..............................Template Literals -> A way to have embadded expressions in string.......................


let specialString = `This is a backtick string`;
console.log(specialString);


let pen = {
    price  : 85,
    type : "Ball Pen",
}
console.log("The price of",pen.type ,"is",pen.price,"rupees");

let output = `The price of ${pen.type} is ${pen.price} rupees`;  //template literals treat number as string 
console.log(output);  //writing a string using placeholders `string text ${expression}` is called string INTERPOLATION......


//............................str methods.................


let str = "Ravindra Kumar";
let str2 = "     Hello     There     ";
let newStr = str.toUpperCase();
console.log(newStr);    //strings are immuteable......the actual strings can not be changed
console.log(str.toLowerCase());
console.log(str);  //actual string is not changed
console.log(str2.trim());  //str.trim() is used to remove the white spaces (   Ravindra    Kumar  ) .......it has 1 space between strings
console.log(str.slice(2,5));  //str.slice (start,end?) .......ending index is not included
console.log(str.concat(newStr));
console.log(str + newStr); //concatinate by +