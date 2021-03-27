function analogSome(array, callback) {
    
    array.forEach(item => {
        if (!callback.call(item, i, array)) {
          return false;
       }
    });
 
    return true;   
 }
 
module.exports = analogSome;
