function flatArr(a) {
    for (var i = 1; i < a.length; ++i) {
      
      if (a[i-1] !== a[i]) return false
      
    }
    
    return true;
  }

module.exports = flatArr;
