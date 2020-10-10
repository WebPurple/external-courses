function propertyCheck(userString,userData) {
  let newUserData = userData;
  
  if (!newUserData.hasOwnProperty(userString)) {
    newUserData[userString] = 'new';
  }
  
  return newUserData;
}

module.exports = propertyCheck;
