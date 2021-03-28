function analogSome(array, callback) {
   for (let item of array) {
      if (!callback.call(item, array.indexOf(item), array)) {
         return false;
      }

      return true;  
   } 
}
 
module.exports = analogSome;
