function addObjNew(str, obj) {
  if (!(str in obj)) obj[str] = 'new';

  return obj;
}

module.exports = addObjNew;
