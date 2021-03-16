function returnObjectPropertiesAndKeys(someObject) {
  for (let key in someObject) {
    if (someObject.hasOwnProperty(key)) {
      console.log(key, someObject[key]);
    }
  }
  return;
}

module.exports = returnObjectPropertiesAndKeys;
