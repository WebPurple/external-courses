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

  if (end > arr.length) {
    end = arr.length - 1;
  }

  if (begin < 0) {
    begin = arr.length + begin;
  }

  if (begin < 0) {
    begin = 0;
  }

  end -= begin;

  for (let i = 0; i < end; i++) {
    array[i] = arr[begin++];
  }

  return array;
}

module.exports = polSlice;
