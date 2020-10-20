const polifilMap = function (arr, call) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(call(arr[i], i, arr));
  }

  return newArr;
};

module.exports = polifilMap;
