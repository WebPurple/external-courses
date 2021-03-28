function analogSome(array, callback, thisArg) {
   for (let item of array) {
      if (!callback.call(thisArg, item, array.indexOf(item), array)) {
         return false;
      }

      return true;  
   } 
}
 
module.exports = analogSome;
