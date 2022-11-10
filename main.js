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
//title.innerHTML = "<input type='text'/ >"   // innnerHTML은 title 돔 안에 html 삽입시키는 것
title.innerText = "text"   // 문자가 들어감
btn.innerText = "button"

// list.remove()
list.firstElementChild.remove()
list.lastElementChild.innerHTML = "<a>link</a>"

console.log(title, list, items) 


