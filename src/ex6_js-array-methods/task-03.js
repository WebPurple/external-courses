function checkTruthOfArrElem(array, callback, thisArg) {
   for (let i = 0; i < array.length; i++) {
      if (!callback.call(thisArg, array[i], i, array)) {
         return false;
      }   
   }
   
   return true;
}

module.exports = checkTruthOfArrElem;
