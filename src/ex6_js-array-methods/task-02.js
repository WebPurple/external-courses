function analogSome(array, callback) {
    
    for(item of array) {
      if (!callback.call(item, array.indexOf(item), array)) {
         return false;
      }

      return true;  
   } 
}
 
module.exports = analogSome;
