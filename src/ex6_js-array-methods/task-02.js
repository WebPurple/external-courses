const polifilSome = function (arr, call) {
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    let item = arr[j];
    let array = arr;

    if (call(item, j, array)) return true;
  }

  return false;
};

module.exports = polifilSome;
