export const getRandomThrow = (getThrow) => {
    if (getThrow === 1) {
        return 'rock';
    } else if (getThrow === 2) {
        return 'paper';
    } else if (getThrow === 3) {
        return 'scissors';
    }
};
