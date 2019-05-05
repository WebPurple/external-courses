function countSymb(str) {
    var objSymb = {};
    for (var i = 0; i < str.length; i++) {
        if (str[i] in objSymb) {
            objSymb[str[i]] += 1;
        } else {
            objSymb[str[i]] = 1;
        }
    }
    for (var key in objSymb) {
        if (objSymb.hasOwnProperty(key)) {
            console.log(`${key}: ${objSymb[key]}`);
        }
    }
}
module.exports = countSymb

