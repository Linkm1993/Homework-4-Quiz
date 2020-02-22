let startButton = document.getElementById("start-btn")
let questionContainer = document.getElementsByClassName("question-container")
let shuffleQs = 


startButton.addEventListener('click', startGame);

function startGame(){
    console.log("Started")
    startButton.classList.add('hide')
    questionContainer[0].classList.remove('hide')
    nextQuestion()
}

function nextQuestion(){

}

function selectAnswer(){


}

let questions = [
    {
        question : "What does HTML stand for?",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        correct : "A"
    },
    {
        question : "What does CSS stand for?",
        choiceA : "Wrong",
        choiceB : "Correct",
        choiceC : "Wrong",
        correct : "B"
    },
    {
        question : "What does JS stand for?",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        correct : "C"
    }
]