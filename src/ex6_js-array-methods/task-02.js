function analogSome(array, callback) {
    
    array.forEach(item => {
        if (!callback.call(item, array.indexOf(item), array)) {
          return false;
       }
    });
 
    return true;   
 }
 
module.exports = analogSome;
