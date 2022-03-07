function sameElements(arr) {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] !== arr[0]) {
        return false;
      }
    }
   
    return true;
  }
   
  module.exports = sameElements();
   
  