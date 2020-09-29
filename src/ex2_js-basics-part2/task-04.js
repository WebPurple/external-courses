function everArray(arr) {
    let arr1 = arr.every(function (item, i, list) {
        return item === list[0];
    });
    console.log(arr1);
};
module.exports = everArray;
