//Starting Data
//Set Variables
var timerEl = document.querySelector(".timer");
var startEl = document.querySelector("#start");
var optionA = document.getElementById("optionA");
var optionB = document.getElementById("optionB");
var optionC = document.getElementById("optionC");
var optionD = document.getElementById("optionD");
//Array of Options
var options = [optionA, optionB, optionC, optionD];
var question = document.querySelector("#question");
var secondsLeft = 10;
var score = 0;
//Array of Quesions for Quiz
var quiz = [
  // question 1
  {
    q1:
      "Neurologists believe that the brain's medial ventral prefrontal cortex is activated when you do what?",
    a1: "Have a panic attack",
    a2: "Remember a name",
    a3: "Get a joke",
    a4: "Listen to music",
  },
  // question 2
  {
    q2: "Which of these organs of the body is the largest?",
    b1: "Brain",
    b2: "Heart",
    b3: "Liver",
    b4: "Skin",
  },
  // question 3
  {
    q3: "How can we slow the spread of SARS-CoV-2?",
    c1: "Wearing face masks properly",
    c2: "Staying in enclosed areas with other people",
    c3: "Give everyone free hugs",
    c4: "Gathering for a birthday party",
  },
];
//Event Click first Function
// var hOne = document.createElement("h1")
// hOne.textContent = "This is the hOne element"
// document.body.append(hOne)
// hOne.setAttribute("style", "text-align:center")
// var displayQuestions = function () {
//   displayQuestions.value = ''
//   optionA.innerHTML = quiz[a1];
//   document.append(optionA);
// };

question.textContent = quiz[0]["q1"];

optionA.value = "";
optionA.innerHTML = quiz[0]["a1"];
optionB.value = "";
optionB.innerHTML = quiz[0]["a2"];
optionC.value = "";
optionC.innerHTML = quiz[0]["a3"];
optionD.value = "";
optionD.innerHTML = quiz[0]["a1"];

// console.log(displayQuestions);

//Array of Answers
var answers = [];

//User Interactions
//When we click on Start, timer countdown starts
startEl.addEventListener("click", function () {
  startEl.style.display = "none";
  var myInterval = setInterval(function () {
    timerEl.textContent = secondsLeft;
    secondsLeft--;
    if (secondsLeft === -1) {
      clearInterval(myInterval);
    }
  }, 1000);
});

// After timer starts, first question is displayed - create a display question functions
//call on some DOMS
//Handler Functions===============================================================================
// Check answer - use answer array and .include
//if it is correct
//alert yay!
//then move to the next question
// Else if it is wrong
// alert wrong,
//ten seconds taken away,
// move to the next question
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//Display Input===============================================================================
//WHEN the game is over
//Clear screen
//Reset Timer
//Submit Button appears
//THEN I can save my initials and score
//When click submit button
//Return to the beginning of quiz
