//variables
var qCounter = 0
var questions = []

var highScoreEl = document.querySelector("#highscore");
var timerEl = document.querySelector("#timer");
//var headerEl = document.querySelector(".intro h3")
//create question button

var questions = [
  {
    Question: "What is Javascript",

    Answers: {
     answer1: "A Programming Lanquage",
     answer2: "Hard as heck",
     answer3: "Worth Learning",
     answer4: "You can Do"
    },

    correctAnswer: "answer1"
  },
  {
    Question: "What does it all mean?",

    Answers: {
     answer1: "A Programming Lanquage",
     answer2: "Hard as heck",
     answer3: "Worth Learning",
     answer4: "You can Do"
    },

    correctAnswer: "answer3"
  },
  {
    Question: "What is coding",

    Answers: {
     answer1: "A Programming Lanquage",
     answer2: "Hard as heck",
     answer3: "Worth Learning",
     answer4: "You can Do"
    },

    correctAnswer: "answer4"
  },
  {
    Question: "What is life",

    Answers: {
     answer1: "A Programming Lanquage",
     answer2: "Hard as heck",
     answer3: "Worth Learning",
     answer4: "You can Do"
    },

    correctAnswer: "answer2"
  },
]


// button click to start quiz and to move to next set of questions
//var startBtnEl = document.querySelector("#startBtn");
//var closeIntro = document.querySelector(".intro")

//var startQuiz = document.querySelector("")

var highScoreHandler = function() {
     var scoreInput = document.querySelector("input[name ='highscore']").value;
     var initialsInput = document.querySelector("input[name='initials']").value;
     if (scoreInput === "" || initialsInput == "") {
         alert("You need to take the quiz to view a high score");
         return false;
     }
 };




//var taskButtonHandler = function() {
 // get target element from event sample below to start quiz:

//Intro Section -- StartPageHandler
var editIntroEl = document.querySelector("h1")
editIntroEl.textContent = ("Coding Quiz Challenge heak yeah!")
editIntroEl.className = (".intro")
var editIntroParaEl = document.querySelector(".intro p")
editIntroParaEl.textContent = ("Try to answer the following code-related question within the time limit.  Keep in mind incorrect answers will penalize you by 10 seconds!")
editIntroParaEl.className = (".intro p")
//start quiz button
var startBtnEl = document.querySelector(".intro button")
//startBtnEl = document.createElement("button");
startBtnEl.textContent = ("Start Quiz in JS") 
startBtnEl.className = ("button")

//var startBtnEl = document.querySelector("startBtnEl");
var startQuizHandler = function (){
  alert("it works!");
 
   //[WORKS]timer in top right corner with click
  var counter = 75
  var countdown = function(event) {
    timerEl.innerHTML = counter;
    counter--;
    if(counter === 0) {
      alert("Time's Up!");
           clearInterval (startCountdown);
    };
  };
 
  var startCountdown = setInterval(countdown, 1000);
};

startBtnEl.addEventListener("click", startQuizHandler);

//end countdown section

  //Start Question and Answers ()


//create 4 answers -- from module


var AddAnswer = document.querySelector("#answers");
//answersEl.document.createElement("button");
var createAnswerHandler = function() {
var answersEl = document.createElement("li");
answersEl.textContent = "Question Instead?";
answersEl.className = "button";
var allAnswersEl = document.createElement("div");
allAnswersEl.className = "button";
allAnswersEl.
allAnswersEl.innerHTML = "<h2 class='question'>" + 'Question InnerHTML' + "</h3>";
AddAnswer.appendChild(answersEl);


};
startBtnEl.addEventListener("click", createAnswerHandler);


//actionContainerEl.appendChild(answersEl);

//var createQuestionEl = function() {
//var actionContainerEl = document.createElement("div");
//actionContainerEl.className = (".questions");
//create Question
//var questionEl = document.elementSelector("ul");
var questionEl = document.createElement("div");
questionEl.className = "questions";
questionEl.innerHTML = "<ul class ='question'>'</ul>";
//questionEl.textContent = "Question One"
//actionContainerEl.appendChild(questionEl);

//createQuestionEl();
//};





//  var targetEl = event.target;

//  if (targetEl.matches(".edit-btn")) {
//    console.log("edit", targetEl);
//    var taskId = targetEl.getAttribute("data-task-id");
//    editTask(taskId);
//  } else if (targetEl.matches(".delete-btn")) {
//    console.log("delete", targetEl);
//    var taskId = targetEl.getAttribute("data-task-id");
//    deleteTask(taskId);
//  }

//create questions
// create edit button


//answers


//reset form fields?? may not be needed





//*High scores on left = link to High scores "page"
 
//page will be visible for list of high scores only
//scores are stored in local storage - and recalled when High Scores
//button is clicked
//there should also be a return to main button on this page

//*timer on right 
//timer working -need to set up to start on button click

//Intro section will show first then disappear
//*button to start quiz
//will cause all but header to disappear
//will cause 1st set of questions to appear,
//will cause timer to begin

//Questions section 
//1 questions with 4 answer button
//on any buttom click the "response" will appear with right or wrong"
//a divider line will appear befor response
//2 seconds later next question/answer will appear and continue
//until all answers are completed

//each right answer will add value of 10
//each wrong answer will subtract value of -10
// total will not go below 0

//after last question, last "page" will appear and show message
//and score, with opportunity to add initials
//initials and score will be saved to local storage

//Return to Intro Page (.intro) (button)