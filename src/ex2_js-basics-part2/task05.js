function maxValue(a) {
    var max = a[0]
    for (var i = 1; i < a.length; ++i) {
      if (a[i] > max) {
        
        max = a[i];
      }
    }
    
    console.log(max);
  }

maxValue([15,3,231,4,534,654]);