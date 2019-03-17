function delSpace(str) {
    var firstIndex = str.indexOf(" ");
    var lastIndex = str.lastIndexOf(" ");
    if (firstIndex !== -1) {
        return str.slice(0, firstIndex) + str.slice(firstIndex + 1, lastIndex) + str.slice(lastIndex + 1);
    }
    return undefined;
}
module.exports = delSpace