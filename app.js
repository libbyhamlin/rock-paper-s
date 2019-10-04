// Import function
import { getRandomThrow } from './get-random-throw.js';

// Initialize/fetch DOM elements
const userLabel = document.getElementById('user-label');
const compLabel = document.getElementById('comp-label');

const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissors = document.getElementById('s');
const ctaMessage = document.getElementById('cta-message');
const submitBtn = document.getElementById('submit-button');
const userScore = document.getElementById('0');
const compScore = document.getElementById('0');

//What happens when we click on each button?
// 1. If we click on rock: Take the value and compare it against the computer's choice which will be a random choice between the three actions.
// 2.Then compare those two
// 3.Then check who wins
// 4.Then display the result back on the DOM

// Set inital state
// Leave alone for now

// Set Event handlers

submitBtn.addEventListener('click', () => {
    const compThrow = Math.floor(Math.random() * 3);
    const playerThrow = document.querySelector('input:checked').value;

    const result = checkResults(playerThrow, compThrow);
    console.log(playerThrow, 'This is the players choice');
    console.log(compThrow, 'This is the comps choice');
    //if (gameResult === 'Tie') {
    //     result.textContent = 'Tie';
    //     ties = ties + 1;
    //     numberOfTies.textContent = ties;
    // } else if (gameResult === 'Win') {
    //     result.textContent = 'You won wow!'; 
    //     wins = wins + 1;
    //     numberOfWins.textContent = wins;
    // } else if (gameResult === 'Lose') {
    //     result.textContent = 'You lost. Try again';
    //     loses = loses + 1;
    //     numberOfLoses.textContent = loses;
    // }




    use get ran thrw function and pass in the Randomly generated number and 
});

// Steps
// - Import function
// - Import/fetch DOM elements
// - add your event handlers aka:
// - submitButton.addEventListener('click', () => {}
// - Make sure you created a button if you haven't.
