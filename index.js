// Your Code Here
let userName = window.prompt('Please enter your name: ')
let userScore = 0;

for (let i = 0; i < questions.length; i++) {
    let question = questions[i]
    let answer = window.prompt(question.text)
    let userAnswer = answer.toUpperCase()
    if(userAnswer === question.correctAnswer) { userScore = userScore + 10 }
    console.log("Answer: " + userAnswer + ", correct: " + question.correctAnswer)
}

window.alert ('Your score is: ' + userScore)