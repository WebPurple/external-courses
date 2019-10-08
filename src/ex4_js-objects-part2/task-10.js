function reverseStr(str){
    let array = str.split('');
    array.reverse();
    return array.join('');
}
module.exports = reverseStr;