function addObjNew(str, obj) {

  if (!(str in obj)) {
    obj[str] = 'new';
    return obj;
  }

  return obj;
}

module.exports = addObjNew;
