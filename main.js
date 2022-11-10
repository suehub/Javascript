// DOM : Document Object Model


// const title = document.getElementById("title"); 
// const list = document.getElementsByClassName("list")


// querySelector : 쉽게 id와 class 상관없이 불러올 수 있음
const title = document.querySelector("#title");
const list = document.querySelector(".list"); 
const items = document.querySelectorAll(".item");
const btn = document.querySelector("#btn");



title.style.color = "red"
title.style.backgroundColor = "blue" 
// console.log({   title }) 
btn.innerText = "button"
console.log(title, list, items) 
