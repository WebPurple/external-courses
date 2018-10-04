function primeNumber (numb) {
    var count = 0;
    for (var i = 1; i <= numb; i++) {
        if (numb % i === 0) {
            count += 1;
        }
    }
    if (count === 2) {
        return ('Number ' + numb + ': Prime number');
    } else {
        return ('Number ' + numb + ': Compound number');
    }
}

module.exports = primeNumber;