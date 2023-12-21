"use strict"

const btn = document.getElementById("btn");
const eatenCookiesCount = document.getElementById("eatencookies");
const btnReset = document.getElementById("btnreset")

let click = 0;
const colorArr = ["red", "green", "yellow", "blue", "orange", "purple", "lightblue", "lightgreen"];

btn.addEventListener('click', function () {
   click++;
   const randomIndex = Math.floor(colorArr.length * Math.random())
    eatenCookiesCount.textContent = `🎅 Santa eaten cookies 🍪 ${click}`;
   document.body.style.backgroundColor = colorArr[randomIndex];
})

btnReset.addEventListener('click', function () {
    click = 0
    eatenCookiesCount.textContent = `Santa eaten cookies ${click}`;
    document.body.style.backgroundColor = colorArr[0];
})

//cursor following
let cursors = document.querySelector(".cursor");
document.addEventListener("mousemove", function (e) {
    cursors.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
})

//web music

audioElement.play();