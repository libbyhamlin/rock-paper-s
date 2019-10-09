export const compThrow = playerThrow => {
    const getThrow = Math.floor(Math.random() * 3);
    if (playerThrow === 0) {
        return 'rock';
    } else if (playerThrow === 1) {
        return 'paper';
    } else if (playerThrow === 2) {
        return 'scissors';
    }
};

// console.log(getRandomThrow());

//Your console log test your function
function compChoice() {
    const choices = [rock, paper, scissors];
    console.log(Math.floor(Math.random() * 3);
    return choices[randomNumber];
