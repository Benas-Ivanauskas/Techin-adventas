"use strict"


const participants = ["Jingle", "Merry", "Twinkle", "Frosty"]
const festiveSocks = ["Red and Green stripped socks", 'Snowflake and Holly print scoks', "Candy cane inspired socks", 'Christmas Tree Patterned scoks']

const result = {}

participants.map(myFunction)

function myFunction(arr1) {
    const randomIndex = Math.floor(Math.random()*festiveSocks.length)
    result[arr1]=festiveSocks[randomIndex]
}

console.log(result)

