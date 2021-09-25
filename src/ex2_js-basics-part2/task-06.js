'use strict';

function typeNumber(variable) {
    let typeVariable;
    if (Number.isInteger(variable) && variable < 1001 && variable > -1) {
        if (variable === 0) {
            console.log('It is Null!');
            typeVariable = 'Не причисляется ни к простым, ни к составным числам';
        } else if (variable === 1) {
            console.log('It is 1!');
            typeVariable = 'Не причисляется ни к простым, ни к составным числам';
        }
        for (let i = 2; i < variable; i++) {
            if (variable % i !== 0) {
                typeVariable = `Число ${variable} - простое число`;
            } else {
                typeVariable = `Число ${variable} - составное число`;
                break;
            }
        }
    } else {
        console.log('Данные неверны');
        typeVariable = 'Данные неверны';
    }
    return typeVariable;
}

module.exports = typeNumber;
