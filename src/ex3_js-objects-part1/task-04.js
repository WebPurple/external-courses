function addObjNew(str, obj) {
  if (!(str in obj)){
    // eslint-disable-line no-param-reassign  obj[str] = 'new';
  }

  return obj;
}

module.exports = addObjNew;
