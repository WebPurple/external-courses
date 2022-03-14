function addValueInObject(string, object) {
  for (let key in object) {
    if (string === key && object.hasOwnProperty(key)) {
      return true;
    }
  }

  object[string] = 'new';

  return object;
}

module.exports = addValueInObject;
