let countries;
let currentCountry;

async function loadCountries() {
    const response = await fetch('countries.json');
    countries = await response.json();
    nextQuestion();
}

function nextQuestion() {
    currentCountry = countries[Math.floor(Math.random() * countries.length)];
    document.getElementById('country').textContent = currentCountry.Country;
    document.getElementById('answer').value = '';
    document.getElementById('result').textContent = '';
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const correctAnswer = currentCountry.Capital.toLowerCase();
    if (userAnswer === correctAnswer) {
        document.getElementById('result').textContent = 'Correct!';
    } else {
        document.getElementById('result').textContent = `Incorrect. The correct answer is ${currentCountry.Capital}.`;
    }
    
}

document.getElementById('submit').addEventListener('click', () => {
    if (document.getElementById('result').textContent) {
        nextQuestion();
    } else {
        checkAnswer();
    }
});

document.getElementById('answer').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        if (document.getElementById('result').textContent) {
            nextQuestion();
        } else {
            checkAnswer();
        }
    }
});

document.addEventListener('DOMContentLoaded', loadCountries);
