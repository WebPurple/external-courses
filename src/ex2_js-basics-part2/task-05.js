function maxNumber(arr){
    arr.sort(function(a, b) {
        return a - b;
      });
     return arr[arr.length - 1];
}

module.exports = maxNumber