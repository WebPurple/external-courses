function insertWord (str,word,pos){
    let index = str.indexOf(word)+word.length+1;
    let arrayStr = str.split("");
    arrayStr.splice(index,0," "+word);
    return arrayStr.join("")
}
module.exports = insertWord;