function addNewStringInObject(someString, someObject) {
  let coppySomeObject = someObject;
  for (let key in coppySomeObject) {
    if (key === someString) {
      return coppySomeObject;
    }
  }
  coppySomeObject[someString] = "new";
  return coppySomeObject;
}

module.exports = addNewStringInObject;
