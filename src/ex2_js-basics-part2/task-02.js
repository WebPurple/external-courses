function outputArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(i + 1 + ' элемент массива: ' + arr[i]);
    }
    console.log('Длина массива: ' + arr.length);
}
module.exports = outputArr;