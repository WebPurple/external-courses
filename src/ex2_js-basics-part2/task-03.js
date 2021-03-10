function splitByParity(arrElem) {

    const result = {
        evenNumbers: 0,
        zeros: 0,
        oddNumbers: 0,
    };
    
    const arrNumbers = arrElem.filter(elem => {
        
        const checkForNumber = typeof(elem) === 'number';
        const checkForInfinity = elem !== Infinity && elem !== -Infinity;
        const checkForNaN = !isNaN(elem);

        if (checkForNumber && checkForInfinity && checkForNaN) {
            return elem;
        }
    });         

    arrNumbers.forEach(elem => {
        if (elem%2 == 0) {
            result.evenNumbers++;
            return;
        } 
        
        if (elem === 0) {
            result.zeros++;
            return;
        } 
        
        else {
            result.oddNumbers++;
            return;
        };
    });

    return result; 
}

module.exports = splitByParity;
