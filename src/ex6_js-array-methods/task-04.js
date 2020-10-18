const polifilFilter = function (arr, call) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (call(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
};

module.exports = polifilFilter;
