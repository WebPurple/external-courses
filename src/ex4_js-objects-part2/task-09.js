'use strict'

function insertWord(somestring, word, wordPosition){
    let result = '';
    if (wordPosition === -1){
        result += word + ' ';
    }
    if (somestring.indexOf(' ') > 0){
        result += somestring.substr(0, somestring.indexOf(' ')+1);
        result += insertWord(somestring.substring(somestring.indexOf(' ')+1), word, wordPosition-1);
    } else {
        result += somestring.substring(0);
    }
    return result;
}

module.exports = insertWord;
