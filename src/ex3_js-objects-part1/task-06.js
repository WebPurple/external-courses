const copyingObject = ((testObject) => JSON.parse(JSON.stringify(testObject)));

module.exports = copyingObject;