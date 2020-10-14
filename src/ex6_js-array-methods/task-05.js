const polifilMap = function (arr, call) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let j = i;
    let item = arr[j];
    let array = arr;

    newArr.push(call(item, j, array));
  }

  return newArr;
};

module.exports = polifilMap;
