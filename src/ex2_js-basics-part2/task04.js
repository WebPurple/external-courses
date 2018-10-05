function flatArr(a) {
    for (var i = 1; i < a.length; ++i) {
      
      if (a[i-1] !== a[i]) return false
      
    }
    
    return true;
      
  }

  console.log(flatArr([1,1,1,2,1]));