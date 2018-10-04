function equalityOfElemets (arr) {
    var counter = 1;
    for (var i = 1; i < arr.length; i++) {
        if (arr[0] === arr[i]) {
            counter += 1;
        }
    }
    if (counter === arr.length) {
        return 'true';
    } else {
        return 'false';
    }
}

console.log(equalityOfElemets([1, 1, 1, '1']));