const polifilSome = function (arr, call) {
  for (let i = 0; i < arr.length; i++) {
 

    if (call(arr[i], i, arr)) return true;
  }

  return false;
};

module.exports = polifilSome;
