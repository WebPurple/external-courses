function checkUnique(arr) {
    let array = [];

    arr.forEach(elem => {
        if (!array.includes(elem)) {
            array.push(elem);
        } 
    });

    return (array.length === 1) ? true : false;  
}

module.exports = checkUnique;