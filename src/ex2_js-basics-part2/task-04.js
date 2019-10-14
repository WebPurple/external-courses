function equalityArrayElements(arr) {
    for (var b = 0; b < arr.length; b++)
      if (arr[b] !== arr[0]) return false;
    return true;
}
module.exports = equalityArrayElements; 
