// Import function
import { getRandomThrow } from './get-random-throw.js';

// Initialize/fetch DOM elements
const userLabel = document.getElementById('user-label');
const compLabel = document.getElementById('comp-label');

const rockId = document.getElementById('rock');
const paperId = document.getElementById('paper');
const scissorsId = document.getElementById('scissors');
const submitBtn = document.getElementById('submit-button');
const winsSpan = document.getElementById('wins');
const losesSpan = document.getElementById('loses');
const tiesSpan = document.getElementById('ties');
const userScore = document.getElementById('0');
const compScore = document.getElementById('0');

functiion startGame(userChoice); {
 const choice

 
function main() {
    rockId.addEventListener('click', function() {
        // game('rock');
    console.log('hello you clicked rock');
    });

    paperId.addEventListener('click', function() {
        console.log('hey you clicked on a button');
        game('paper');
    });

    scissorsId.addEventListener('click', function() {
        console.log('hey you clicked on a button');
        game('scissors');
    });

    submitBtn.addEventListener('click', () => {});
}

// Steps
// - Import function
// - Import/fetch DOM elements
// - add your event handlers aka:
// - submitButton.addEventListener('click', () => {}
// - Make sure you created a button if you haven't.

//What happens when we click on each button?
// 1. If we click on rock: Take the value and compare it against the computer's choice which will be a random choice between the three actions.
// 2.Then compare those two
// 3.Then check who wins
// 4.Then display the result back on the DOM

// Set inital state
// Leave alone for now

// Set Event handlers

// submitBtn.addEventListener('click', () => {}); Will need two
