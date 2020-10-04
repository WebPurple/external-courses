module.exports = function propertyCheck(userString,userData) {
  let newUserData = userData;

  if (userData.hasOwnProperty(userString)) {
    return userData;
  }
 
  newUserData[userString] = 'new';   
  
  return newUserData;
}
