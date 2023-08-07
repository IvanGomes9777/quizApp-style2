let questions=[{
    question:"What is 9 + 10?",
    answer_1:21,
    answer_2:19,
    answer_3:5,
    answer_4:7,
    right_answer:1,
},
{
    question:"R U GAY?",
    answer_1:"yes",
    answer_2:"No",
    answer_3:"No, but 20 Euro is 20 Euro",
    answer_4:"Sometimes",
    right_answer:3,
},
{
    question:"What is this?",
    answer_1:"that",
    answer_2:"this",
    answer_3:"there",
    answer_4:"okay",
    right_answer:2,
},
{
    question:"What is?",
    answer_1:21,
    answer_2:19,
    answer_3:5,
    answer_4:7,
    right_answer:1,
},
]
let currentQuestion=0;

function render(){
    document.getElementById('questions-length').innerHTML=questions.length;

    showQuestion();
}

function showQuestion(){

if (currentQuestion >= questions.length){
document.getElementById('endScreenNone').style='display:none';

document.getElementById('endScreen').style.display='block';
}else{
    
let question=questions[currentQuestion];

document.getElementById('question-number').innerHTML=currentQuestion+1;

document.getElementById('showCurrentQuestion').innerHTML=question['question'];

document.getElementById('answer_1').innerHTML=question['answer_1'];
document.getElementById('answer_2').innerHTML=question['answer_2'];
document.getElementById('answer_3').innerHTML=question['answer_3'];
document.getElementById('answer_4').innerHTML=question['answer_4'];
}
}

function answer(selection){
    let question=questions[currentQuestion];
    console.log('selected answer is', selection);

    let selectedQuestionNumber=selection.slice(-1);
    console.log('selectedQuestionNumber is', selectedQuestionNumber);
    console.log('Current Question is', question['right_answer']);

    idOfRightAnswer=`answer_${question['right_answer']}`;

    if(selectedQuestionNumber == question['right_answer']){
        document.getElementById(selection).parentNode.classList.add('bg-success');
    }else{
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled=false;
}

function nextQuestion(){
    currentQuestion++;
    document.getElementById('next-button').disabled=true;
    resetAnswerButton();
    
    showQuestion();

}

function resetAnswerButton(){
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}