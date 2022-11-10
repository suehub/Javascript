// DOM : Document Object Model


// const title = document.getElementById("title"); 
// const list = document.getElementsByClassName("list")


// querySelector : 쉽게 id와 class 상관없이 불러올 수 있음
const title = document.querySelector("#title");
const list = document.querySelector(".list"); 
const items = document.querySelectorAll(".item");
const btn = document.querySelector("#btn");
const naver = document.querySelector(".naver")


btn.addEventListener("click", function(){
    alert("탕수육")
}) 

naver.addEventListener("click", (e)=>{
    e.preventDefault(); // 이벤트가 작동하지 않게 함
    console.log(e)
    alert("네이버!!!")
})
