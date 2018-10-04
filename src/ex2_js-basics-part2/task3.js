function evenOdd (arr) {
    var countEven = 0;
    var countOdd = 0;
    var countNull = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            countNull += 1;
        } else {
            if (arr[i] % 2 === 0) {
                countEven += 1;
            } else {
                countOdd += 1;
            }
        }
    }
    console.log('Even: ', countEven, ' Odd: ', countOdd, ' Null: ', countNull);
}

evenOdd ([1, 2, 3, 4, 0, 0, 0]);