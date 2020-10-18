const polifilReduce = function (array, callback, initialValue) {
  const begining = initialValue === undefined ? 1 : 0;
  let previousValue = begining === 1 ? array[0] : initialValue;

  for (let i = begining; i < array.length; i++) {
    previousValue = callback(previousValue, array[i], i, array);
  }

  return previousValue;
};

module.exports = polifilReduce;
