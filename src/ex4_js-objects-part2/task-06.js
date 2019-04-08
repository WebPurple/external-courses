function makeMeGreat(str){
  if(typeof str !== 'string'){
    return str;
  }
    var arWords = str.split(' ');
    var strWithUppers = '';
    for(var i = 0; i < arWords.length; i++){
        arWords[i] = arWords[i].charAt(0).toUpperCase() + arWords[i].slice(1);
    }
  return arWords.join(' ');
}
module.exports = makeMeGreat;