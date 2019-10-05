module.exports = printMassivel;

function printMassive(massive) {
    massive.forEach(function(item) {
        console.log(item);
    });
    console.log("Число элементов : " + massive.length);
}