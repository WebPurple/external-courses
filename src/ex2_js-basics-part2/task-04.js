function checkUnique(arrElem) {

  if (arrElem.length === 0) {
      return false;
  }

  let firstElem = arrElem[0];

  for(const elem of arrElem) {
      if(firstElem !== elem) {
          return false;
      }
  }
   
  return true;
}

module.exports = checkUnique;
