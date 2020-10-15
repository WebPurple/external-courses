const polifilReduce = function (arr, call) {
  let newArr = 0;

  for (let i = 0; i < arr.length; i++) {
    let j = i;
    let item = arr[j];
    let array = arr;

    newArr += call(item, j, array);
  }

  return newArr;
};

module.exports = polifilReduce;
