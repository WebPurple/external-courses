module.exports = reverseStr;

function reverseStr(str){
    let array = str.split('');
    array.reverse();
    return array.join('');
}