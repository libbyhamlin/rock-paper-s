export const getRandomThrow = () => {
    const getThrow = Math.floor(Math.random() * 3);

    if (getThrow === 0) {
        return 'rock';
    } else if (getThrow === 1) {
        return 'paper';
    } else if (getThrow === 2) {
        return 'scissors';
    }
};

console.log(getRandomThrow());
