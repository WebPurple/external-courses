const arrayOutput = (arr) => {

    arr.forEach((item, index) => {
        console.log(`Element №${index} = ${item}`);
    });

    console.log(`Number of elements = ${arr.length}`);

    return;
};

module.exports = arrayOutput;
