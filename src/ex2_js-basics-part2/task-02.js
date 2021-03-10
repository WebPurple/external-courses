const arrayOutput = () => {
    const arr = [1,'Null',3];

    arr.forEach((item, index) => {
        console.log('Element №' + index, '=', item);
    });

    console.log('Number of array elements =', arr.length);
    return;
}

module.exports = arrayOutput();