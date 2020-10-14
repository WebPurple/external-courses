function checkPropertyInPrototype(userProperty,userData) {
  if (!userData.hasOwnProperty(userProperty) && userProperty in userData) {
    return userData[userProperty];
  }
  
  return undefined;
}

module.exports = checkPropertyInPrototype;
