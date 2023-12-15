"use strict"

function replaceChristmas(inputText, customEmoji = "🎄") {
    let christmas = "Christmas";
    let christmasReplace = christmas.replace("Christmas", "🎄")
    let text = inputText;
    let result = text.replace("Christmas", customEmoji);
    let count = (text.match("Christmas") || []).length;

    return { replacedText: result, replacementCount: count, christmasReplace };
}
// changing christmas to tree
console.log(replaceChristmas("Christmas", "🎄"))

// emoji tree changing christmas
let inputString1 = "Christmas is coming, Christmas is coming!";
let result1 = replaceChristmas(inputString1);
console.log(result1.replacedText);
console.log("Count:", result1.replacementCount);

// Santa face
let inputString2 = "Christmas is here!";
let result2 = replaceChristmas(inputString2, "🎅");
console.log(result2.replacedText);
console.log("Count:", result2.replacementCount);