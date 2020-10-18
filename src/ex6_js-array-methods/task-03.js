const polifilEvery = function (arr, call) {
  for (let i = 0; i < arr.length; i++) {
    if (!call(arr[i], i, arr)) return false;
  }

  return true;
};

module.exports = polifilEvery;
