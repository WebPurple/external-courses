
function insert(str, index, value) {
    return str.substr(0, index) + value + str.substr(index);
}

console.log(insert("No sky", 3, "man's "));