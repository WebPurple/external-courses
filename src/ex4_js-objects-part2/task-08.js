function lowerCamelCase (str){
    str1 = str.toLowerCase();
    str2 = str1.replace(/\s\S/g, function(a) {return a.toUpperCase()});
    str3 = str2.replace(/^\S/g, function(b) {return b.toLowerCase()});
    return str3.replace(/\s+/g, '');
}
module.exports = lowerCamelCase