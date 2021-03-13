function splitByParity(arrElem) {
    const result = {
        evenNumbers: 0,
        oddNumbers: 0,
        zeros: 0,
    };
    
    const arrNumbers = arrElem.map(elem => {
        const isNumber = typeof elem === 'number';
        const isInfinity = elem !== Infinity && elem !== -Infinity;
        const isNotNaN = !isNaN(elem);

        if (isNumber && isInfinity && isNotNaN) {
            return elem;
        }
    });         
 
    for (let elem of arrNumbers) {
        if (elem%2 == 0 && elem != 0) {
            result.evenNumbers++;
        } 

        if (elem%2 !== 0 && elem != undefined) {
            result.oddNumbers++;
        }

        if (elem === 0) {
            result.zeros++;
        }  
    };

    return Object.values(result);
}

module.exports = splitByParity;
