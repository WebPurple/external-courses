function getIntegerRandomNumber (){
    let rand = Math.random() * (101);
    return Math.floor(rand);
}
module.exports = getIntegerRandomNumber;