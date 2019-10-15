function countSymbol(str){
    let array = str.split(''), counter = 0;
    array = array.sort();
    for (let i = 0; i < array.length; i++) {
        counter++;
        if (array[i] !== array[i + 1]) {
        console.log(array[i] + " = " + counter);
        counter = 0;
        }
    }
     return str;
}

module.exports = countSymbol;