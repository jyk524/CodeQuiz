// Write JavaScript here //Starting Data
//Set Variables
//These variables direct to specific ID's in the HTML
var timerEl = document.querySelector(".timer");
var startEl = document.querySelector("#start");
var optionA = document.querySelector("#optionA");
var optionB = document.querySelector("#optionB");
var optionC = document.querySelector("#optionC");
var optionD = document.querySelector("#optionD");;
var question = document.querySelector("#question");
var secondsLeft = 180;
var score = 0;
var buttons = document.querySelector(".button");

//Array of Quesions for Quiz
// set as an array of objects
var quiz = [
  // question 1
  {
    q0: "Which of these is not a Javascript Datatype?",
    a0: "Boolean",
    b0: "String",
    c0: "Integer",
    d0: "Java",
  },
  // question 2
  {
    q1: "Which of these is a not a Javascript method?",
    a1: "var",
    b1: "Jiu-Jitsu",
    c1: "while",
    d1: "if",
  },
  // question 3
  {
    q2: "Which was not a Javascript Homework?",
    a2: "Create a pizza",
    b2: "Create a password generator",
    c2: "Create a profile website",
    d2: "Create a quiz",
  },
  {
    q3: "",
    a3: "end quiz",
    b3: "",
    c3: "",
    d3: "",
  },
];

//these check answer functions will check to see if the button clicked is the correct answer
function checkAnswerA() {
  var questionData = quiz[questionNumber]["a" + questionNumber];
  var correctAnswer = answers[questionNumber];
  console.log("we are here!", questionData, correctAnswer);
  if (questionData === correctAnswer) {
    score++;
    questionNumber++;
    displayCorrectMessage();
  } else {
    secondsLeft -= 10;
    questionNumber++;
    displayWrongMessage();
  }
}
function checkAnswerB() {
  var questionData = quiz[questionNumber]["b" + questionNumber];
  var correctAnswer = answers[questionNumber];
  console.log("we are here!", questionData, correctAnswer);
  if (questionData === correctAnswer) {
    score++;
    questionNumber++;
    displayCorrectMessage();
  } else {
    secondsLeft -= 10;
    questionNumber++;
    displayWrongMessage();
  }
}
function checkAnswerC() {
  var questionData = quiz[questionNumber]["c" + questionNumber];
  var correctAnswer = answers[questionNumber];
  console.log("we are here!", questionData, correctAnswer);
  if (questionData === correctAnswer) {
    score++;
    questionNumber++;
    displayCorrectMessage();
  } else {
    secondsLeft -= 10;
    questionNumber++;
    displayWrongMessage();
  }
}
function checkAnswerD() {
  var questionData = quiz[questionNumber]["d" + questionNumber];
  var correctAnswer = answers[questionNumber];
  console.log("we are here!", questionData, correctAnswer);
  if (questionData === correctAnswer) {
    score++;
    questionNumber++;
    displayCorrectMessage();
  } else {
    secondsLeft -= 10;
    questionNumber++;
    displayWrongMessage();
  }
}

// these functions will trigger when one of the multiple choice questions are chosen
optionA.addEventListener("click", checkAnswerA);
optionB.addEventListener("click", checkAnswerB);
optionC.addEventListener("click", checkAnswerC);
optionD.addEventListener("click", checkAnswerD);


//Array of Answers used to check correct answers
var questionNumber = 0;
var answers = ["Java", "Jiu-Jitsu", "Create a pizza"];
var clicks = 0;

//User Interactions
//When we click on Start, timer countdown starts, when the quiz ends or timer reaches zero the test is over
startEl.addEventListener("click", function () {
  startEl.style.display = "none";
  clicks++;
  var myInterval = setInterval(function () {
    timerEl.textContent = secondsLeft;
    displayQuestion();
    secondsLeft--;
    if (secondsLeft <= 0) {
      clearInterval(myInterval);
    }
  }, 1000);
});

//these functions use the buttons and header in the html to populate the questions and the answers
function displayQuestion() {
  question.textContent = quiz[questionNumber]["q" + questionNumber];
  optionA.value = "";
  optionA.innerHTML = quiz[questionNumber]["a" + questionNumber];
  optionB.value = "";
  optionB.innerHTML = quiz[questionNumber]["b" + questionNumber];
  optionC.value = "";
  optionC.innerHTML = quiz[questionNumber]["c" + questionNumber];
  optionD.value = "";
  optionD.innerHTML = quiz[questionNumber]["d" + questionNumber];
}
// gives feedback to the user on their choice
function displayCorrectMessage() {
  results.textContent = "You were right! Here is your score: " + score;
}
function displayWrongMessage() {
  results.textContent = "You were wrong! Here is your score: " + score;
}

// helper function

//testing a for loop but didn't work
// buttons.addEventListener("click", function () {
//   var i = 0;
//   i++;
//   if (i < quiz.length) {
//     // event.stopPropagation();
//     question.textContent = quiz[i]["q" + `${i}`];
//     optionA.value = "";
//     optionA.innerHTML = quiz[i]["a" + `${i}`];
//     optionB.value = "";
//     optionB.innerHTML = quiz[i]["b" + `${i}`];
//     optionC.value = "";
//     optionC.innerHTML = quiz[i]["c" + `${i}`];
//     optionD.value = "";
//     optionD.innerHTML = quiz[i]["d" + `${i}`];
//     console.log(i);
//   }
// });

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
