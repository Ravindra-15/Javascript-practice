//........getAttribute and setAttribute properties..................................................


let heading = document.querySelector("h1");  //firstly access the element
console.log(heading);

let attribute = h1.getAttribute("name");
console.log(attribute);
let newAttribute = h1.setAttribute("name","h1 Heading");
console.log(newAttribute);

let para = document.querySelector("p");
console.log(para);

let paraName = para.getAttribute("name");
console.log(paraName);
let paraClass = para.getAttribute("class");
console.log(paraClass);
let newParaName = para.setAttribute("name","New Paragraph");
console.log(newParaName);

//...............node.style property to change css of page...............................

//first access the element then do changes

h1.style.backgroundColor="aqua";
para.style.backgroundColor="lightGrey";

let body = document.querySelector("body");
body.style.backgroundColor="rgb(0,180,200)";
