function countOfDifferentLetters (str){
    let results = Array.prototype.reduce.call(str, 
        function (obj, letter) {
            if (obj[letter] === undefined) {
                obj[letter] = 0;//eslint-disable-line no-param-reassign
            }
            obj[letter] += 1;//eslint-disable-line no-param-reassign
            return obj;
        }, {});
    for (let letter in results) {
        console.log('Символ "' + letter + '" повторяется "' + results[letter] + '" раз.');
    }
}
module.exports = countOfDifferentLetters;