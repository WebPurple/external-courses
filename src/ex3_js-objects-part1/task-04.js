function addValueInObject(string, object) {
  for (const key in object) {
    if (string === key && object.hasOwnProperty(key)) {
      return true;
    }
  }

  object[string] = 'new';

  return object;
}

module.exports = addValueInObject;
