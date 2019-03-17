function roundThreeDec(a, b) {
    var c = a + b;
    c = +c.toFixed(3);
    return c;
}
module.exports = roundThreeDec
