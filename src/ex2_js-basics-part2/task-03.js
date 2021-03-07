function splitByParity(arrElem) {
    let evenNumbers = 0,
        zeros = 0,
        oddNumbers = 0;
        

    const arrNumbers = arrElem.filter(elem => 
        (typeof(elem) === "number") 
            && (elem != Infinity) 
            && (elem != -Infinity) 
            && !isNaN(elem));

    arrNumbers.forEach(elem => {
        if (elem%2 == 0) {
            evenNumbers++;
        } else if (elem === 0) {
            zeros++;
        } else {
            oddNumbers++;
        };
    });

    return [evenNumbers, oddNumbers, zeros] 
}

module.exports = splitByParity;