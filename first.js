fullName = "Ravindra Kumar";   //camel case is a perfect practice of writing variable names

// FullName = "Ravindra Kumar";   pascal case
// full_name = "Ravindra Kumar";  snake case
// full-name = "Ravindra Kumar";  kabab case

shape = "square";
length = 25;
width = 20;
x = null;
y = undefined;
console.log(fullName);
console.log(shape);
console.log(length);
console.log(width);
console.log(x);
console.log(y);
isFollowed = true; //This is a boolean type value
// isFollowed = False;
console.log(isFollowed);

// let newName = "Ravindra Kumar";
// newName = "Ravindra";   //can be modified and has block scope
// console.log(newName);
{
    let a = 5;   //block scope and can not be re declared
    console.log(a);
}
{
    let a = 10;
    console.log(a);
}

// const newName = "Ravindra Kumar";
// newName = "RAvindra";  //con not be modified and has block scope
// console.log(newName);

// var newName = "Ravindra Kumar";
// newName = "Ravindra";  //can be modified and redeclared .It has global scope
// newName = "Kumar";
// console.log(newName);


//-----------------Datatypes in JS--------------2types = primitive(7) , non primitive (array,functions)


let c = BigInt(128);  //typeof c is Bigint
console.log(c);

let d = 23;     //numeric datatype
console.log(d);

let e = ("Ravindra");  //string datatype
console.log(e);  

let f = null;    //null datatype , it will show typeof of f = object
console.log(f);
 
let g = true;   //boolean datatype
console.log(g);

let h = Symbol("hello!"); //important to knnow
console.log(h);

let i;  //undefined datatype
console.log(i);



//....................................................objects in js.................................



const student = {                           //student is an object  
    fullName : "Ravindra Kumar",         //fullName,age,cgpa,isPass are the object keys which can be updated
    age : 19,
    cgpa : 8.8,
    isPass : true,
};
console.log(student["age"]);   //initial age

student["age"] = student["age"] + 1;  //changes in age
console.log(student["age"]);

student.age = student.age   +  1;
console.log(student.age);

console.log(student.fullName);   //initial name

student.fullName = "RAVINDRA KUMAR";   //changes in name
console.log(student.fullName);

console.log(student["cgpa"]);