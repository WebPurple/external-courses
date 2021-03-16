function addNewStringInObject (someString, someObject ) {
    for (let key in someObject) {
        if (key === someString ) {
            return someObject;
        }
    }
    someObject[someString] = "new"
    return someObject;
}

// let obj= {a: 1, b: 2, c: 3, d: 4};
// let string = "a";
// console.log( addNewStringInObject(string, obj));

module.exports = addNewStringInObject;