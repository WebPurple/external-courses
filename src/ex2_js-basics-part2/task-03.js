function splitByParity(arrElem) {
    const result = {
        evenNumbers: 0,
        zeros: 0,
        oddNumbers: 0,
    };
    
    const arrNumbers = arrElem.filter(elem => {
        const isNumber = typeof elem === 'number';
        const isInfinity = elem !== Infinity && elem !== -Infinity;
        const isNotNaN = !isNaN(elem);

        if (isNumber && isInfinity && isNotNaN) {
            return elem;
        }
    });         

    arrNumbers.forEach(elem => {
        if (elem%2 == 0) {
            result.evenNumbers++;
        } 

        if (elem%2 !== 0) {
            result.oddNumbers++;
        }

        if (elem === 0) {
            result.zeros++;
        } 
    });

    return result; 
}

module.exports = splitByParity;
