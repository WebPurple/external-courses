const getRandomNumber = () => {
    min = 0
    max = 100;
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = getRandomNumber();
