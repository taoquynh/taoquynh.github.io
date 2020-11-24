
var currentQuestion = 0;
var score = 0;
var toQuestion = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var replay = document.getElementById('replay');
var firework = document.getElementById('canvas');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion(questionIndex) {
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;

}

function reset() {
    location.reload();
}

function hideFirst() {
    var first = document.getElementById('first');
    first.style.display = 'none';
}

function start() {
    container.style.display = 'block';
    hideFirst();
    loadQuestion();
}

function showButton() {
    replay.style.display = 'block';
}

function showFirework() {
    firework.style.display = 'block';
}

function loadNextQuestion() {
    var selectedOption = document.querySelector('input[type = radio]:checked');
    if (!selectedOption) {
        alert('Please select your answer!');
        return;
    }
    var answer = selectedOption.value;
    if (questions[currentQuestion].answer == answer) {
        score += 10;
    }

    selectedOption.checked = false;
    currentQuestion++;
    if (currentQuestion == toQuestion - 1) {
        nextButton.textContent = 'Finish';
    }
    if (currentQuestion == toQuestion) {
        container.style.display = 'none';
        resultCont.style.display = '';

        if (score == questions.length * 10) {
            resultCont.textContent = "Chúc mừng, bạn biết rất nhiều về Việt Nam!";
            showFirework();
            return
        }
        else if (score == 0) {
            resultCont.textContent = "Oh, không! Bạn không biết gì về Việt Nam";
            showButton();
            return;
        }
        else {
            resultCont.textContent = 'Chà, bạn hãy cố gắng hơn nhé! Your score: ' + score;
            showButton();
            return;
        }

    }
    loadQuestion(currentQuestion);

}

loadQuestion(currentQuestion);