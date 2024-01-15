let questions = [
    {
        question: "Question 1?",
        answer1: "Julian",
        answer2: "Peter",
        answer3: "Diandel",
        answer4: "Wolfgang",
        right_answer: 1,
    },
    {
        question: "Question 2?",
        answer1: "Peter",
        answer2: "Diandel",
        answer3: "Peter",
        answer4: "Hans",
        right_answer: 2,
    },
    {
        question: "Question 3?",
        answer1: "Werne",
        answer2: "Uwe",
        answer3: "Reinhalt",
        answer4: "Ingeborg",
        right_answer: 3,
    },
    {
        question: "Question 3?",
        answer1: "Werne",
        answer2: "Uwe",
        answer3: "Reinhalt",
        answer4: "Ingeborg",
        right_answer: 3,
    },
    {
        question: "Question 3?",
        answer1: "Werne",
        answer2: "Uwe",
        answer3: "Reinhalt",
        answer4: "Ingeborg",
        right_answer: 3,
    },
];

let currentQuestion = 0;
let rightAnswers = 0;

function init() {
    getQuestions();
    getPercentage();
}

function getQuestions() {
    actualQuestion = questions.length;
    document.getElementById("currentNumber").innerHTML = currentQuestion + 1;
    document.getElementById("totalQuestions").innerHTML = actualQuestion;

    document.getElementById("question").innerHTML = questions[currentQuestion]["question"];
    document.getElementById("answer1").innerHTML = questions[currentQuestion]["answer1"];
    document.getElementById("answer2").innerHTML = questions[currentQuestion]["answer2"];
    document.getElementById("answer3").innerHTML = questions[currentQuestion]["answer3"];
    document.getElementById("answer4").innerHTML = questions[currentQuestion]["answer4"];
}

function correctAnswer(answerUser) {
    let answer = answerUser.slice(-1);

    let idRightAnswer = `answer${questions[currentQuestion]["right_answer"]}`;

    if (returnCorrectAnswer(answer)) {
        document.getElementById(answerUser).parentElement.style.backgroundColor = "#DCFFF1";
    } else {
        document.getElementById(answerUser).parentElement.style.backgroundColor = "red";
        document.getElementById(idRightAnswer).parentElement.style.backgroundColor = "#DCFFF1";
    }
    document.getElementById("nextQuestion").disabled = false;
}

function returnCorrectAnswer(answer) {
    return answer == questions[currentQuestion]["right_answer"];
}

function nextQuestion() {
    currentQuestion++;
    getPercentage();
    getQuestions();
}

function getPercentage() {
    let hundret = 100 / questions.length;
    let percentage = hundret * currentQuestion;
    document.getElementById("progress-bar").style.width = `${percentage}%`;
    console.log(percentage);
}
