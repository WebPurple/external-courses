function countOfDifferentLetters (str){
    let results = Array.prototype.reduce.call(str, 
        function (obj, letter) {
            const newObj = Object.assign({}, obj)
            if (newObj[letter] === undefined) {
                newObj[letter] = 0;
            }
            newObj[letter] += 1;
            return newObj;
        }, {});
    for (let letter in results) {
        console.log('Символ "' + letter + '" повторяется "' + results[letter] + '" раз.');
    }
}
module.exports = countOfDifferentLetters;