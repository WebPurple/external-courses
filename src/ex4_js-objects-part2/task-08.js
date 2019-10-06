module.exports = converToLowerCamelCase;

function converToLowerCamelCase(str){
    let array = str.split(' ');
    array[0] = array[0].toLowerCase();
    for(let i = 1; i < array.length;i++){
        array[i] = array[i][0].toUpperCase() + array[i].slice(1).toLowerCase();
    }
    return array.join('');
}