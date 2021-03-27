function checkTruthOfArrElem(callback, array) {
   array.forEach(item => {
      if (callback.call(item, i, array)) {
         return true;
      }
   });

   return false;   
}

module.exports = checkTruthOfArrElem;
