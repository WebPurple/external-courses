function parity(arr){
    let even = 0,
        odd = 0,
        zero = 0;

    arr.forEach(function(element){
        let typeData = typeof element;
        if (typeData === 'number' && !isNaN(element)){
            if (element === 0){
                zero++
            } else if (element % 2 === 0){
                even++
            } else {
                odd++
            }
        };
    });

    return [even,odd,zero];
}

module.exports = parity