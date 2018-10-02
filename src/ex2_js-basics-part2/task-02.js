function isSimpleOrCompound (num) {
    if(num <= 1000) {
if((num % 2 == 0) && (num != 2)) {
    return 'compound';
}
else if(num == 2) {
    return 'simple';
}
else {
        var delitel = Math.round(Math.sqrt(num));
            if(num % delitel == 0) {
                return 'compound';
            }
            else if(num % i != 0) {
                return 'simple';
            }
}
}
    else {
        return 'data are wrong';
    }
}
console.log(isSimpleOrCompound(11));