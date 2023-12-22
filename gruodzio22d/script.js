"use strict"

function greetings () {
    let name = document.getElementById("name").value;
    if (name.trim() === "") {
        alert("insert your name!")
        return;
    }
    let greeting = `We wish you a delighful, merry, and bright-ful christmas, ${name}! May your Christmas holidays be filled with love, peace, and joy. Merry Christmas and a happy New Year!`
    document.getElementById("text").textContent = greeting;
}
