// let button = document.querySelector("#btn1");
// // button.onclick = () => {
// //     console.log("Button is clicked : Handler1");
    
// // }
// button.addEventListener("click", () => {
//     console.log("Button is clicked : Handler1");
// });
// button.addEventListener("click", () => {
//     console.log("Button is clicked : Handler2");
// });
// let btn1 = () => {
//     console.log("Button is clicked : Handler3");
// };
// button.removeEventListener("click", btn1);    //removing handler3

 
// let box = document.querySelector("div");
// box.onmouseover = () => {
//     console.log("you are inside div.");
// }
// let button2 = document.querySelector("#btn2");
// button2.ondblclick = () => {
//     console.log("Button is clicked twice.");
// }

let button = document.querySelector("#btn");
let currentMode = "Light";
button.addEventListener("click", () => {
    if(currentMode === "Light"){
        currentMode = "Dark";
        document.querySelector("body").style.backgroundColor = "black";

        }
    
    else{
        currentMode = "Light";
        document.querySelector("body").style.backgroundColor = "white";
    }
   console.log("Mode changed to",currentMode);
})