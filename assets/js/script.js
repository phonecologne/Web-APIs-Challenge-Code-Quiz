var startButton = document.getElementById("start-button")
var startArea = document.getElementById("start")
var quizArea = document.getElementById("question-area")
var questiontext = document.getElementById("question-text")
var currentQuestion = 0
var buttonOne = document.getElementById("button-one")
var buttonTwo = document.getElementById("button-two")
var buttonThree = document.getElementById("button-three")
var buttonFour = document.getElementById("button-four")
var questions = [{question:"What does the period . in above the command above mean?", choices: ["A single period . tells the computer we're referring to the current active directory", "A new start to code", "A shortcut to ending your document", "Print Screen"],correctAnswer: "A single period . tells the computer we're referring to the current active directory"}]
startButton.addEventListener("click", function(){
    startArea.style.display = "none"
    quizArea.style.display = "flex"
questiontext.innerText = questions[currentQuestion].question
buttonOne.innerText = questions[currentQuestion].choices[0]
buttonTwo.innerText = questions[currentQuestion].choices[1]
buttonThree.innerText = questions[currentQuestion].choices[2]
buttonFour.innerText = questions[currentQuestion].choices[3]
})
quizArea.addEventListener("click", function(event){
    console.log(event.target)
    var userChoice = event.target.innerText
    console.log(userChoice)
    if(userChoice === questions[currentQuestion].correctAnswer){
        console.log("correct")
    }
})

(function loop(){
    setTimeout(function() {
       loop();
   }, delay);
 })();