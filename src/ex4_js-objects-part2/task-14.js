const getRandomNumber = (inputMin, inputMax) => {
    min = Math.ceil(inputMin);
    max = Math.floor(inputMax);
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = getRandomNumber;
