'use strict';

const numberInput = document.querySelector('#number');
const tryButton = document.querySelector('#button');
const clueText = document.querySelector('#clue-text');
const attemptText = document.querySelector('#attempt-text');

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
console.log(getRandomNumber(100));