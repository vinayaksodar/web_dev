let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');

const guessField = document.querySelector('.guessField');

let guessCount =1;
let resetButton;

function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount==1){
        guesses.textContent="Previous guesses"
    
    
    }
    guesses.textContent = `${guesses.textContent} ${userGuess}`
    guessCount++;
}

guessSubmit.addEventListener('click', checkGuess);