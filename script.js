let questions = [
    {
        question: "Question 1?",
        answer1: "Lorem Ipsum",
        answer2: "Lorem Ipsum",
        answer3: "Lorem Ipsum",
        answer4: "Lorem Ipsum",
        right_answer: 1,
    },
    {
        question: "Question 2?",
        answer1: "Lorem Ipsum",
        answer2: "Lorem Ipsum",
        answer3: "Lorem Ipsum",
        answer4: "Lorem Ipsum",
        right_answer: 1,
    },
    {
        question: "Question 3?",
        answer1: "Lorem Ipsum",
        answer2: "Lorem Ipsum",
        answer3: "Lorem Ipsum",
        answer4: "Lorem Ipsum",
        right_answer: 1,
    },
    {
        question: "Question 4?",
        answer1: "Lorem Ipsum",
        answer2: "Lorem Ipsum",
        answer3: "Lorem Ipsum",
        answer4: "Lorem Ipsum",
        right_answer: 1,
    },
    {
        question: "Question 5?",
        answer1: "Lorem Ipsum",
        answer2: "Lorem Ipsum",
        answer3: "Lorem Ipsum",
        answer4: "Lorem Ipsum",
        right_answer: 1,
    },
];

let currentQuestion = 0;
let rightAnswers = 0;
let rightIcon = `checkIcon${questions[currentQuestion]["right_answer"]}`;

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
        document.getElementById(rightIcon).classList.remove("d-none");
    } else {
        document.getElementById(answerUser).parentElement.style.backgroundColor = "red";
        document.getElementById(idRightAnswer).parentElement.style.backgroundColor = "#DCFFF1";
        document.getElementById(rightIcon).classList.remove("d-none");
    }
    document.getElementById("nextQuestion").disabled = false;
}

function returnCorrectAnswer(answer) {
    return answer == questions[currentQuestion]["right_answer"];
}

function nextQuestion() {
    currentQuestion++;
    resetAnswers();
    getPercentage();
    getQuestions();
}

function getPercentage() {
    let hundret = 100 / questions.length;
    let percentage = hundret * currentQuestion;
    document.getElementById("progress-bar").style.width = `${percentage}%`;
    console.log(percentage);
}

function resetAnswers() {
    document.getElementById("nextQuestion").disabled = true;
    document.getElementById(rightIcon).classList.add("d-none");

    for (let i = 1; i <= 4; i++) {
        document.getElementById(`answer${i}`).parentElement.style.backgroundColor = "";
    }
    return;
}
