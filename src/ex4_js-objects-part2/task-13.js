const min = 0;
const max = 100;

const getRandomNum = () => Math.floor(Math.random() * (max - min + 1) + min);

module.exports = getRandomNum;
