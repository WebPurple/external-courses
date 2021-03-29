function analogSome(array, callback, thisArg) {
   for (let item of array) {
      if (callback.call(thisArg, item, array.indexOf(item), array)) {
         return true;
      }
   } 

   return false;
}
 
module.exports = analogSome;
