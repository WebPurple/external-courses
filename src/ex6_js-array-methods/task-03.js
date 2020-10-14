const polifilEvery = function (arr, call) {
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    let item = arr[j];
    let array = arr;

    if (!call(item, j, array)) return false;
  }

  return true;
};

module.exports = polifilEvery;
