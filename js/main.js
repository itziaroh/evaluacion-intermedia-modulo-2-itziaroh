'use strict';

const numberInput = document.querySelector('#number');
const tryButton = document.querySelector('#button');
const clueText = document.querySelector('#clue-text');
const attemptText = document.querySelector('#attempt-text');

const getRandomNumber = () => {
    return Math.ceil(Math.random() * 100);
}
console.log(getRandomNumber());

function selectedNumber() {
    console.log(numberInput.value);
}

function checkSelectedNumber() {
    if (parseInt(numberInput.value) === getRandomNumber()) {
        clueText.innerHTML = 'Has ganado campeona!!!';
    }
    if (parseInt(numberInput.value) < getRandomNumber()) {
        clueText.innerHTML = 'Demasiado bajo';
    }
    if (getRandomNumber() < parseInt(numberInput.value)) {
        clueText.innerHTML = 'Demasiado alto';
    }
    if (parseInt(numberInput.value < 1 || parseInt(numberInput.value) > 100)) {
        clueText.innerHTML = 'El número debe estar entre 1 y 100';
    }
}

let clickCount = 0;
function clickCountAdd() {
    clickCount += 1;
    attemptText.innerHTML = `Numero de intentos: ${clickCount}`;
}

function pressButton() {
    selectedNumber();
    checkSelectedNumber();
    clickCountAdd();
}


tryButton.addEventListener('click', pressButton);