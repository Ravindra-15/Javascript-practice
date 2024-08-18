//...............Arithematic Operators...............

let a = 5;
console.log("The value of a is :",a);
let b = 2;
console.log("The value of b is :",b);
let add = (a+b);
let sub = (a-b);
let mul = (a*b);
let div = (a/b);
let mod = (a%b);
let exp = (a**b);
console.log("Additin of a and b:",add);
console.log("Subtraction of a and b:",sub);
console.log("Multiplication of a and b:",mul);
console.log("Division of a and b:",div);
console.log("Modulus of a and b:",mod);
console.log("Exponentiation of a and b:",exp);


//..................Unary Operators(Arithematic Operators use single operand)....................

let i = 5;
console.log("The value of i is :",i);
let d = 2;
console.log("The value of d is :",d);

console.log("post increment (i++) of i =",i++);
console.log("post increment (i++) of i =",i);   //this print the value first then increases in next line
console.log("pre increment (++i) of i =",++i);
console.log("pre increment (i++) of i =",i);  //this inreases value first then prints it

console.log("post decrement (d--) of d =",d--);  //prints the previous value then decreases
console.log("post decrement (d--) of d =",d);
console.log("pre decrement (--d) of d =",--d);  //decreases the value first the prints
console.log("pre decrement (--d) of d =",d);



//...................Assignment Operators.....................

/*let a = 5;
console.log("The value of a is :",a);
let b = 2;
console.log("The value of b is :",b);
let add = (a+b);
console.log(a += 1) //a = a + 1
console.log(b -= 1) //b = b - 1
console.log(a *= 2) //a = a * 1
console.log(b *= 2) //b = b * 1
*/


//.........................Comparison operators........................

/*let a = 5;
let b = 5;
console.log("Value of a:",a);
console.log("Value of b:",b);

console.log("a == b",a == b); //true

let c = "5";      //c is a string value
console.log("a == c",a == c);  //true
console.log("a === c",a === c);   //false because of Equal to & type
console.log("a !== c",a !== c); //true

console.log("a < b", a < b);
console.log("a > b",a > b);
console.log("a <= b",a <= b);
console.log("a >= b",a >= b);
*/

//......................Logical operators..................

// let a = 6;
// let b = 5;
// let c = 4;
// console.log("Value of a:",a);
// console.log("Value of b:",b);
// console.log("Value of c:",c);
// Cond1 = a > b;  //true
// Cond2 = b < a;  //true
// Cond3 = c > a;  //false
// Cond4 = b < c;  //false
// console.log("a > b && b < a",Cond1 && Cond2);  //Logical AND
// console.log("a > b && c > a",Cond1 && Cond3);  //both must be true for true result

// console.log("a > b || b < a",Cond1 || Cond2);  //Logical OR
// console.log("a > b || c > a",Cond1 || Cond3);   //if one is true then result will be true
// console.log("c > a || b < c",Cond3 || Cond4);   //both are false ,result wll be false


// console.log("!(a > b)", !Cond1)  //logical Not !
// console.log("!(c > a)", !Cond3); //it always produces the opposite answer