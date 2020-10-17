function checkPropertyInPrototype(userProperty,userData) {
  if (!userData.hasOwnProperty(userProperty) && Object.getPrototypeOf(userData).hasOwnProperty(userProperty)) {
    return userData[userProperty];
  }
  
  return undefined;
}

module.exports = checkPropertyInPrototype;
