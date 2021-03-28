function checkTruthOfArrElem(callback, array) {
   array.forEach(item => {
      if (callback.call(item, array.indexOf(item), array)) {
         return true;
      }
   });

   return false;   
}

module.exports = checkTruthOfArrElem;
