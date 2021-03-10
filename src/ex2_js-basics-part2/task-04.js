function checkUnique(arrElem) {

    let array = [];

    for(const elem of arrElem) {
        if(arrElem[0] === elem) {
            array.push(elem);
        }
    }
     
    return array.length === arrElem.length;
}

module.exports = checkUnique;
