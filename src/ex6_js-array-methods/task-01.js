function polSlice(arr, beginArr = 0, endArr) {
  let array = [];
  let end = endArr;
  let begin = beginArr;

  if (end === undefined) {
    end = arr.length;
  }

  if (end < 0) {
    end = arr.length + end;
  }

  if (begin < 0) {
    begin = arr.length + begin;
  }

  end -= begin;

  for (let i = 0; i < end; i++) {
    array[i] = arr[begin++];
  }

  return array;
}

module.exports = polSlice;
