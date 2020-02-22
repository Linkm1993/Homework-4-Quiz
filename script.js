let startButton = document.getElementById('start-btn')
let nextButton = document.getElementById('next-btn')
let questionContainerElement = document.getElementById('question-container')
let questionElement = document.getElementById('question')
let answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    let button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn', 'btn-primary')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  let selectedButton = e.target
  let correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

let questions = [
  {
    question: 'The 1st choice is correct is correct',
    answers: [
      { text: 'Click here!', correct: true },
      { text: 'Wrong', correct: false }
    ]
  },
  {
    question: 'Pick The Third choice',
    answers: [
      { text: 'Wrong', correct: false },
      { text: 'Think again!', correct: false},
      { text: 'Pick me!', correct: true },
      { text: 'Not me!', correct: false}
    ]
  },
  {
    question: '2nd choice is correct',
    answers: [
      { text: 'Not here', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Nope', correct: false },
      { text: 'Wrong!', correct: false }
    ]
  },
  {
    question: 'Pick the 2nd',
    answers: [
      { text: 'Wrong', correct: false },
      { text: 'Pick me', correct: true }
    ]
  }
]