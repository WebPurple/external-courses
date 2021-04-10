function analogSome(array, callback, thisArg) {
   for (let i = 0; i < array.length; i++) {
      if(callback.call(thisArg, array[i], i, array)) {
         return true;
      }
   } 

   return false;
}
 
module.exports = analogSome;
