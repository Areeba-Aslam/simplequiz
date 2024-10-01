var mcqs = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Rome", "Berlin"],
        correct: 0
    },
    {
        question: "What is 5 + 7?",
        answers: ["10", "12", "13", "14"],
        correct: 1
    },
    {
        question: "What is the largest ocean of the World?",
        answers: ["Pacific", "Indian", "Arctic", "Atlantic"],
        correct: 0
    },
    {
        question: "Who invented the Bulb?",
        answers: ["Charles", "Alexander", "Edison", "Franklin"],
        correct: 2
    },
    {
        question: "What was the name of the first computer virus?",
        answers: ["Actifed", "Bomber", "Abraxas", "Creeper"],
        correct: 3
    },
];

var current = 0;
var score = 0;

function load() {
    var question = mcqs[current];
    document.getElementById("question").innerHTML = question.question;
    
    var answersHtml = '';
    
    for (var i = 0; i < question.answers.length; i++) {
        answersHtml += '<div class="form-check"><input class="form-check-input" type="radio" name="answer" value="' + i + '"> <label class="form-check-label">' + question.answers[i] + '</label></div>';
    }
    
    document.getElementById("answer").innerHTML = answersHtml;
    document.getElementById("answer").innerHTML += '<br><button class="btn btn-primary" onclick="submitAnswer()">Submit Answer</button>';
}

function submitAnswer() {
    var selected = document.querySelector('input[name="answer"]:checked');

    if (selected) {
        var selectedValue = parseInt(selected.value);
        checkAnswer(selectedValue);
    } else {
        alert("Please select an answer!");
    }
}

function checkAnswer(selected) {
    if (selected === mcqs[current].correct) {
        score++;
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }
    current++;
    if (current < mcqs.length) {
        load();
    } else {
        document.getElementById("question").innerHTML = 'Quiz over! You scored ' + score + ' out of ' + mcqs.length + '.';
        document.getElementById("answer").innerHTML = "";
    }
}

(function () {
    load();
})();
