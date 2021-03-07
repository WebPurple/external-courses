function checkUnique(arrElem) {
    let array = [];

    arrElem.forEach(elem => {
        if (!array.includes(elem)) {
            array.push(elem);
        } 
    });

    return (array.length === 1) ? true : false;  
}

module.exports = checkUnique;