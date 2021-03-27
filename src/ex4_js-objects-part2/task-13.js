const getRandomNumber = () => {
    min = Math.ceil(0);
    max = Math.floor(100);
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = getRandomNumber;
