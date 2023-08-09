let questions = [
  {
    question: "What is 9 + 10?",
    answer_1: 21,
    answer_2: 19,
    answer_3: 5,
    answer_4: 7,
    right_answer: 1,
  },
  {
    question: "R U GAY?",
    answer_1: "yes",
    answer_2: "No",
    answer_3: "No, but 20 Euro is 20 Euro",
    answer_4: "Sometimes",
    right_answer: 3,
  },
  {
    question: "What is this?",
    answer_1: "that",
    answer_2: "this",
    answer_3: "there",
    answer_4: "okay",
    right_answer: 2,
  },
  {
    question: "What is?",
    answer_1: 21,
    answer_2: 19,
    answer_3: 5,
    answer_4: 7,
    right_answer: 1,
  },
];

let answerClicked = false;

let rightQuestion = 0;
let currentQuestion = 0;

let AUDIO_SUCCESS = new Audio("audio/tada-sound.mp3");
let AUDIO_FAIL = new Audio("audio/fail-sound.mp3");

function render() {
  document.getElementById("questions-length").innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  if (gameOver()) {
    showEndScreen();
  } else {
    updateProgressBar();
    showNextQuestion();
  }
}

function gameOver(){
  return currentQuestion >= questions.length;
}

function updateProgressBar(){
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById("progress-bar").innerHTML = `${percent}%`;
    document.getElementById("progress-bar").style = `width:${percent}%;`;
}

function showNextQuestion(){
    let question = questions[currentQuestion];
    document.getElementById("question-number").innerHTML = currentQuestion + 1;
    document.getElementById("showCurrentQuestion").innerHTML =question["question"];
    document.getElementById("answer_1").innerHTML = question["answer_1"];
    document.getElementById("answer_2").innerHTML = question["answer_2"];
    document.getElementById("answer_3").innerHTML = question["answer_3"];
    document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function showEndScreen() {
  document.getElementById("endScreenNone").style = "display:none";
  document.getElementById("endScreen").style.display = "block";
  document.getElementById("amountEndScreenQuestions").innerHTML = questions.length;
  document.getElementById("amountRightQuestions").innerHTML = rightQuestion;
}

function answer(selection) {
  if (answerClicked) {
    return;
  }
  answerClicked = true;

  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);
  idOfRightAnswer = `answer_${question["right_answer"]}`;

  if (correctAnswer(selectedQuestionNumber)) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
    rightQuestion++;
    AUDIO_SUCCESS.play();
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document.getElementById(idOfRightAnswer).parentNode.classList.add("bg-success");
    AUDIO_FAIL.play();
  }

  document.getElementById("next-button").disabled = false;
}

function correctAnswer(selectedQuestionNumber){
    return selectedQuestionNumber == questions["right_answer"];
}

function failedAnswer(){
    
}

function successAnswer(){
    
}

function nextQuestion() {
  answerClicked = false;
  currentQuestion++;
  document.getElementById("next-button").disabled = true;
  resetAnswerButton();
  showQuestion();
}

function resetAnswerButton() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
}

function restartGame() {
  document.getElementById("endScreen").style.display = "none";
  document.getElementById("endScreenNone").style.display = "block";
  rightQuestion = 0;
  currentQuestion = 0;
  render();
}
