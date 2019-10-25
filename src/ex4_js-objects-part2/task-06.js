function upFirstCharAll (str){
    return str.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
}
module.exports = upFirstCharAll;