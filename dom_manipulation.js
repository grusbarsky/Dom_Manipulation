//1.
document.getElementById("container");
//2.
document.querySelector("#container");
//3.
document.querySelectorAll(".second");
//4.
document.querySelectorAll("ol.third");
//5.
let container = document.querySelector("#container");
container.innerText = "Hello!";

//6.
let footer = document.querySelector(".footer");
footer.classList.add(".main");
//7.
footer.classList.remove(".main");
//8.
let newLi = document.createElement("li");
//9.
newLi.innerText = "four";
//10.
let ul = document.querySelector("ul");
ul.append(newLi);
//11.
let li_ols = document.querySelectorAll("ol li")
for(let li_ol of li_ols){
    li_ol.style.backgroundColor = "green";
}
//12
//let footer = document.querySelectorAll(".footer"); //declared in 6
footer.remove();
