// Add your code to this file
let background = document.querySelector("body");
background.style["background-color"]="darkblue";
let a = document.querySelector("h2");
a.style["text-align"]="center";
let b =document.querySelector("h1");
b.style["background-color"]="#2e549b";
let c = document.querySelectorAll("img");
for (let i=0; i<c.length; i++){
    c[i].style["border-color"]= "yellow";
    c[i].style["border-style"]= "dotted";
}
let d = document.querySelectorAll("#bulbasaur_container")
d[0].style["background-color"]= "#408c8c";
let e = document.querySelectorAll(".pokemon_names");
e[0].innerHTML="Bulbasaur!";
e[1].innerHTML="Charmander!";
e[2].innerHTML="Squirtle!";
