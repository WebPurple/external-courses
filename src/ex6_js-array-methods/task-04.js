const polifilEvery = require("./task-03");

const polifilFilter = function (arr, call) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let j = i;
    let item = arr[j];
    let array = arr;

    if (call(item, j, array)) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
};

module.exports = polifilFilter;
