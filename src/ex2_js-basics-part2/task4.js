const arrayElementsComparison = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[0] === arr[i]) {
      console.log('true');
    } else {
      console.log('false');
    }
  }
};
module.exports = arrayElementsComparison;
