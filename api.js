const para = document.querySelector("#joke");
const btn = document.querySelector("#btn");


const URL  = "https://api.chucknorris.io/jokes/random";
 
const getFacts = async () => {
    console.log("getting data.....");
    let response = await fetch(URL);
    console.log(response);
    let data = await  response.json();
    para.innerText = data.value;
} 
getFacts();
btn.addEventListener("click",getFacts);

 