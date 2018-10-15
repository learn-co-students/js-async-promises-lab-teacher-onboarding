const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

const questionContainer = document.querySelector(".question-container")

appendQuestion = (q) =>
  questionContainer.innerText = q.questionText

askQuestionThen = (time) => {
  question = questions[0]
  appendQuestion(question)
  return new Promise(resolve => {
    setTimeout(() => resolve(question), time)
  })
}

removeQuestion = () => {
  questionContainer.innerHTML = ""
  toggleTrueAndFalseButtons()
}

askQuestionThenRemoveQuestion = (time) =>
  askQuestionThen(time).then(removeQuestion)

trueAndFalseButtons = () => {
  buttons = document.querySelector('.true-false-list').children
  return Array.from(buttons)
}


toggleTrueAndFalseButtons = () => trueAndFalseButtons()
.forEach(btn => {
  btn.classList.toggle('hide')
})


displayQuestionOnClick = (time) => {
  const askBtn = document.querySelector('.waves-effect')
  askBtn.addEventListener('click', e => {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(time)
  })
}

displayQuestionOnClick(3000)
