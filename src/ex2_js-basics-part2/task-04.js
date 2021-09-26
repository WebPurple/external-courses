function GetequalityElementOfArr(array) {
  const zeroElement = array[0];
  return !array.some((item) => item !== zeroElement);
}

module.exports = GetequalityElementOfArr;
