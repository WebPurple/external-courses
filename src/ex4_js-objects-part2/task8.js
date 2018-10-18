function camelize(str) {
    var arr = str.split('-');
    var i;
    for (i = 1; i < arr.length; i++) {
    
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
  
    return arr.join('');
  }
  
  console.log( camelize("no-camel-case") ); 
  
