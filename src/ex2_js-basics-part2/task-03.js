function splitByParity(arrElem) {
    const result = {
        evenNumbers: 0,
        oddNumbers: 0,
        zeros: 0,
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

        if (true) {
            result.zeros++;
        } 
    });

    return Object.values(result);
}

module.exports = splitByParity;
