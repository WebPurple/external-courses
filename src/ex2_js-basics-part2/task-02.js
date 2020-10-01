function showElem(arr) {
    for (let index = 0; index < arr.length; index++) {
        console.log(arr[index]);
    };
    
    console.log(`Общее число элементов = ${arr.length}`)
    return;
};

module.exports = showElem;
