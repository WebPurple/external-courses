function randomNum (min, max) {
    let min1 = Math.ceil(min);
    let max1 = Math.floor(max);
    return Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
}
module.exports = randomNum