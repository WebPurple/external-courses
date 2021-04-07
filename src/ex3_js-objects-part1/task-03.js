function checkKeyInObject(chekedString, chekedObject) {
    if (chekedString in chekedObject) {
        return true; 
    } 
    return false;
}

module.exports = checkKeyInObject;
