function maxValue(a) {
    var max = a[0]
    for (var i = 1; i < a.length; ++i) {
      if (a[i] > max) {
        
        max = a[i];
      }
    }
    
    console.log(max);
  }

module.exports = maxValue; 