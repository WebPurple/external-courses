function checkProp(str, obj) {
  for (key in obj) {
    if (obj.hasOwnProperty(str)) {
      continue;
    } else {
      obj[str] = `'new'`;
    }
  }
  return obj;
}

module.exports = checkProp;
