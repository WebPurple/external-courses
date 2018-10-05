function myFunc(num) {
    if (num <= 1000) {
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {return 'Number ' + num + ' is Composite number.';}
            else return 'Number ' + num + ' is Prime number'
        }
    }
    return 'Incorrect input. Pleas enter number up to 1000'
}

console.log(myFunc(1001));
console.log(myFunc(14));
console.log(myFunc(7));