function addSubstrInPosition(str, addedWord, pos){
    let array = str.split(' ');
    array.splice(pos+1,0,addedWord);
    return array.join(' ');
}
module.exports = addSubstrInPosition;
