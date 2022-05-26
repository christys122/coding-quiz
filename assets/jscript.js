//variables
var qCounter = 0
var questions = []

var highScoreEl = document.querySelector("#highscore");
var timerEl = document.querySelector("#timer");
// button click to start quiz and to move to next set of questions
var startBtnEl = document.querySelector("#startBtn");
var closeIntro = document.querySelector(".intro")

//var startQuiz = document.querySelector("")

var highScoreHandler = function() {
     var scoreInput = document.querySelector("input[name ='highscore']").value;
     var initialsInput = document.querySelector("input[name='initials']").value;
     if (scoreInput === "" || initialsInput == "") {
         alert("You need to take the quiz to view a high score");
         return false;
     }
 };

 //[WORKS]timer in top right corner
 var counter = 75
 var countdown = function() {
   timerEl.innerHTML = counter;
   counter--;
   if(counter === 0) {
     alert("Time's Up!");
     clearInterval (startCountdown);
   };
 };

 var startCountdown = setInterval(countdown, 1000);


//createtask(showQuestions)

//Intro Page (.intro) (button)

//var taskButtonHandler = function() {
 // get target element from event sample below to start quiz:
startBtnEl.addEventListener("click", function() {
  alert("it works!");
  closeIntro.visible=false;
  startCountdown

  //showQuestions ()
});


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




//reset form fields?? may not be needed





//High scores on left = link to High scores "page"


//page will be visible for list of high scores only
//scores are stored in local storage - and recalled when High Scores
//button is clicked
//there should also be a return to main button on this page

//timer on right 
//

//Intro section will show first then disappear
//buttom to start quiz
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