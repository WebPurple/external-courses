function printPropAndVal(inputObject) {
  // eslint-disable-next-line no-restricted-syntax
  for (const key in inputObject) {
    if (inputObject.hasOwnProperty(key)) {
      console.log(key, inputObject[key]);
    }
  }
  return null;
}
module.exports = printPropAndVal();
