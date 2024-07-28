// let h1 = document.getElementById("heading");
// console.dir(h1);
// console.log(h1);
// let h4 = document.getElementsByClassName("heading2");
// console.dir(h4);
// console.log(h4);
// let button = document.getElementById("button");
// console.dir(button);
// console.log(button);
// console.dir(button.tagname);
// let img = document.getElementsByTagName("img");
// console.log(img);
// console.dir(img);

// let element = document.querySelector("#button");   //this is used to access elements using class,id and tag name (this will give first matching element)
// console.dir(element);
//  let elements = document.querySelectorAll(".heading2");
// console.log(elements);  //this is how we can access all elements using querry selecer all

// console.dir(document.body.childNodes);
// console.dir(document.body.lastChild);
// console.dir(document.body.innerHTML);
// console.dir(document.body.innerText);

// ................................................Questions........................................................

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText= h2.innerText + " From My Learing";
// console.log(h2.innerText);
// // .innerText = h2.innerText + " From My Learing";h2

// ..............................................2nd Question......................................................

let boxes = document.querySelectorAll(".box");
console.log(boxes[0]);
console.log(boxes[1]);
console.log(boxes[2]);
// boxes[0].innerText = "New Unique Value 1";                    //1st way 
// boxes[1].innerText = "New Unique Value 2";
// boxes[2].innerText = "New Unique Value 3";
let idx = 1                                                    //professional way
for(val of boxes){
    console.log(val.innerText);
    val.innerText = `New Unique Value ${idx}`;
    idx++;
}
