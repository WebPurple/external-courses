module.exports = function cloneObject(userData) {
  let userDataClone = {};

  for (key in userData) {
    if (userData.hasOwnProperty(key)) {
      userDataClone[key] = userData[key];
    }
  }

  return userDataClone;
}
