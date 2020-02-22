let start = document.getElementsByClassName("start")
let quizContainer = document.getElementsByClassName("quizcontainer")
let questionDisplay = document.getElementsByClassName("question")
let choiceA = document.getElementById("#A")
let choiceB = document.getElementById("#B")
let choiceC = document.getElementById("#C")
let timeGauge = document.getElementsByClassName("timeguage")


let questions = [
    {
        question : "Anwser is A",
        choiceA : "A",
        choiceB : "B",
        choiceC : "C",
        correct : "A"
    },
    {
        question : "Anwser B",
        choiceA : "A",
        choiceB : "B",
        choiceC : "C",
        correct : "B"
    },
    {
        question : "Anwser C",
        choiceA : "A",
        choiceB : "B",
        choiceC : "C",
        correct : "C"
    }
]

let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;

function renderQuestion(){
    let q = questions[runningQuestionIndex];
    questionDisplay.innerHTML = "<p>" + q.questionDisplay + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;


}

let questionTime = 10;
let gaugeWidth = 150;
let count = 0;
let gaugeProgress = gaugeWidth/questionTime;
let TIMER = setInterval(countRender, 1000);

function countRender(){
    if( count <= questionTime){
        countRender.innerHTML = count;
        document.getElementsByClassName("timeguage")[0].style.width = gaugeProgress * count + "px";
        count++
    }

    else {
        count = 0;
        if(runningQuestionIndex < lastQuestionIndex){
            runningQuestionIndex++
            renderQuestion();
        }

        else {
            clearInterval(TIMER);
            scoreRender()
        }

        
        }
    }
let score = 0;
function checkAnwser(answer){
    if(questions[runningQuestionIndex].correct == answer){
        score++
    }

    else {
        count = 0;
        if(runningQuestionIndex < lastQuestionIndex){
            runningQuestionIndex++
            renderQuestion();
        }
        else{
            clearInterval(TIMER);
            scoreRender()
        }
    }
}