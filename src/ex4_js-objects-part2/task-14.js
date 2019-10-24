function returnRandomMinMax(minimum,maximum){
    let min = Math.ceil(minimum);
    let max = Math.floor(maximum);
    return Math.floor(Math.random() * (max - min) + min);
}

module.exports = returnRandomMinMax;