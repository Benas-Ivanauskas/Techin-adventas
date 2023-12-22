"use strict"

let questions = [
    { text: "1. Color of Santa's suit?", correct: "Red", inCorrect: "Green" },
    { text: "2. Reindeer with red nose?", inCorrect: "Dasher", correct: "Rudolph" },
    { text: "3. Christmas plant with red and green leaves?", correct: "Poinsettia", inCorrect: "Mistletoe" },
    { text: "4. What's left for Santa on Christmas Eve?", inCorrect: "Carrots", correct: "Cookies" },
    {  text: "5. Traditional Christmas dessert?", correct: "Fruitcake", inCorrect: "Gingerbread" },
    { text: "6. Last line of 'Night Before Christmas'?", inCorrect: "Everyone!", correct: "Night!" },
    { text: "7. Main character in 'A Christmas Carol'?", correct: "Scrooge", inCorrect: "Cratchit" },
    { text: "8. Christmas tree origin country?", correct: "Germany", inCorrect: "France" },
    { text: "9. Number of horses in 'Jingle Bells'?", inCorrect: "2", correct: "1" },
    { text: "10. Where Santa Claus live?", correct: "Finland", inCorrect: "Sweden" }
];


let currentQuestionIndex = 0;
let score = 0;
let displayingQuestion = questions[currentQuestionIndex];

const questionText = document.getElementById("question");
const correctAnswer = document.getElementById("correct");
const incorrectAnswer = document.getElementById("incorrect")
const nextBtn = document.getElementById("nextBtn");


function showQuestion () {
    let currentQuestion = displayingQuestion;
    questionText.innerText = currentQuestion.text
}
function showAnswers () {
    let currentQuestion = displayingQuestion;
    correctAnswer.innerText = currentQuestion.correct;
    incorrectAnswer.innerText = currentQuestion.inCorrect

}
function findingCorrectAnswer (isCorrect) {
    if (isCorrect) {
        correctAnswer.style.backgroundColor = "green";
        document.querySelector(".answerIfCorrect").textContent ="Correct Answer!"
        score ++;
    } else {
        incorrectAnswer.style.backgroundColor= "red";
        document.querySelector(".answerIfCorrect").textContent ="Incorrect Answer!"
    }
}



nextBtn.addEventListener('click', function() {
    
    document.querySelector(".answerIfCorrect").textContent= ''
    incorrectAnswer.style.backgroundColor= "";  
    correctAnswer.style.backgroundColor = "";
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayingQuestion = questions[currentQuestionIndex];
        showQuestion();
        showAnswers();
    } else {
        document.getElementById("score").innerText = `Your score is  ${score}/${questions.length}`
    }
})


showQuestion()
showAnswers()