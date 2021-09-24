'use strict'

function typeNumber(variable) {
    if (Number.isInteger(variable) && variable < 1001 && variable > -1) {
        if (variable === 0) {
            console.log('It is Null!');
            return null;
        } else if (variable === 1) {
            console.log('It is 1!');
            return null;
        } 
        for (let i = 2; i < variable; i++) {
            if (variable % i !== 0) {
                console.log(`Variable ${variable} is simple!!!`);
                return null;
            } else {
                console.log(`Variable ${variable} is not simple!!!`);
                return null;
            }
        }
    } else {
        console.log('Data Error');
        return null;
    }
}

module.exports = typeNumber;
