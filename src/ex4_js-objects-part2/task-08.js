function toLowerCamelCase(str){
    var arWords = str.split(' ');
    for(var i = 0; i < arWords.length; i++){
        arWords[i] = arWords[i].toLowerCase();
        if(i > 0){
            arWords[i] = arWords[i].charAt(0).toUpperCase() + arWords[i].slice(1);
        }
    }
    return arWords.join('');
}
module.exports = toLowerCamelCase;