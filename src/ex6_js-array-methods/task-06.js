const polifilReduce = function (array, callback, initialValue) {
  const begining = initialValue === undefined ? 1 : 0;
  let previousValue;
  
  if (begining === 1) {
    previousValue = array[0];
  } else {
    previousValue = initialValue;
  }

  for (let i = begining; i < array.length; i++) {
    previousValue = callback(previousValue, array[i], i, array);
  }

  return previousValue;
};
module.exports = polifilReduce;
