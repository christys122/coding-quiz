//variables
var qCounter = 0
var questions = []

var highScoreEl = document.querySelector("#highscore");
var timerEl = document.querySelector("#timer");

var quizContainerEl = document.createElement("div");
var quizContainer = document.querySelector("#quests-content");
var resultsContainer = document.getElementById("results");

//questions variable

var Myquestions = [
  {
    question: "What is Javascript",

    answers: {
     a: "A Programming Lanquage",
     b: "Hard as heck",
     c: "Worth Learning",
     d: "You can Do"
    },

    correctAnswer: "a"
  },
  {
    question: "What does it all mean?",

    answers: {
     a: "A Programming Lanquage",
     b: "Hard as heck",
     c: "Worth Learning",
     d: "You can Do"
    },

    correctAnswer: "c"
  },
  {
    question: "What is coding",

    answers: {
      a: "A Programming Lanquage",
      b: "Hard as heck",
      c: "Worth Learning",
      d: "You can Do"
    },

    correctAnswer: "d"
  },
  {
    question: "What is life",

    answers: {
      a: "A Programming Lanquage",
      b: "Hard as heck",
      c: "Worth Learning",
      d: "You can Do"
    },

    correctAnswer: "b"
  },
];

//placeholder for questions
var quizContainer = document.getElementById("quests-content");
 
  function generateQuiz(questions, quizContainer){

  //function showQuestions(questions, quizContainer){

// combine questions and answers  
var output = [];
var answers;

for(var i=0; i<questions.length; i++){
  answers = [];
  
  for(letter in questions[i].answers){

  answers.push(
    '<button>' + '<name = "question' + i +'" value="' + letter + '">' + letter + ':'
    + questions[i].answers[letter] + '</button>'
    
  );
}

output.push(
  '<div class="quests">' + questions[i].question + '</div>'
  + '<div class="button">' + answers.join('') + '</div>'

  );

//shows questions and answers on page
  quizContainer.innerHTML = output.join('')

  // var showQuestions = function() {
  //   var 
  //   output.appendChild(quizContainer);
  
}
// var quizQuestionsEl = document.createElement("button");
// quizQuestionsEl.textContent = answers.join('');
// quizQuestionsEl.className = "button";


//   quizContainerEl.appendChild(quizQuestionsEl);
};

//showQuestions(questions, quizContainer); not needed?

// button click to start quiz and to move to next set of questions
//var startBtnEl = document.querySelector("#startBtn");
//var closeIntro = document.querySelector(".intro")
//var startQuiz = document.querySelector("")

// enter high score and initials after completion

function highScoreHandler() {
  var scoreInput = document.querySelector("input[name ='highscore']").value;
  var initialsInput = document.querySelector("input[name='initials']").value;
  if (scoreInput === "" || initialsInput == "") {
    alert("You need to take the quiz to view a high score");
    return false;
  }
}
 // }



//var taskButtonHandler = function() {
 // get target element from event sample below to start quiz:

//Intro Section shows first on page -- need to disappear
//var StartPageHandler
var editIntroEl = document.querySelector("h1")
var editIntroParaEl = document.querySelector(".intro p")
var startBtnEl = document.querySelector(".intro button")

  
editIntroEl.textContent = ("Coding Quiz Challenge")
editIntroEl.className = (".intro")
editIntroParaEl.textContent = ("Try to answer the following code-related question within the time limit.  Keep in mind incorrect answers will penalize you by 10 seconds!")
editIntroParaEl.className = (".intro p")
//start quiz button

startBtnEl.textContent = ("Start Timer") 
startBtnEl.className = ("button")

//
questContentEl = document.querySelector("#quests-content")
questContentEl.addEventListener("click", generateQuiz);

//var startBtnEl = document.querySelector("startBtnEl");
var startQuizHandler = function (){
  alert("it works!");
 
   //sets timer in top right corner with click
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
//end countdown section

//start quiz timer and start questions -- replace intro
startBtnEl.addEventListener("click", startQuizHandler)
startBtnEl.addEventListener("click", generateQuiz, quizContainer);

//shows questions now -- need to set interval
generateQuiz(Myquestions, quizContainer);


function showResults(questions, quizContainer, resultsContainer){
      
  // gather answer in container
  var answerContainers = quizContainer.querySelectorAll('.answers');
  
  // keep track of user's answers
  var userAnswer = '';
  var numCorrect = 0;
  
  // for each question...
  for(var i=0; i<questions.length; i++){

    // find selected answer
    userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')).value;
    
    // if answer is correct
    if(userAnswer===questions[i].correctAnswer){
      // add to the number of correct answers
      numCorrect++;
    //adds points
    }
  }

  //set up for showing score and add initials
  //*High scores on left = link to High scores "page"
  //page will be visible for list of high scores only
//scores are stored in local storage - and recalled when High Scores
//button is clicked
//there should also be a return to main button on this page
  submitButton.onclick = function(){
    showResults(resultsContainer);
  }

}



// var AddAnswer = document.querySelector("#answers");
// //answersEl.document.createElement("button");
// var createAnswerHandler = function() {
// var answersEl = document.createElement("li");
// answersEl.textContent = "Question Instead?";
// answersEl.className = "button";
// var allAnswersEl = document.createElement("div");
// allAnswersEl.className = "button";
// allAnswersEl.
// allAnswersEl.innerHTML = "<h2 class='question'>" + 'Question InnerHTML' + "</h3>";
// AddAnswer.appendChild(answersEl);


//};     
//startBtnEl.addEventListener("click", createAnswerHandler);


//actionContainerEl.appendChild(answersEl);

//var createQuestionEl = function() {
//var actionContainerEl = document.createElement("div");
//actionContainerEl.className = (".questions");
//create Question
//var questionEl = document.elementSelector("ul");
// var questionEl = document.createElement("div");
// questionEl.className = "questions";
// questionEl.innerHTML = "<ul class ='question'>'</ul>";
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

 




//on any buttom click the "response" will appear with right or wrong"
//a divider line will appear befor response
//2 seconds later next question/answer will appear and continue
//until all answers are completed

//each right answer will add value of 25
//each wrong answer will subtract value of -10
// total will not go below 0

//after last question, last "page" will appear and show message
//and score, with opportunity to add initials
//initials and score will be saved to local storage

//Return to Intro Page (.intro) (button)