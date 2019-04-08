function addWord(str, word, pos){

    var arWords = str.split(' ');
    var arNewWords = [];

    for(var i = 0; i < arWords.length; i++){
        arNewWords.push(arWords[i]);
        if(i === pos){
            arNewWords.push(word);
        }
    }
  return arNewWords.join(' ');
}
module.exports = addWord;