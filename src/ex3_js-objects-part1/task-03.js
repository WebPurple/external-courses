function checkProp(str, obj) {
  for (key in obj) {
    if (obj.hasOwnProperty(str)) {
      return "true";
    }
    return "false";
  }
}

module.exports = checkProp;
