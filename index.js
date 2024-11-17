const questions = [
    {
        question:"which is largest in the world ?",
        answers: [
            {text:"Shark", correct: true},
            {text:"Blue whale", correct: false},
            {text:"Elephant", correct: false},
            {text:"Giraffe", correct: false},
        ]
    },
    {
        question:"which is the name of car brand ?",
        answers: [
            {text:"Goat", correct: false},
            {text:"Toyota", correct: true},
            {text:"Lion", correct: false},
            {text:"Cow", correct: false},
        ]
    },

    {
        question:"which is continent in the world ?",
        answers: [
            {text:"Asia", correct: false},
            {text:"Australia", correct: true},
            {text:"Arctic", correct: false},
            {text:"Africa", correct: false},

        ]
    },
    {
        question:"which is the best football player in the world ?",
        answers: [
            {text:"Shank", correct: false},
            {text:"Ronaldo", correct: true},
            {text:"Anthony Joshua", correct: false},
            {text:"Eminem", correct: false},
        ]
    },
];
// targeting our varialbles 

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("buttons");
const nextButton = document.getElementById("btn-next");
const previousButton = document.getElementById("btn-previous");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
   
    currentQuestionIndex = 0; // restart quiz to zero when quiz is started 
    score = 0;
    nextButton.innerHTML = "Next"  // display after answering questions 
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

startQuiz();