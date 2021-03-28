function checkTruthOfArrElem(callback, array) {
   for(item of array) {
      if (callback.call(item, array.indexOf(item), array)) {
         return true;
      }

      return false;  
   }
}

module.exports = checkTruthOfArrElem;
